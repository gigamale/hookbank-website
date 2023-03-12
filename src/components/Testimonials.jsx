import React from 'react'
import {feedback } from '../constants'
import styles, {layout} from '../style'
import FeedBackCard from './FeedBackCard'
const Testimonials = () => (
    <section className={` ${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
     {/*  */}
     <div/>

   
   
   <div className='flex flex-col justify-center items-center mb-10 '>
    <h1 style={{textAlign: 'center'}} className={`${styles.heading2} sm:mb-1  `}>
      
    Why not scroll through a small selection of 

       <br className='sm:block hidden'/> our work?</h1>
       <button style={{fontSize: '15px', fontWeight: '550'}} className='mt-7 w-[170px] h-[64px] bg-blue-gradient rounded-[12px]'>

        <a href='https://ourworkprofolio.netlify.app/'>Previous Projects</a>
       </button>
   </div>
   

 
  <div className='flex flex-wrap sm:justify-start justify-center  w-full relative z-[1] feedback-container '>
    {feedback.map((card) => (
      <FeedBackCard {...card} key={card.id}/>
    ))}
  </div>

    </section>
  )


export default Testimonials