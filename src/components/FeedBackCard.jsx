import React from 'react'
import { quotes } from '../assets'
const FeedBackCard = ({content, name,title,img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card'>
      <img src={quotes} alt="testimony " className='h-[42.6px] w-[27.6px] object-contain'/>
      
        <p className='text-[18px] font-poppins font-normal leading-[32px] text-white my-10'>{content}</p>
     
        <div className='flex flex-row items-start'>
          <img src={img} className='h-[48px] w-[48px] object-contain'/>
          <div className='ml-4'>
           <h1 className='text-[20px] text-white font-normal font-poppins leading-[32px]'>{name}</h1>
           <p className='text-[16px] text-white font-poppins leading-[24px] opacity-50'>{title}</p>
          </div>
        </div>
    </div>
  )


export default FeedBackCard