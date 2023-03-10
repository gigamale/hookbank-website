import React from 'react'
import { discount, robot } from '../assets'
import styles from "../style"
import GetStarted from "./GetStarted"
const Hero = () => {
  return (
    <section id='home'className={`flex md:flex-row flex-col  ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>
        Empathy <br className='sm:block hidden'/> 
          <span className='text-gradient'>Analysis</span> <br/>
          Action.
        </h1>
        <div className='ss:flex hidden md:mr-4'>
          <GetStarted/>
        </div>
      </div>
 

      <p className={`font-poppins font-semibold xs:text-[29px] text-[29px] text-white xs:leading-[45px] leading-[45.8px] w-full 
      mt-8 `}>
     We help solve the problems of   <span className='text-gradient'>Entrepreneurs, Coaches & Consultants </span> via effectual & impactful Branding, Marketing & Copywriting.!!
      </p>

    </div>
      
      <div className=''>
        <img src={robot} alt="billing" className='sm:w-[100%] sm:h-[100%] relative z-[5] md:w-[100%] md:h-[550px] '/>
        {/* gradient start */}
        <div className="relative z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="relative z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="relative z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  )
}

export default Hero