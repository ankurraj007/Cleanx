import React from "react";

const reasons = [
  {
    title: "Quality Service",
    description:
      "We don’t just wash cars—we bring them back to life! At CleanX, we treat every ride like a VIP. Our expert team uses top-tier products and precision techniques to make sure your car rolls out looking fresh, spotless, and shining like new. No streaks, no missed spots — just pure, premium clean. Whether it’s a quick shine or a deep detail, we go the extra mile so you can drive with pride. Because let’s be real, a clean car just hits different.",
    image: "./quality.jpeg",
  },
  {
    title: "Affordable Pricing",
    description:
      "Why spend hours scrubbing, sweating, and wasting water when you can get a professional wash for way less than you think?Think about it—buying soaps, sponges, wax, and cleaners adds up (not to mention the backache 🫠). Plus, your time is money, and spending your weekend washing your car? Nah, leave that to us! When you break it down, each wash costs way less than your daily coffee ☕—but the fresh, spotless look? Priceless. So why DIY when we’ve got you covered? 😉",
    image: "./money.jpg",
  },
  {
    title: "Professional Workers",
    description:
      "Not all car washes are created equal, and neither are the people behind them. At CleanX, our washers aren’t just workers—they’re trained experts who know the science of a perfect clean. Whether it’s a daily driver or a dream car, they handle every ride with skill, precision, and care. So whether you're rolling up in a compact, SUV, or a supercar, trust us—we’ll treat it like it’s worth a million bucks. 💰Because to us, every car is a masterpiece.",
    image: "./labors.webp",
  },
  {
    title: "Eco-Friendly Products and Practices",
    description:
      "Why should your car shine at the cost of the environment? At CleanX, we keep it clean for your ride AND the planet♻️.We only use biodegradable, toxin-free foams & cleaners that break down safely—so no harmful chemicals go into the ground or water supply. Plus, our advanced washing techniques use way less water compared to traditional washes.🪣Self-wash? You could waste 100+ liters per wash,🏢 Other wash centers? Many still use harsh, polluting chemicals ☠️ Us? We use eco-smart water recycling & nature-friendly products🌿So you get a spotless, streak-free shine while being kinder to the environment. It’s a win-win! 💙🌍",
    image: "./eco.jpg",
  },
];

const Why = () => {
  return (
    <>
      <div className="noto-sans-canadian-aboriginal text-center text-3xl text-black  mt-14">
        Why Us?
      </div>
      <hr className="mt-4"></hr>
      <div className="playfair-display  mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-52 object-cover transform -skew-y-3 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold">{reason.title}</h3>
            <p className="text-gray-600 text-lg mt-2 font-sans">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Why;
