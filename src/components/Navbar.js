import React from 'react'





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

                  <NavItem>
                      <NavLinks to="contact">Contact</NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to="portfolio">Portfolio</NavLinks>
                  </NavItem>
              </NavMenu>
          </Nav>  
        </>
    )
}

export default Navbar;
