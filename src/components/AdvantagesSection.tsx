import React from 'react';

const AdvantagesSection: React.FC = () => {
    const advantages = [
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
            ),
            title: "Affordable Daily Rentals",
            description: "Track your EV's performance in real time with our smart dashboard and support tools."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            ),
            title: "Premium Quality",
            description: "Our fleet is built for performance and durability—perfect for high-demand logistics routes."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            ),
            title: "Extra Saving",
            description: "From onboarding to on-road assistance, our team is here to keep you moving."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Safety",
            description: "Regular maintenance and health checks ensure every ride is safe, smooth, and reliable."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.196v2.24a.75.75 0 01-1.5 0V7.418zM12.75 7.418c.155-.103.346-.196.567-.196v2.24a.75.75 0 01-1.5 0V7.418z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13.5a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                </svg>
            ),
            title: "High Earnings",
            description: "Our service guarantee provides a money back opportunity if the car does not match the information provided."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Live Monitoring",
            description: "Track your EV's performance in real time with our smart dashboard and support tools."
        }
    ];

    return (
        <section className="py-16 bg-[#F0FFFB]">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h3 className="text-lg font-semibold text-teal-600 uppercase tracking-wide mb-4">
                        Advantages
                    </h3>
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">
                        Why Choose Us ?
                    </h2>

                    {/* Introductory Text Block */}
                    <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
                        <p className='text-sm'>
                            Karpragati is India's trusted EV rental platform, offering electric scooters that reduce pollution,
                            cut fuel costs, and boost your daily earnings.
                            <br />
                            Whether you're a delivery partner or a daily commuter, our purpose-built EVs are designed for
                            performance, reliability, and zero maintenance stress.
                            <br />
                            With flexible rental plans and real-time support, we make clean mobility easy and affordable.
                            <br />
                            Every ride you take helps build a greener, smarter India—one kilometer at a time.
                            <br />
                            Join the movement. Ride electric. Earn more. Leave a lighter footprint.
                        </p>
                    </div>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                                    {advantage.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {advantage.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
