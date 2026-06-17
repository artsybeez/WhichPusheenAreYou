// POST /api/create-checkout-session
//
// Body: { "skinId": "pusheen-galaxy" }
// Returns: { "url": "https://checkout.stripe.com/..." }
//
// Creates a Stripe Checkout Session for a single skin and returns the hosted
// checkout URL. The browser redirects the buyer there; Stripe handles the card
// form (including the 4242 4242 4242 4242 test card) and then redirects back to
// our site with the session id so we can verify the payment.

import Stripe from "stripe";
import { CURRENCY, getSkinById } from "./_catalog.js";

function getOrigin(req) {
  // Prefer the forwarded headers Vercel sets; fall back to the Host header.
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost:3000";
  // Local dev runs over plain http; Vercel sets x-forwarded-proto to https.
  const isLocal = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
  const proto = req.headers["x-forwarded-proto"] || (isLocal ? "http" : "https");
  return `${proto}://${host}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." });
  }

  // Vercel parses JSON bodies automatically, but guard against string bodies.
  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const skin = getSkinById(body.skinId);
  if (!skin) {
    return res.status(400).json({ error: "Unknown skin." });
  }

  const stripe = new Stripe(secretKey);
  const origin = getOrigin(req);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: skin.priceCents,
            product_data: {
              name: `${skin.name} skin`,
              description: `A ${skin.name} skin for ${skin.character} in Which Pusheen Are You?`
            }
          }
        }
      ],
      // We read this metadata back when verifying the session.
      metadata: { skinId: skin.id },
      success_url: `${origin}/?skin_success={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?skin_cancel=1`
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-checkout-session failed:", err);
    return res.status(500).json({ error: "Could not start checkout. Please try again." });
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
