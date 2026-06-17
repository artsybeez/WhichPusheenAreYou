// Server-side source of truth for the skin shop.
//
// Prices live here ONLY — the browser sends a skin `id`, never a price, so a
// user can't tamper with what they pay. Each entry maps to a character key
// (A–F) that the quiz uses, plus the image the frontend unlocks on purchase.
//
// `priceCents` is in the smallest currency unit (USD cents). 199 = $1.99.

export const CURRENCY = "usd";

export const SKINS = [
  { id: "pusheen-galaxy", charKey: "A", character: "Pusheen", name: "Galaxy Pusheen", img: "skins/pusheen-galaxy.png", priceCents: 199 },
  { id: "stormy-hacker",  charKey: "B", character: "Stormy",  name: "Hacker Stormy",  img: "skins/stormy-hacker.png",  priceCents: 199 },
  { id: "pip-nature",     charKey: "C", character: "Pip",     name: "Nature Pip",     img: "skins/pip-nature.png",     priceCents: 199 },
  { id: "cheek-pirate",   charKey: "D", character: "Cheek",   name: "Pirate Cheek",   img: "skins/cheek-pirate.png",   priceCents: 199 },
  { id: "bo-arctic",      charKey: "E", character: "Bo",      name: "Arctic Bo",      img: "skins/bo-arctic.png",      priceCents: 199 },
  { id: "sloth-lava",     charKey: "F", character: "Sloth",   name: "Lava Sloth",     img: "skins/sloth-lava.png",     priceCents: 199 }
];

export function getSkinById(id) {
  return SKINS.find((s) => s.id === id) || null;
}
