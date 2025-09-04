import React from "react";
import mobileImage from "../assets/mobileimage.png"; // adjust path if needed

const AameegoAppSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div>
          {/* Small Heading */}
          <h4 className="text-[#1DBF73] font-semibold uppercase tracking-wide">
            Aameego Application
          </h4>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4 leading-snug">
            Simple, accessible micromobility for all.
          </h2>

          {/* Subheading */}
          <p className="text-[#1DBF73] mt-5 text-lg md:text-xl font-semibold">
            Discover Aameego Pilot App
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed max-w-lg">
            Take control of your mobility with Aameego Last Mile Deliveries,
            Rent and Ride in Easy Steps.
          </p>

          {/* Steps */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Download Aameego Application From App / Play Store",
              "Select Your App Language",
              "Talk To Aameego, It Will Help You Onboard & Get Verified",
              "Scan And Rent Your Vehicle",
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#DFFFF1] p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {/* Number circle */}
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-800 font-bold text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700 text-sm md:text-base font-medium leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="flex justify-center md:justify-end">
          <img
            src={mobileImage}
            alt="Aameego Mobile App"
            className="w-[360px] sm:w-[400px] md:w-[460px] lg:w-[520px] h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AameegoAppSection;
