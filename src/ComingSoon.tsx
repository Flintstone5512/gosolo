import React, { useState } from "react";
import "./comingsoon.css";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch("https://api.sheetbest.com/sheets/2972f664-a8dd-4bba-9ffe-da0229bdc9d4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSuccess(true);
      setEmail("");

      // Auto-hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="cs-container">
      {/* Floating Phone Mockup */}
      <div className="phone-wrapper">
        <img
          src="/SoloHero3.png"
          alt="SoloMoney App Preview"
          className="phone floating"
        />
      </div>

      {/* Coming Soon Label */}
      <p className="coming-soon-label">COMING SOON</p>

      {/* Headline */}
      <h1 className="headline">
        The smarter way for solo earners
        <br /> to manage their money.
      </h1>

      {/* Subheadline */}
      <p className="subheadline">
        Track income, smooth cash flow, automate taxes & build a financial
        safety net — without needing a W-2. Most solo workers stay broke—not because they don’t earn, but because they don’t track. Join for early access.
      </p>

      {/* Success Banner */}
      {success && (
        <div className="success-banner">
          🎉 You're on the list! Check your email.
        </div>
      )}

      {/* Email Form */}
      <form className="email-box" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? (
            <span className="loader"></span>
          ) : (
            "→"
          )}
        </button>
      </form>

      {/* Social Proof */}
      <div className="social-proof">
        <img src="/Send_money3.png" alt="Early Users" />
        <span>3.5k people signed up</span>
      </div>
    </div>
  );
}

