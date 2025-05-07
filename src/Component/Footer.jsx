import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#dddcdc] text-sm text-gray-600 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-black text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-md text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-2">eShop</h3>
            <p className="text-sm mb-4">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">FAQ</h4>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tools</li>
              <li>How-to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 text-xs text-gray-500">
          <p>© Shop.co 2000-2023, All Rights Reserved</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
