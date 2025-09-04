import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-base font-semibold text-teal-600 uppercase tracking-widest mb-3">
                About Us
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Karpragati: Empowering India's <br className="hidden sm:block" /> 
                Last-Mile Revolution
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl">
              <p className="text-lg">
                We're not just a team—we're a family of changemakers. Karpragati
                is India's rising EV rental platform, built with a clear mission:
                to make last-mile mobility cleaner, smarter, and more accessible.
                Every ride on our electric scooters helps reduce pollution, cut
                fuel costs, and boost daily earnings for delivery partners and
                riders across the country.
              </p>

              <p className="text-lg">
                Our asset-light model makes it easy for gig workers, logistics
                teams, and local businesses to adopt electric mobility—without
                the burden of ownership or maintenance. With a growing fleet of
                purpose-built EVs and a rider-first approach, we're transforming
                how India moves.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-2xl font-semibold text-teal-600 leading-relaxed max-w-xl">
                We're not just renting scooters — we’re powering livelihoods and
                building cleaner cities.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="https://via.placeholder.com/400x400"
              alt="About Karpragati"
              className="rounded-xl shadow-lg object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
