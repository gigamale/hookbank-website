import React from 'react'
import { apple, bill, google } from '../assets'
import styles,{layout} from '../style'
const Billing = () => (
  
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='h-[100%] w-[100%] relative z-5'/>
      </div>

   <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>You do the business, <br/> we’ll handle the money.</h2>
    <p className='text-white font-poppins font-normal text-[18px] leading-[32px] mt-5'>With the right credit card, you can improve your financial life
       by building credit, earning rewards and saving money. 
      But with hundreds of credit cards on the market.</p>
      <div className='flex flex-row mt-9 '>
      <img src={apple} alt="apple"/>
       <img src={google} alt="google" className='ml-3'/>
      </div>
      
      

   </div>

    </section>
  
)

export default Billing