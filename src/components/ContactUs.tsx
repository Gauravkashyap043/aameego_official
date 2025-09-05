import React from "react";
import {
    FaEnvelope,
    FaPhone,
    FaClock,
    FaMapMarkerAlt,
    FaLinkedinIn,
    FaTwitter,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

const ContactUs: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Left Side - Contact Info */}
                <div className="flex-1">
                    <h4 className="text-[#FF4D4D] font-semibold uppercase tracking-wide mb-2">
                        Get in Touch
                    </h4>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-gray-500 mb-8 max-w-md">
                        If you need consultation with us, you can write a message or call us,
                        we will respond as quickly as possible.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-4 text-gray-600">
                            <FaEnvelope className="text-blue-600 w-6 h-6" />
                            <span>lorenna@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                            <FaPhone className="text-blue-600 w-6 h-6" />
                            <span>+62 8221 1222 0001</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                            <FaClock className="text-blue-600 w-6 h-6" />
                            <span>Everyday : 08.00 - 21.00</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 break-words">
                            <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
                            <span>
                                Jl. Raya Cihaluan No.112 Tangerang Selatan, Indonesia 41222
                            </span>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex gap-3 mt-8">
                        {[
                            { icon: <FaLinkedinIn />, href: "#" },
                            { icon: <FaTwitter />, href: "#" },
                            { icon: <FaFacebookF />, href: "#" },
                            { icon: <FaInstagram />, href: "#" },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                className="p-3 border border-blue-600 text-blue-600 rounded-md transition hover:bg-blue-600 hover:text-white"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Side - Map Image */}
                <div className="flex-1 flex flex-col items-start w-full">
                    <div className="w-full max-w-lg overflow-hidden rounded-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224569.11690785276!2d76.82526905399862!3d28.42250187515182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1757071371011!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Office Center Map Button */}
                    <div className="w-full max-w-lg">
                        <button className="mt-6 ml-4 px-5 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition duration-300">
                            Office Center Map
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
