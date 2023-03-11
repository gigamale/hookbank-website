import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'
import { Link } from 'react-router-dom'
const CTA = () =>  (
    
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] relative z-[1] `}>
      <div className='flex-1 flex-col'>
        <h1 className={styles.heading2}>Let’s try our service now!</h1>
        <p className={`${styles.paragraph} mt-5`}>So don't let your message get lost in the noise <br/> and grow your business anywhere on the planet.</p>
      </div>

      <button className={` ${styles.flexCenter} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[8px] outline-none  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="https://wa.me/918849493915"> 
        Contact US
        </Link>
      </button>
    </section>
    

  )


export default CTA