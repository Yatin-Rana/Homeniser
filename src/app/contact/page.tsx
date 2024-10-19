import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Get in <span className="text-[#142288]">Touch</span>
        </h1>
        
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#142288] p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>0300 010 300</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>homeniser@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>22 Flempton Road London E10 7NH</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-2xl mr-4" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p>24/7 Available</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How Can We Help?</h2>
              <p className="text-gray-600 mb-8">
                At Homeniser, we&apos;re committed to providing top-notch home services. Whether you need repairs, maintenance, or have questions about our services, we&apos;re here to assist you.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-[#142288]">Quick Response</h3>
                  <p className="text-gray-600">We aim to respond to all inquiries within 2 hours.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-[#142288]">Expert Team</h3>
                  <p className="text-gray-600">Our skilled professionals are ready to handle any home service need.</p>
                </div>
              </div>
              <div className="mt-12">
                <a href="tel:+11234567890" className="inline-block bg-[#142288] text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition-colors text-lg">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
