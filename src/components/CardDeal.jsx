import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import "./Card.css"
const CardDeal = () => (
       
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading2}>We are a <span className='text-gradient'>copywriting</span> <br/>Marketing agency</h4>
        <p className=' mt-5 font-poppins font-normal text-[18px] text-white leading-[32px]'>
        We craft compelling messages which make an impact.
        
        <br className='md:block hidden'/>
        
        Our copywriting and marketing services help sell your <br className='md:block hidden'/>products or services and build your business’s authority<br className='md:block hidden'/>  with words. It’s what we do.


        
        
        
        
        </p>
        <button className='mt-7 w-[170px] h-[64px] bg-blue-gradient rounded-[12px]'>Get Started</button>
      </div>

      <div className="card-container">
  <img src={card} className="card-img" />
</div>

    </section>
    
     
    

)

export default CardDeal