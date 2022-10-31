import React from 'react'
import {feedback } from '../constants'
import styles, {layout} from '../style'
import FeedBackCard from './FeedBackCard'
const Testimonials = () => (
    <section className={` ${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
     {/*  */}
     <div/>

   
   
   <div className='w-full flex  justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
    <h1 className={`${styles.heading2} sm:mb-16 `}>What people are <br className='sm:block hidden'/> saying about us</h1>
    <p className={` ${styles.paragraph} text-left w-full `}>Everything you need to accept card payments <br className='md:block hidden'/> and grow your business anywhere on the planet.</p>
   </div>
   

 
  <div className='flex flex-wrap sm:justify-start justify-center  w-full relative z-[1] feedback-container '>
    {feedback.map((card) => (
      <FeedBackCard {...card} key={card.id}/>
    ))}
  </div>

    </section>
  )


export default Testimonials