import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-sky-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link 
              to="/faq" className="text-white-300 hover:text-white transition-colors duration-200">
              FAQ
             </Link>
            <span className="text-white-500">|</span>
            <Link 
              to="/terms-of-use"  className="text-white-300 hover:text-white transition-colors duration-200">
              Terms of Use
            </Link>
            <span className="text-white-500">|</span>
            <Link 
              to="/privacy-policy" className="text-white-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
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