import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './Navbar.elements'




const Navbar = () => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">Javante Nelson</NavLogo>
              </NavbarContainer>
              
          </Nav>  
        </>
    )
}

export default Navbar;
