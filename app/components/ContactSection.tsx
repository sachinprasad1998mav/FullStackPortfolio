"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_2s1w0jk", // Your EmailJS service ID
        "template_jlqnsx8", // Your EmailJS template ID
        form.current,
        "RADKQ0TUc4jGlEFAc" // Your EmailJS public key
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatusMessage("❌ Failed to send the message. Please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-10">
          Have a project idea or just want to say hello? Fill out the form below
          and I&apos;ll get back to you soon!!
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#21262D] border border-[#2D333B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#21262D] border border-[#2D333B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-[#21262D] border border-[#2D333B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>

          {statusMessage && (
            <p
              className={`mt-4 text-sm font-medium ${
                statusMessage.startsWith("✅")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
