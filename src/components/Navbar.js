
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'




function Navbar(){
  const [click, setClick] = useState(false)

  const handleClick = ()=>setClick(!click)
    return (
        <>
          <nav className='navbar'>
             <Link to="/">
               Javante S
             </Link>

              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                          <Link to='/' className='nav-links'>
                           Home
                          </Link>
                    </li>

             </ul>
          </nav>  
        </>
    )
}

export default Navbar;
