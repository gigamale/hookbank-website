import React from 'react'
import styles,{layout} from '../style'
import { logo } from '../assets' // 124 32
import { footerLinks } from '../constants'
const Footer = () => {
  return (
    <section className={` ${styles.flexCenter} ${styles.paddingY} flex-col md:border-b-4 md:border-indigo-500`}>
      <div className={`${styles.flexStart} flex-col md:flex-row flex-col w-full`}>
      <div className={`flex-[1] flex flex-col justify-start mr-10`}>
        <img src={logo} className='h-[72.14] w-[266px]  1'/>
        <p className={` ${styles.paragraph} mt-4`}>A new way to make the payments <br/> easy, reliable and secure.</p>
      </div>

      
      <div className='flex-[1.5] w-full flex flex-row flex-wrap  justify-between md:mt-0 mt-10'  >
      {footerLinks.map((footerlink) => (
        <div className='flex flex-col min-w-[150px] ss:my-0 my-4'>
          <h2 className='text-[18px] text-white font-normal font-poppins leading-[27xp]'>{footerlink.title}</h2>
          
          <ul className='list-none mt-4'>
            {footerlink.links.map((link,index) => (
              <li key={link.name} className={`text-[16px] text-dimWhite font-normal font-poppins leading-[24px] cursor-pointer ${index === footerlink.links.length -1 ? "mb-4" : "mb-0"}`}>{link.name}</li>
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