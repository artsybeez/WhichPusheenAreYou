// Tiny zero-dependency local dev server.
//
// Serves the static site AND runs the same /api functions used on Vercel, so
// you can test the Stripe skin shop locally with just Node:
//
//   npm install
//   npm start          # -> http://localhost:3000
//
// It reads STRIPE_SECRET_KEY from a local .env file (gitignored).

import http from "node:http";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import createCheckoutSession from "./api/create-checkout-session.js";
import verifySession from "./api/verify-session.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// ---- Load .env into process.env (simple KEY=VALUE parser) ----
function loadEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadEnv();

// ---- API routes mapped to the Vercel-style handlers ----
const API_ROUTES = {
  "/api/create-checkout-session": createCheckoutSession,
  "/api/verify-session": verifySession
};

// Give the handler the small extras Vercel adds (req.body, req.query, res.status/json).
function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => resolve(data));
  });
}

async function handleApi(handler, req, res, url) {
  // res shims to match the handler's res.status(...).json(...) usage.
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (obj) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj));
    return res;
  };

  req.query = Object.fromEntries(url.searchParams.entries());

  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    const raw = await readBody(req);
    try { req.body = raw ? JSON.parse(raw) : {}; }
    catch { req.body = raw; }
  }

  try {
    await handler(req, res);
  } catch (err) {
    console.error("API handler crashed:", err);
    if (!res.headersSent) { res.statusCode = 500; res.end("Internal Server Error"); }
  }
}

// ---- Static file serving ----
const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".ico": "image/x-icon"
};

async function serveStatic(req, res, url) {
  // Map "/" to index.html; decode %20 etc. so filenames resolve.
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  // Resolve and confine to the project directory (no path traversal).
  const filePath = path.join(__dirname, pathname);
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403; res.end("Forbidden"); return;
  }

  try {
    const stat = await fsp.stat(filePath);
    if (stat.isDirectory()) { res.statusCode = 404; res.end("Not found"); return; }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader("Content-Type", CONTENT_TYPES[ext] || "application/octet-stream");
    fs.createReadStream(filePath).pipe(res);
  } catch {
    res.statusCode = 404; res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost:" + PORT}`);
  const handler = API_ROUTES[url.pathname];
  if (handler) {
    await handleApi(handler, req, res, url);
  } else {
    await serveStatic(req, res, url);
  }
});

server.listen(PORT, () => {
  const ok = process.env.STRIPE_SECRET_KEY ? "✓ STRIPE_SECRET_KEY loaded" : "✗ STRIPE_SECRET_KEY MISSING (add it to .env)";
  console.log(`\n🐱  Which Pusheen Are You? running at http://localhost:${PORT}`);
  console.log(`    ${ok}\n`);
});
