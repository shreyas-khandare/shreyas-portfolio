"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill out all fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. I will get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message via form. Please email directly at khandareshreyas18@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      {/* Section Header */}
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
          Get in Touch
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#A1ACBB] leading-relaxed">
          I am actively looking for software engineering roles and full-stack opportunities.
          Whether you want to discuss a project, talk about distributed systems, or connect, feel free to reach out.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#101722] border border-[#273244] rounded-lg p-6 sm:p-8">
          {/* Status Feedback Banner */}
          {status.type && (
            <div
              role="alert"
              className={`p-4 rounded-md mb-6 text-sm flex items-start gap-3 ${
                status.type === "success"
                  ? "bg-emerald-950/60 border border-emerald-800/50 text-emerald-300"
                  : "bg-red-950/60 border border-red-800/50 text-red-300"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono font-medium text-[#A1ACBB] uppercase tracking-wider mb-2"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Shreyas"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#151D29] border border-[#273244] rounded-md px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder-[#778396] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono font-medium text-[#A1ACBB] uppercase tracking-wider mb-2"
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-[#151D29] border border-[#273244] rounded-md px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder-[#778396] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono font-medium text-[#A1ACBB] uppercase tracking-wider mb-2"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Describe your project, role, or inquiry..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-[#151D29] border border-[#273244] rounded-md px-3.5 py-2.5 text-sm text-[#F1F5F9] placeholder-[#778396] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-medium text-sm transition-colors cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Direct Information & Social Links (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          {/* Direct Details Panel */}
          <div className="rounded-lg p-6 bg-[#101722] border border-[#273244] space-y-5">
            <h3 className="text-base font-semibold text-[#F1F5F9] pb-3 border-b border-[#1E293B]">
              Direct Contact Channels
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-[#778396]">Primary Email</div>
                  <a
                    href="mailto:khandareshreyas18@gmail.com"
                    className="font-medium text-[#F1F5F9] hover:text-blue-400 hover:underline transition-colors"
                  >
                    khandareshreyas18@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-[#778396]">Phone / WhatsApp</div>
                  <a
                    href="tel:+919930528434"
                    className="font-medium text-[#F1F5F9] hover:text-emerald-400 hover:underline transition-colors"
                  >
                    +91 99305 28434
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-[#778396]">Location</div>
                  <span className="font-medium text-[#F1F5F9]">Mumbai, India (IST / UTC+5:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="rounded-lg p-6 bg-[#101722] border border-[#273244]">
            <h3 className="text-xs font-mono font-medium text-[#A1ACBB] uppercase tracking-wider mb-4">
              Developer Profiles & Socials
            </h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href="https://github.com/shreyas-khandare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded bg-[#151D29] border border-[#273244] text-[#F1F5F9] hover:border-slate-500 hover:text-white transition-colors"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shreyas-khandare-7b6413322/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded bg-[#151D29] border border-[#273244] text-[#F1F5F9] hover:border-blue-500/50 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/PCEDBo0AIU/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded bg-[#151D29] border border-[#273244] text-[#F1F5F9] hover:border-amber-500/50 hover:text-amber-400 transition-colors"
              >
                <SiLeetcode size={16} />
                <span>LeetCode</span>
              </a>

              <a
                href="https://www.instagram.com/shreyas_khandare_55/?next=%2F&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded bg-[#151D29] border border-[#273244] text-[#F1F5F9] hover:border-pink-500/50 hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={16} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
