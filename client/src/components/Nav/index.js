import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

function NavbarComp() {

  return (
      <Navbar brand={<a />} alignLinks="right">
        <NavItem href="/search">
          Search
        </NavItem>
        <NavItem href="/save">
          Save
        </NavItem>
      </Navbar>
  )

}

export default NavbarComp;