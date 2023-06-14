import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faImage, faShoppingCart, faUsers, faHistory, faList } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link to="../contact">
        <FontAwesomeIcon icon={faEnvelope} /> Contact
      </Link>
      <Link to="../gallery">
        <FontAwesomeIcon icon={faImage} /> Gallery
      </Link>
      <Link to="../order">
        <FontAwesomeIcon icon={faShoppingCart} /> Order Now
      </Link>
      <Link to="../staff">
        <FontAwesomeIcon icon={faUsers} /> Staff
      </Link>
      <Link to="../log">
        <FontAwesomeIcon icon={faHistory} /> Log
      </Link>
      <Link to="../topics">
        <FontAwesomeIcon icon={faList} /> Topics
      </Link>
    </nav>
  );
}

export default Nav;
