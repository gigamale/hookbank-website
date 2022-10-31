import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
const CardDeal = () => (
       
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading2}>Find a better card deal <br/> in few easy steps.1</h4>
        <p className=' mt-5 font-poppins font-normal text-[18px] text-white leading-[32px]'>
        Arcu tortor, purus in mattis at sed integer faucibus.<br className='md:block hidden'/> Aliquet quis aliquet eget mauris tortor.ç Aliquet <br className='md:block hidden'/> ultrices ac, ametau.
        </p>
        <button className='mt-7 w-[170px] h-[64px] bg-blue-gradient rounded-[12px]'>Get Started</button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card}/>
      </div>
    </section>
    
     
    

)

export default CardDeal