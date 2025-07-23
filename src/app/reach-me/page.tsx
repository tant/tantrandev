'use client'

import React, { useEffect, useState } from "react";

export default function ReachMePage() {
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-4xl flex flex-col lg:flex-row gap-6">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900 text-center lg:text-left">Contact / Reach Me</h1>
          <form className="flex flex-col gap-4 mt-4">
            <label className="font-semibold text-gray-700">Message</label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              rows={4}
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />

            <label className="font-semibold text-gray-700">Preferred Contact Method</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                />
                Email
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={contactMethod === "phone"}
                  onChange={() => setContactMethod("phone")}
                />
                Phone
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactMethod"
                  value="both"
                  checked={contactMethod === "both"}
                  onChange={() => setContactMethod("both")}
                />
                Both
              </label>
            </div>

            {(contactMethod === "email" || contactMethod === "both") && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required={contactMethod === "email" || contactMethod === "both"}
                />
              </div>
            )}
            {(contactMethod === "phone" || contactMethod === "both") && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required={contactMethod === "phone" || contactMethod === "both"}
                />
              </div>
            )}

            <button
              type="button"
              className="w-full bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
        <div className="relative flex-1 flex flex-col items-center gap-4 mt-8 lg:mt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 text-center lg:text-left">Or schedule a meeting</h2>
          <p className="text-sm text-gray-500 text-center lg:text-left">Prefer a live meeting? Instantly book a time with me via Calendly.</p>
          <div
            className="calendly-inline-widget w-full rounded-xl"
            data-url="https://calendly.com/txntan"
            style={{ minWidth: 320, height: 700 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
