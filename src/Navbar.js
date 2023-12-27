import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/dishlist'>DishList</Link>
      <Link to='/result'>Result</Link>
    </div>
  )
}

export default Navbar;
