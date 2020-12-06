
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
                <i className={click ? 'fas fa-times' : 'fas fa-bar'}/>
              </div>
             <link >
             </link>

             <link>
             </link>
          </nav>  
        </>
    )
}

export default Navbar;
