import React from 'react';
import { Container } from 'semantic-ui-react';
import LoginButton from '@/components/LoginButton';

import Link from 'next/link';

const Navbar = () => {
  return (


    <div className="ui  menu">
      <div className="ui container">
        <Link href="/" className="header item">
          Well Mind
        </Link>
        <div className="right menu">
          <Link href="/forum" className='item' >
            Forum
          </Link>
          <Link href="/connect" className='item' >
            Connect with People
          </Link>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
