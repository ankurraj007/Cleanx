import React, { useState, useEffect } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("./hero.jpg");

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setImageSrc("./mobile1.jpg");
      } else {
        setImageSrc("./hero.jpg");
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center items-center bg-black">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}

      <img
        className={`w-full h-full object-cover transition-opacity duration-1000 shadow-[0_0_50px_rgba(255,0,0,0.5)] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={imageSrc}
        alt="hero"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Hero;
