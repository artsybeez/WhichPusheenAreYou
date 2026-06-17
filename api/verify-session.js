// GET /api/verify-session?session_id=cs_test_...
//
// Returns: { "paid": true, "skinId": "pusheen-galaxy" } on success.
//
// The browser calls this after returning from Stripe Checkout. We ask Stripe
// directly whether the session was actually paid (never trust the browser),
// and if so we tell the frontend which skin to unlock. The skin id comes from
// the session metadata we set when the session was created.

import Stripe from "stripe";
import { getSkinById } from "./_catalog.js";

export default async function handler(req, res) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Stripe is not configured (missing STRIPE_SECRET_KEY)." });
  }

  const sessionId = req.query.session_id;
  if (!sessionId || typeof sessionId !== "string") {
    return res.status(400).json({ error: "Missing session_id." });
  }

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const isPaid = session.payment_status === "paid";
    const skinId = session.metadata?.skinId;
    const skin = getSkinById(skinId);

    if (!isPaid || !skin) {
      return res.status(200).json({ paid: false });
    }

    return res.status(200).json({ paid: true, skinId: skin.id });
  } catch (err) {
    console.error("verify-session failed:", err);
    return res.status(500).json({ error: "Could not verify payment." });
  }
}
