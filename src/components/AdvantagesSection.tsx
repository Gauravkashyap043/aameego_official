import React from "react";
import RocketIcon from "../assets/Rocket/24/Solid.png";
import QualityIcon from "../assets/Check Square/24/Solid.png";
import SavingIcon from "../assets/User Md/24/Solid.png";
import SafetyIcon from "../assets/Shield Plus/24/Solid.png";
import EarningsIcon from "../assets/Flip H/24/Solid.png";
import MonitoringIcon from "../assets/Layers Alt/24/Solid.png";

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: RocketIcon,
      title: "Affordable Daily Rentals",
      description:
        "Track your EV’s performance in real time with our smart dashboard and support tools.",
    },
    {
      icon: QualityIcon,
      title: "Premium Quality",
      description:
        "Our fleet is built for performance and durability—perfect for high-demand logistics routes.",
    },
    {
      icon: SavingIcon,
      title: "Extra Saving",
      description:
        "From onboarding to on-road assistance, our team is here to keep you moving.",
    },
    {
      icon: SafetyIcon,
      title: "Safety",
      description:
        "Regular maintenance and health checks ensure every ride is safe, smooth, and reliable.",
    },
    {
      icon: EarningsIcon,
      title: "High Earnings",
      description:
        "Our service guarantee provides a money back opportunity if the car does not match the information provided.",
    },
    {
      icon: MonitoringIcon,
      title: "Live Monitoring",
      description:
        "Track your EV’s performance in real time with our smart dashboard and support tools.",
    },
  ];

  return (
    <section className="bg-[#EFFFF8] py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-semibold tracking-wide uppercase mb-2">
            Advantages
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us ?
          </h2>

          {/* Paragraph in stair-step format */}
          <p className="max-w-4xl mx-auto leading-relaxed text-gray-600 text-base">
            <span className="block ml-0">
              Karpragati is India’s trusted EV rental platform, offering electric
              scooters that reduce pollution, cut fuel costs, and boost your
              daily earnings.
            </span>
            <span className="block ml-4">
              Whether you’re a delivery partner or a daily commuter, our
              purpose-built EVs are designed for performance, reliability, and
              zero maintenance stress.
            </span>
            <span className="block ml-8">
              With flexible rental plans and real-time support, we make clean
              mobility easy and affordable for everyone.
            </span>
            <span className="block ml-12">
              Every ride you take helps build a greener, smarter India—one
              kilometer at a time. Together, we are shaping a sustainable
              future.
            </span>
            <span className="block ml-16">
              Join the movement. Ride electric. Earn more. Leave a lighter
              footprint for the generations to come.
            </span>
            <span className="block ml-20">
              Experience freedom, convenience, and eco-friendly travel like
              never before.
            </span>
          </p>
        </div>

        {/* Grid of Advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {advantages.map((adv, index) => (
            <div key={index} className="flex items-start gap-4 text-left">
              <img src={adv.icon} alt={adv.title} className="w-14 h-14" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {adv.title}
                </h3>
                <p className="text-gray-600 text-sm">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
