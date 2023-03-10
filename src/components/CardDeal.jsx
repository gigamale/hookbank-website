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
        We do this by providing agile, scalable content services that     <br className='md:block hidden'/> 
        you can access on demand. So, whether it’s capturing attention,      <br className='md:block hidden'/>
        inspiring action, building loyalty or igniting growth, we can help      <br className='md:block hidden'/>
         you win the things that matter. Our copywriting and marketing      <br className='md:block hidden'/>
         services help sell your products or services and build your      <br className='md:block hidden'/> business’s      authority with words. It’s what we do.


        
        
        
        
        </p>
        <Link to="https://wa.me/918849493915">
        <button className='mt-7 w-[170px] h-[64px] text-black bg-blue-gradient rounded-[19px] font-semibold'>Contact Us</button>
      </Link>
      </div>

      <div className="card-container md:mt-12">
      <br className='md:block hidden'/>
  <img src={card} className="card-img" />
</div>

    </section>
    
     
    

)

export default CardDeal