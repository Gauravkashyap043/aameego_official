import React from "react";

// Background banner
import backgroundBanner from "../assets/backgroundbanner.png";

// Placeholder images (replace with your real ones if needed)
import card1 from "../assets/card1.png";
import card2 from "../assets/card 2.png";
import card3 from "../assets/card3.png";

// Service icons
import KeyIcon from "../assets/Keyicon.png";
import AgentIcon from "../assets/Agenticon.png";
import Trip from "../assets/Trip.png";

const ServicesSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center py-20"
            style={{ backgroundImage: `url(${backgroundBanner})` }}
        >
            {/* White overlay */}
            <div className="absolute inset-0 bg-white/75"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
                {/* Heading */}
                <h4 className="text-[#1DBF75] text-lg md:text-xl font-semibold uppercase tracking-wide">
                    Services
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Our Services
                </h2>
                <p className="text-gray-600 mt-3 max-w-7xl mx-auto text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
  Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also long trip packages to support your travel needs.
</p>

                {/* Service Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div
                        className="relative h-[450px] rounded-lg overflow-hidden shadow-md"
                        style={{ backgroundImage: `url(${card1})` }}
                    >
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                            <img src={KeyIcon} alt="Key Icon" className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold text-white">Instant Rent</h3>
                            <p className="text-gray-200 text-sm mt-3">
                                We provide direct rental services when you need wherever you are.
                                Our officers are quick to respond in carrying out this task.
                            </p>
                            {/* Unified Button */}
                            <button className="mt-6 px-5 py-2 bg-white text-gray-800 font-medium rounded-md shadow transition hover:bg-blue-600 hover:text-white">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="relative h-[450px] rounded-lg overflow-hidden shadow-md"
                        style={{ backgroundImage: `url(${card2})` }}
                    >
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                            <img src={AgentIcon} alt="Agent Icon" className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold text-white">Private Driver</h3>
                            <p className="text-gray-200 text-sm mt-3">
                                We have professional agents to accompany your trip, useful for
                                your protection from disturbances that you do not like.
                            </p>
                            {/* Unified Button */}
                            <button className="mt-6 px-5 py-2 bg-white text-gray-800 font-medium rounded-md shadow transition hover:bg-blue-600 hover:text-white">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="relative h-[450px] rounded-lg overflow-hidden shadow-md"
                        style={{ backgroundImage: `url(${card3})` }}
                    >
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                            <img src={Trip} alt="Trip Icon" className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold text-white">Long Trip</h3>
                            <p className="text-gray-200 text-sm mt-3">
                                Long trips whenever and wherever you want can comfortably use
                                our car collection that supports long and big trips.
                            </p>
                            {/* Unified Button */}
                            <button className="mt-6 px-5 py-2 bg-white text-gray-800 font-medium rounded-md shadow transition hover:bg-blue-600 hover:text-white">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
