import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from "../assets"
import {navLinks} from "../constants"
const Navbar = () => {

  const [toggle,setToggle] = useState(false)
  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar `} >
      <img src={logo} alt="fruitbox logo" className={`w-[200px] h-[160px]`}/>

      <ul className={`list-none sm:flex hidden justify-end items-center flex-1`}>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}  `}>
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
      <img 
       src={toggle ? close : menu}
       onClick={() => setToggle(toggle => !toggle)}
       alt="menu"
      />
      <div className={`${toggle ? 'flex' : 'hidden'}  bg-black-gradient
       absolute top-20 right-0 mx-4 p-4 my-2 min-w-[140px] rounded-xl sidebarz`}>


       <ul className={`list-none flex flex-col  justify-end items-center flex-1`}>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal  cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mb-0' : 'mb-4'}   `}>
            <a>{nav.title}</a>
          </li>
        ))}
      </ul>

       </div>
      </div>

      
      
    </nav>
  )
}

export default Navbar