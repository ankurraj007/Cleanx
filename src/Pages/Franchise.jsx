import React from "react";
import { motion } from "framer-motion";

export default function Franchise() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-32">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Launch Your Car Wash Venture With Us
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Looking to start your own business with a reliable income stream and
        minimal risk? Join our rapidly growing, subscription-based doorstep car
        wash service as a franchise partner in your city. We’re revolutionizing
        how car care works—bringing convenience, professionalism, and
        sustainability right to people’s homes. With a low initial investment
        and full backend support, you get the perfect opportunity to launch and
        scale a profitable local business without starting from scratch.
        <br></br>
        Whether you're an aspiring entrepreneur or someone looking for a side
        hustle with serious earning potential, our franchise model is designed
        for simplicity, scalability, and long-term success. We equip you with
        the tools, training, marketing assets, and operations blueprint—so you
        can focus on building your team and growing your customer base.
        <div className="rounded-2xl shadow-lg p-6 mb-10">
          <div>
            <h2 className="text-2xl font-semibold  text-center mt-6">
              Franchise Inquiry Form
            </h2>
            <h3 className=" mb-10 text-center text-sm">
              Submit you details and we will get in touch with you soon☎️
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="State" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto border border-blue-600 p-2 rounded-xl bg-blue-600 text-white"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.p>
    </div>
  );
}
