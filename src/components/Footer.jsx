import React from 'react'
import styles,{layout} from '../style'
import { logo } from '../assets' // 124 32
import { footerLinks  } from '../constants'
import { socialMedia } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={` ${styles.flexCenter} ${styles.paddingY} flex-col md:border-b-3 md:border-indigo-500`}>
      <div className={`${styles.flexStart} flex-col md:flex-row flex-col w-full`}>
      <div className={`flex-[1] flex flex-col md:justify-start md:items-start items-center mr-3 w-full `}>
        <img src={logo} className='md:h-[72.14] md:w-[266px]  md:block hidden' />
         <p className={`md:block hidden font-poppins font-semibold text-white text-[25px] leading-[30.8px] mt-7`} style={{color:'white'}}>So don't let your message get lost <br/>in the noise  <span style={{fontWeight:'bold',fontSize:'25px'}} className='text-gradient'>connect with us today.</span></p>
      </div>

      
      <div className='flex-[1.5] w-full flex flex-row flex-wrap  justify-between md:mt-0 mt-10'  >
      {footerLinks.map((footerlink) => (
        <div className='flex flex-col min-w-[150px] ss:my-0 my-4 '>
         <span className='text-gradient'><h2 className='text-[28px]   font-semibold font-poppins leading-[29xp]'>{footerlink.title}</h2></span> 
          
          <ul className='list-none mt-4'>
            {footerlink.links.map((link,index) => (
              <Link to={link.link}>
              <li key={link.name} className={`text-[16px] mt-2  text-white font-normal font-poppins leading-[24px] cursor-pointer hover:text-[19px] hover:text-bold  ${index === footerlink.links.length -1 ? "mb-4" : "mb-0"}`}>{link.name}</li>
              </Link>
           ))} 

          </ul>
          
          
          
        </div>
      ))}    
      </div>
      </div>

     
      
    </section>
  )
}

export default Footer