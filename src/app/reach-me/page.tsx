'use client'

import React, { useEffect, useState } from "react";
import Header from '../components/Header'

export default function ReachMePage() {
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Prepare payload
    const payload: any = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      message: message.trim(),
      contactMethod,
      email: (contactMethod === "email" || contactMethod === "both") ? email.trim() : undefined,
      phone: (contactMethod === "phone" || contactMethod === "both") ? phone.trim() : undefined,
    };

    // Basic input validation
    if (!firstName || !message || !contactMethod) {
      setError("Missing required fields.");
      setLoading(false);
      return;
    }
    if ((contactMethod === "email" || contactMethod === "both") && email) {
      // Simple email format check
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRegex.test(email)) {
        setError("Invalid email format.");
        setLoading(false);
        return;
      }
    }
    if ((contactMethod === "phone" || contactMethod === "both") && phone) {
      // Simple phone format check (digits, spaces, +, -)
      const phoneRegex = /^[\d\s\+\-]{6,20}$/;
      if (!phoneRegex.test(phone)) {
        setError("Invalid phone format.");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/brevo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess("Your message has been sent successfully!");
        setFirstName("");
        setLastName("");
        setMessage("");
        setContactMethod("email");
        setEmail("");
        setPhone("");
      } else {
        setError("Failed to send message."); // Do not expose backend error details
      }
    } catch (err: any) {
      setError("Failed to send message."); // Do not expose error details
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center bg-gray-50 pt-24">
        <div className="bg-white rounded-xl shadow p-8 w-full max-w-4xl flex flex-col lg:flex-row gap-10 lg:gap-6 h-[600px]">
          <div className="flex-1 flex flex-col justify-center min-w-[280px] h-full">
            <h1 className="text-2xl font-bold text-gray-900 text-center lg:text-left">Contact / Reach Me</h1>
            <form className="flex flex-col gap-4 mt-4 flex-1" onSubmit={handleSubmit}>
              <label className="font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your first name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
              <label className="font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Your last name (optional)"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />

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
                type="submit"
                className="w-full bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
              {success && <div className="text-green-600 font-semibold mt-2">{success}</div>}
              {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
            </form>
          </div>
          <div className="relative flex-1 flex flex-col items-center gap-4 mt-8 lg:mt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-gray-200 min-w-[320px] max-w-full h-full">
            <h2 className="text-lg font-semibold text-gray-900 text-center lg:text-left">Or schedule a meeting</h2>
            <p className="text-sm text-gray-500 text-center lg:text-left">Prefer a live meeting? Instantly book a time with me via Calendly.</p>
            <div
              className="calendly-inline-widget calendly-widget w-full max-w-[500px] h-full"
              data-url="https://calendly.com/txntan"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
