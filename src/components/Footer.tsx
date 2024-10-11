import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#142288] to-[#1e3299] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold">Homeniser</h3>
                        <p className="text-sm text-gray-300">Your trusted partner for all home services. We bring expertise and care to every job, ensuring your home is in the best hands.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaInstagram size={24} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Services', 'Contact', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.split(' ')[0].toLowerCase()}`} className="hover:text-blue-400 transition-colors flex items-center">
                                        <span className="mr-2">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Our Services</h4>
                        <ul className="space-y-2">
                            {['Plumbing', 'Electrical', 'Cleaning', 'Painting', 'Carpentry', 'HVAC'].map((service) => (
                                <li key={service}>
                                    <Link href={`/services/${service.toLowerCase()}`} className="hover:text-blue-400 transition-colors flex items-center">
                                        <span className="mr-2">•</span> {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                                <span>123 Home Street, City, Country</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-2 text-blue-400" />
                                <span>(123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2 text-blue-400" />
                                <span>info@homeniser.com</span>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="mr-2 text-blue-400" />
                                <span>24/7 Available</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-blue-400 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Homeniser. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
