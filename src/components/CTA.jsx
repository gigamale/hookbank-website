import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'
import { Link } from 'react-router-dom'
const CTA = () =>  (
    
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] relative z-[1] `}>
      <div className='flex-1 flex-col'>
        <p className={`font-poppins font-semibold text-white text-[26px] leading-[39.8px] mt-5`}>So don't let your message get lost
in the noise <br/> <span className='text-gradient'>connect with us today.</span> </p>
      </div>

      <button className={` ${styles.flexCenter} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[8px] outline-none  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="https://wa.me/918849493915"> 
        Contact US
        </Link>
      </button>
    </section>
    

  )


export default CTA