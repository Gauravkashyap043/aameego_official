import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-teal-600 uppercase tracking-wide mb-4">
                About Us
              </h3>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Karpragati: Empowering India's Last-Mile Revolution
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                We're not just a team—we're a family of changemakers. Karpragati is India's rising EV rental platform, 
                built with a clear mission: to make last-mile mobility cleaner, smarter, and more accessible. Every ride 
                on our electric scooters helps reduce pollution, cut fuel costs, and boost daily earnings for delivery 
                partners and riders across the country.
              </p>
              
              <p className="text-lg">
                Our asset-light model makes it easy for gig workers, logistics teams, and local businesses to adopt 
                electric mobility—without the burden of ownership or maintenance. With a growing fleet of purpose-built 
                EVs and a rider-first approach, we're transforming how India moves.
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-xl font-bold text-teal-600 leading-relaxed">
                We're not just renting scooters—we're powering livelihoods and clean cities.
              </p>
            </div>
          </div>
          
          {/* Right Column - Placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 text-lg">Image Placeholder</p>
                <p className="text-gray-400 text-sm">Call-to-action or visual content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
