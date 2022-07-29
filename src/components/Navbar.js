import React from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'
import {FaHouseUser} from 'react-icons/fa'
import {MdOutlineVilla} from 'react-icons/md'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'

import './Navbar.css'

export default function Navbar() {

  const [nav, setNav] = React.useState(false);  

  return (  <>
    <div className='par_nav' >
           <div className='navbar' >
                    <h1><FaHouseUser style={{ color : 'green' }} />La Bombe</h1>  
                     
                     <div className={nav ? 'small' : 'flex' } >
                     <ul  >
                           <li> <a href="/">Home</a> </li>
                           <li> <a href="/about">About</a> </li>
                           <li> <a href="/services/room">Services</a> </li>
                           <li> <a href="/contact">Contact</a> </li>
                     </ul>

                     <div>
                                  <a href="/connected">Connexion</a>
                                  <a href="/enroll">Sign</a>
                                  <select className='language' >
                                          <option value="FR" key="1" selected >FRANCAIS</option>
                                          <option value="EN" key="1">ANGLAIS</option>
                                          <option value="AL" key="1">ALLEMAND</option>
                                  </select> 
                     </div>
                     </div> 
                     <a href="" onClick={ (e)=>{ setNav(!nav); e.preventDefault() } } > { nav ? <FaTimes /> : <GiHamburgerMenu /> } </a>  
           </div>
    </div>
    
    </>
  )
}
