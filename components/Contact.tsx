"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s0a0a4b",      // ✔ Your Service ID
        "template_7ab63xk",     // ✔ Your Template ID
        {
          from_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        "eQXWE_M6P9eFzEDEd"     // ✔ Your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Something went wrong. Try again later.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="contact" className="mt-24 mb-20">
      <h2 className="text-3xl font-bold text-gray-100">Contact</h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-4 text-gray-400 max-w-xl"
      >
        Feel free to reach out for collaborations, opportunities, or just to say hi! 
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 grid gap-4 max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border border-white/10 bg-[#1a1d24] text-gray-200 rounded-lg px-4 py-3 focus:ring-blue-500 focus:outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border border-white/10 bg-[#1a1d24] text-gray-200 rounded-lg px-4 py-3 focus:ring-blue-500 focus:outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="border border-white/10 bg-[#1a1d24] text-gray-200 rounded-lg px-4 py-3 focus:ring-blue-500 focus:outline-none"
          required
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md shadow-blue-500/20"
        >
          Send Message 
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <div className="mt-8 text-gray-300 space-y-1">
        <p className="text-lg">
          Email:
          <a
            href="mailto:khandareshreyas18@gmail.com"
            className="text-blue-400 hover:underline ml-1"
          >
            khandareshreyas18@gmail.com
          </a>
        </p>

        <p className="text-lg">
          Phone:
          <a
            href="tel:+919930528434"
            className="text-blue-400 hover:underline ml-1"
          >
            +91 99305 28434
          </a>
        </p>

        <p className="text-lg">Mumbai, India</p>
      </div>

      {/* Social links */}
      <div className="mt-10 flex gap-6 text-2xl text-gray-300">
        <a href="https://github.com/shreyas-khandare" target="_blank">
          <FaGithub className="hover:text-white transition" />
        </a>

        <a href="https://www.linkedin.com/in/shreyas-khandare-7b6413322/" target="_blank">
          <FaLinkedin className="hover:text-white transition" />
        </a>

        <a href="https://leetcode.com/u/PCEDBo0AIU/" target="_blank">
          <SiLeetcode className="hover:text-white transition" />
        </a>

        <a href="https://www.instagram.com/shreyas_khandare_55/?next=%2F&hl=en" target="_blank">
          <FaInstagram className="hover:text-white transition" />
        </a>
      </div>
    </section>
  );
}
