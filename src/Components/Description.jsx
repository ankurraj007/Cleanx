import React from "react";

const Description = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 gap-8">
      {/* Left side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-3/4 md:w-2/3 mt-8 md:mt-24 hidden md:block"
          src="/spray.png"
          alt="Car spray"
        />
      </div>
      {/* Right side */}
      <div className="w-full md:w-1/2 card flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-xl shadow-md text-center mt-6 md:mt-12 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/50">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          🚗 Drive a Spotless Car Every Day! ✨
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-medium">
          Want a{" "}
          <span className="text-gray-900 font-semibold">shiny, clean car</span>{" "}
          without the hassle? Forget the queues and messy washes!
        </p>
        <p className="text-base md:text-lg text-gray-600 font-medium mt-3">
          With our{" "}
          <span className="font-semibold text-gray-900">
            hassle-free subscription
          </span>
          , your car will be washed{" "}
          <span className="text-indigo-600 font-bold">EVERY SINGLE DAY</span>{" "}
          <span className="font-semibold">right at your doorstep!</span>
        </p>
        <p className="text-lg font-semibold mt-6">
          <span className="text-green-500">
            No Queues. No Stress. Just a spotless ride.✨
          </span>
        </p>

        <p className="mt-8 bg-indigo-600 text-white text-lg font-medium py-3 px-8 rounded-full shadow-md hover:bg-blue-900 transition duration-300 cursor-pointer">
          Try Now & Experience Ultimate Convenience! 😎
        </p>
      </div>
    </div>
  );
};

export default Description;
