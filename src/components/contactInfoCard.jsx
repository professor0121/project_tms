"use client";

import { motion } from "framer-motion";

export default function ContactInfoCard() {
    return (
        <div className="flex flex-wrap  justify-between   bg-white p-8  ">

            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 w-full flex flex-col   p-4"
            >
                <h2 className="text-[48px] font-bold text-gray-800">Get in Touch 💬</h2>
                <p className="text-gray-600 text-[20px]">
                    We’re here to help. Reach out to us and we’ll respond as soon as we can!
                </p>
               

                <div className="space-y-2 text-gray-700 text-base pt-[20px]" >
                    <p>📧 <span className="font-medium">Email:</span> support@yourbrand.com</p>
                    <p>📞 <span className="font-medium">Phone:</span> +91 98765 43210</p>
                    <p>📍 <span className="font-medium">Address:</span> 221B Baker Street, London</p>
                </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="md:w-1/2 w-full flex flex-col p-4 bg-white      space-y-4"
>
  <h2 className="text-2xl font-bold text-gray-800">Send us a Message 📨</h2>
  <p className="text-gray-600">We’d love to hear from you. Fill out the form below!</p>

  <form className="space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <textarea
      rows={4}
      placeholder="Your Message"
      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</motion.div>

        </div>
    );
}
