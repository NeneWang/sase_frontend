import React from 'react';
import { Container } from 'semantic-ui-react';
import LoginButton from '@/components/LoginButton';

const Navbar = () => {
  return (


    <div className="ui  menu">
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
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
