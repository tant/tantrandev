'use client'

import React, { useEffect, useState } from "react";
import Header from '../components/Header';

import Breadcrumbs from '../components/Breadcrumbs';

// Cal.com integration component
const CalEmbed = ({ calLink }: { calLink: string }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "auto" }}
      data-cal-link={calLink}
    />
  );
};

export default function ReachMePage() {
  const [view, setView] = useState<'options' | 'form' | 'schedule'>('options');

  // Form state
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      message: message.trim(),
      contactMethod,
      email: (contactMethod === "email" || contactMethod === "both") ? email.trim() : undefined,
      phone: (contactMethod === "phone" || contactMethod === "both") ? phone.trim() : undefined,
    };

    if (!firstName || !message || !contactMethod) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
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
        // Reset form
        setFirstName("");
        setLastName("");
        setMessage("");
        setContactMethod("email");
        setEmail("");
        setPhone("");
        setTimeout(() => setView('options'), 3000); // Go back to options after 3s
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'form':
        return (
          <>
            <button onClick={() => setView('options')} className="text-sm text-indigo-600 hover:underline mb-4">&larr; Back to options</button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="First Name *" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                <input type="text" className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
              <textarea className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={5} placeholder="Your Message *" value={message} onChange={e => setMessage(e.target.value)} required />
              <div>
                <label className="font-semibold text-gray-700 mb-2 block">Preferred Contact Method</label>
                <div className="flex gap-4">
                  {/* Styled radio buttons */}
                </div>
              </div>
              {(contactMethod === "email" || contactMethod === "both") && <input type="email" className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} required />}
              {(contactMethod === "phone" || contactMethod === "both") && <input type="tel" className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />}
              <button type="submit" className="w-full bg-indigo-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-indigo-700 transition disabled:opacity-50" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
              {success && <p className="text-green-600 font-semibold mt-2">{success}</p>}
              {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}
            </form>
          </>
        );
      case 'schedule':
        return (
          <div className="h-full flex flex-col">
            <button onClick={() => setView('options')} className="text-sm text-indigo-600 hover:underline mb-4 self-start">&larr; Back to options</button>
            <div className="flex-grow rounded-lg overflow-hidden">
              <CalEmbed calLink="txntan/1-hour-meeting" />
            </div>
          </div>
        );
      case 'options':
      default:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let's Connect</h1>
            <p className="mt-4 text-lg text-gray-600">Choose the best way to get in touch with me.</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Option 1: Send a Message */}
              <div onClick={() => setView('form')} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition">
                <svg className="w-12 h-12 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
                <p className="text-gray-600 mt-2">Best for general inquiries or questions.</p>
              </div>
              {/* Option 2: Schedule a Meeting */}
              <div onClick={() => setView('schedule')} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition">
                <svg className="w-12 h-12 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <h2 className="text-xl font-bold text-gray-900">Schedule a Meeting</h2>
                <p className="text-gray-600 mt-2">Book a time that works for you directly on my calendar.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 ease-in-out" style={{ minHeight: '600px' }}>
            <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Reach Me', href: '/reach-me' }]} />
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}
