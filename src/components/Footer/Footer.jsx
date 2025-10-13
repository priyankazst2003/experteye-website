import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-sky-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="text-white-300 hover:text-white transition-colors duration-200">
              FAQ
            </a>
            <span className="text-white-500">|</span>
            <a href="#" className="text-white-300 hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
            <span className="text-white-500">|</span>
            <a href="#" className="text-white-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-white-400 text-sm">
            Copyright 2024 Expert Eye. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;