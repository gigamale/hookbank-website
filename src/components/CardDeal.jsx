import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import { Link } from 'react-router-dom'
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
        <Link to="https://wa.me/918849493915">
        <button className='mt-7 w-[170px] h-[64px] text-black bg-blue-gradient rounded-[19px] font-semibold'>Contact Us</button>
      </Link>
      </div>

      <div className="card-container">
  <img src={card} className="card-img" />
</div>

    </section>
    
     
    

)

export default CardDeal