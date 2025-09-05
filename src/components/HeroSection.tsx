import React from 'react';

const HeroSection: React.FC = () => {
  return (
    // 🔹 height increased from h-96 → h-[500px]
    <section className="bg-gray-200 h-[500px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-600 mb-4">Hero Section</h2>
        <p className="text-gray-500 text-lg">
          Placeholder for hero content, banner, or main image
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
