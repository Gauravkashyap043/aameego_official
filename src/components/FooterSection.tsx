import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path if needed

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-200">
            <div className="py-12 px-6 md:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Left Section - Logo & Description */}
                    <div>
                        <img src={logo} alt="Logo" className="h-12 mb-4" />
                        <p className="text-gray-600 my-6 max-w-md leading-relaxed text-sm">
                            We are a well-known car rental service that has many partners in each
                            region to connect with you to assist in your trip in meetings, events,
                            holidays or long trips.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: <FaLinkedinIn size={16} />, href: "#" },
                                { icon: <FaTwitter size={16} />, href: "#" },
                                { icon: <FaFacebookF size={16} />, href: "#" },
                                { icon: <FaInstagram size={16} />, href: "#" },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="p-2 border border-blue-600 text-blue-600 rounded-md transition duration-200 hover:bg-blue-600 hover:text-white"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                   
                    <div className="ml-8">
                        <h3 className="text-base font-semibold text-gray-800 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Services</a></li>
                            <li><a href="#" className="hover:text-blue-600">Our Partner</a></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">2 Wheeler EV Rental</a></li>
                            <li><a href="#" className="hover:text-blue-600">Corporate Partnerships</a></li>
                            <li><a href="#" className="hover:text-blue-600">Battery Swapping & Charging</a></li>
                            <li><a href="#" className="hover:text-blue-600">Rider Onboarding & Support</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-600">IT Solutions</a></li>
                            <li><a href="#" className="hover:text-blue-600">Partner With Us</a></li>
                            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Payment Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="mt-[10px] h-[25px] w-full bg-[#099271]"></div>
        </footer>
    );
};

export default Footer;
