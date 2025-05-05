import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">

      {/* Footer Links Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">SHOP.CO</h3>
          <p className="text-sm">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                YouTube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-200 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            Shop.co © 2000-2023. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="src\assets\footer-image\visa.png" alt="Visa" className="w-8" />
            <img src="src\assets\footer-image\paypal.png" alt="PayPal" className="w-8" />
            <img src="src\assets\footer-image\verisign.png" alt="MasterCard" className="w-8" />
            <img src="src\assets\footer-image\stripe.png" alt="Google Pay" className="w-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;