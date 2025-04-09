import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const pricingTiers = [
  {
    id: 1,
    name: "Express Wash",
    price: "₹1499/mo",
    image: "./basic.jpg",
    features: ["Exterior Wash", "Basic Interior Cleaning", "Daily Service"],
  },
  {
    id: 2,
    name: "Pro Wash",
    price: "₹2499/mo",
    image: "./middle.webp",
    features: [
      "Full Exterior & Interior Wash",
      "Exterior Wax & Tire Shine",
      "3 Times Per Week",
    ],
  },
  {
    id: 3,
    name: "Luxury Spa",
    price: "₹9999/mo",
    image: "./luxury.webp",
    features: [
      "Unlimited Washes",
      "Ceramic Coating (Every 6 Months)",
      "Polish & Tire Wax After Every Wash",
      "Membership to CleanX Events",
    ],
  },
];

export default function PricingCards() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="noto-sans-canadian-aboriginal text-center text-3xl text-black  mt-14">
        Select Your Subscription
      </div>
      <hr className="mt-4"></hr>
      <div className="flex flex-wrap justify-center gap-4 p-10 ">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`w-80 p-6 rounded-2xl shadow-lg bg-white border-2 cursor-pointer transition-all duration-300 
          ${
            selected === tier.id
              ? "border-blue-600 scale-105 shadow-2xl"
              : "opacity-80 hover:opacity-100 hover:border hover:border-blue-800"
          }`}
            onClick={() => setSelected(tier.id)}
          >
            <img
              src={tier.image}
              alt={tier.name}
              className="w-full h-50 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              {tier.name}
            </h3>
            <ul className="mt-4 text-gray-700 text-sm space-y-2">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <p className="text-3xl font-extrabold text-blue-700 mt-4">
              {tier.price}
            </p>
            <Link to="/Book">
              <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
