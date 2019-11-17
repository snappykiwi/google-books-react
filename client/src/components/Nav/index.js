import React from 'react';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import './styles.css';

function NavbarComp() {

  return (
      <Navbar brand={<Link>Google Books Search</Link>} alignLinks="right">
        <Link to="/search">
          Search
        </Link>
        <Link to="/save">
          Saved
        </Link>
      </Navbar>
  )

}

export default NavbarComp;