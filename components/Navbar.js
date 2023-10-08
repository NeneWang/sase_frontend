import React from 'react';

const Navbar = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container">
        <a href="/" className="header item">
          Your Logo
        </a>
        <div className="right menu">
          <a href="/" className="item">
            Home
          </a>
          <a href="/about" className="item">
            About
          </a>
          <a href="/contact" className="item">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
