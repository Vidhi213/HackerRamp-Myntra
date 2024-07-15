import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/products" className="navbar-link">Products</Link>
      <Link to="/brands" className="navbar-link">Brands</Link>
      <Link to="/wishlist" className="navbar-link">Wishlist</Link>
      <Link to="/bag" className="navbar-link">Bag</Link>
    </nav>
  );
}

export default Navbar;