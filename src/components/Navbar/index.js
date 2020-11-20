import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavItem,NavLinks,NavMenu, MobileIcon } from './Navbar.elements'




const Navbar = () => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">Javante Nelson</NavLogo>
              </NavbarContainer>
              <MobileIcon>
                  <FaBars/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="about">About Me</NavLinks>
                  </NavItem>
              </NavMenu>
          </Nav>  
        </>
    )
}

export default Navbar;
