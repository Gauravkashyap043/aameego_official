import React from 'react';

const AameegoAppSection: React.FC = () => {
  const steps = [
    "Download Aameego Application From App / Play Store",
    "Select Your App Language.",
    "Talk To Aameego It Will Help You Onboard & Get Verified.",
    "Scan And Rent Your Vehicle"
  ];

  const services = [
    { icon: "🔴", name: "Report Emergency" },
    { icon: "🔵", name: "Charging Station" },
    { icon: "🟢", name: "Wallet" },
    { icon: "🟣", name: "My Vehicle" }
  ];

  const navigationItems = [
    { icon: "🏠", name: "Home" },
    { icon: "🧾", name: "Transaction" },
    { icon: "🛵", name: "Vehicle", active: true },
    { icon: "👤", name: "Profile" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Text and Steps */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-600 uppercase tracking-wide">
                AAMEEGO APPLICATION
              </h3>
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                Simple, accessible micromobility for all.
              </h2>
              <h4 className="text-xl text-gray-600">
                Discover Aameego Pilot App
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Take control of your mobility with Aameego Last Mile Deliveries, Rent and Ride in Easy Steps.
              </p>
            </div>

            {/* Four-Step Guide */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Smartphone Mockups */}
          <div className="flex justify-center lg:justify-end space-x-4">
            {/* Left Phone - Logo Screen */}
            <div className="relative">
              <div className="w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                  <div className="bg-white rounded-full p-6 shadow-lg">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-800 rounded-b-lg"></div>
            </div>

            {/* Right Phone - App Dashboard */}
            <div className="relative">
              <div className="w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Top Bar */}
                  <div className="bg-gray-100 px-4 py-2 flex items-center justify-between text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-center space-x-1">
                      <span>📍</span>
                      <span className="font-medium">Noida, UP</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Header Section */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-sm">User Name</span>
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                        </div>
                        <p className="text-xs text-gray-600">Male +91 XXXXXXXXXX</p>
                        <p className="text-xs text-gray-600">Rider • Profile Code-XXXXX</p>
                      </div>
                    </div>
                  </div>

                  {/* Information Cards */}
                  <div className="px-4 py-3">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-blue-50 p-2 rounded text-xs">
                        <p className="text-gray-600">Issued On DD/MM/YY: hh:mm:ss</p>
                        <p className="font-semibold">XXXX AN5012</p>
                      </div>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <p className="text-gray-600">Current Location XXXX</p>
                        <p className="font-semibold">Delhi XXXX</p>
                      </div>
                    </div>

                    {/* Service Icons */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {services.map((service, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl mb-1">{service.icon}</div>
                          <p className="text-xs text-gray-600">{service.name}</p>
                        </div>
                      ))}
                    </div>

                    {/* Video Player */}
                    <div className="bg-gray-100 rounded-lg p-2 mb-3">
                      <div className="bg-gray-200 rounded h-20 flex items-center justify-center relative">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-blue-600">▶️</span>
                        </div>
                        <button className="absolute bottom-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Watch on YouTube
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-around border-t pt-2">
                      {navigationItems.map((item, index) => (
                        <div key={index} className={`text-center ${item.active ? 'text-blue-600' : 'text-gray-400'}`}>
                          <div className="text-lg mb-1">{item.icon}</div>
                          <p className="text-xs">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-800 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AameegoAppSection;
