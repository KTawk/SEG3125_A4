import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">e-commerce</Link>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;