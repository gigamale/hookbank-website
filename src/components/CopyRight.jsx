import React from 'react'
import styles from '../style'
import { socialMedia } from '../constants'
const CopyRight = () => (
   
    <section className={` w-full flex justify-between md:flex-row flex-col items-center pt-6   `}>
    <div className='flex flex-row'>
    <h2 className={`${styles.paddingY} text-[18px] text-dimWhite font-normal font-poppins ml-2`}>Copy1Right</h2>
    <h2 className={`${styles.paddingY} text-[18px] text-dimWhite font-normal font-poppins ml-2`}>@</h2>
    <h2 className={`${styles.paddingY} text-[18px] text-dimWhite font-normal font-poppins ml-2`}>2021 HooBank All Rights Reserved.</h2>
    </div>

 <div className='  flex flex-row  '>
    {socialMedia.map((link,index) => (
        <div key={link.id}>
            <img src={link.icon} className={index !== link.length - 1 ? "mr-6": "ml-0"}   />
        </div>
    ))}
 </div>

    </section>


  )


export default CopyRight