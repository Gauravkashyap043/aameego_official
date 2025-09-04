import React from "react";

// Profile images
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

// Quote icon from assets
import quoteIcon from "../assets/qouts.png";

const reviews = [
  {
    id: 1,
    name: "Melinda Lenny",
    location: "Medan",
    image: profile1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jacob Stevan",
    location: "Bandung",
    image: profile2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roben Musstar",
    location: "Bali",
    image: profile3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet.",
    rating: 4,
  },
];

const ReviewSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <h4 className="text-[#1DBF75] font-semibold uppercase tracking-wide text-lg">
          Our Review
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          What They Say ?
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Here are some comments from our customers, be one of them
        </p>

        {/* Review Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-6 text-left shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between min-h-[340px] md:min-h-[380px]"
            >
              {/* Quote + Rating in one row */}
              <div className="flex justify-between items-start">
                <img
                  src={quoteIcon}
                  alt="quote"
                  className="w-5 h-6 md:w-6 md:h-5 text-blue-500"
                />
                <div className="flex items-center gap-1 text-blue-600">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 md:w-4 md:h-4"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.02 4.665 24 6 15.6 0 9.753l8.332-1.735z" />
                    </svg>
                  ))}
                  {review.rating < 5 &&
                    Array.from({ length: 5 - review.rating }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 md:w-4 md:h-4 text-gray-300"
                      >
                        <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.02 4.665 24 6 15.6 0 9.753l8.332-1.735z" />
                      </svg>
                    ))}
                </div>
              </div>

              {/* Review Text */}
              <p
                className="text-gray-600 mt-3"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                }}
              >
                {review.text}
              </p>

              {/* Profile */}
              <div className="flex items-center mt-2">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800 text-base">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-10 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-md shadow hover:from-blue-700 hover:to-blue-600 transition">
          See All
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
