import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="../contact">Contact</Link>
      <Link to="../gallery">Gallery</Link>
      <Link to="../order">Order Now</Link>
      <Link to="../staff">Staff</Link>
    </nav>
  );
}

export default Nav;
