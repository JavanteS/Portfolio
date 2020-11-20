import styled from 'styled-components'
import React from 'react'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
background: rgba(252, 252, 252) ;
display: flex;
height: 80px;
/* margin-top: -80px; */
justify-content: center;
align-items: center;
font-size: 1rem;
width: 100%;
position: sticky;
top: 0;
z-index: 10;


@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
padding: 0 24px;
max-width: 1100px;
z-index: 1;

`
export const NavLogo = styled(LinkR)`
color: black;
justify-self: flex-start;
cursor: pointer;
font-size: 1rem;
align-items: center;
display: flex;
text-decoration: none;
font-weight: bold;
margin-left: 5px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px){
    display: block;
    posiiton: absolute;
    top: 0;
    right: 0;
    font-size: 1 rem;
    transform: translate(-100%, 60%);
    cursor: pointer;

}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
text-align: center;
list-style: none;
margin-right: -5px;

@media screen and (max-width: 760px){
    display: none;
}
`
export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkS)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    border-bottom: 3px solid darkblue;
}

`

