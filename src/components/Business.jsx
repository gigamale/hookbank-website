import React from 'react'
import styles, {layout} from '../style'
import { features } from '../constants'
import Button from "./Button"
import { Link } from 'react-router-dom'

const FeatureCard = ({icon, title, content, index}) => (
<div className={`flex flex-row p-6 rounded-[40px] ${index !== features.length - 1} ? "mb-6 : "mb-0"`}>
  <div className={`h-[64px] w-[64px] ${styles.flexCenter} feature-card`} >
    <img src={icon} alt="icon" className='h-[50%] w-[50%] object-contain '/>
  </div>
 
   <div className='flex-1 flex flex-col ml-3'>
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[32px] mb-1">{title}</h4>
    <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[32px] " >{content}</p>
   </div>
</div>
)


const Business = () => {
  return (
    <div id='features' className={layout.section}>
 <div className={layout.sectionInfo}>
  <h2 className={`font-poppins font-semibold xs:text-[30px] text-[40px] text-white xs:leading-[50.8px] leading-[54.8px] w-full mt-5`}  >The persuasive, relevant,& action taking words  to make you stand out from your competitors, to connect with your target audience & to actually sell it.<br className='sm:block hidden'/></h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We're here to get you a pristine copy that attracts the right customers,<span className='text-gradient font-semibold'> increases sales, </span>and creates irresistible brands.!!
</p>
<Link to="https://wa.me/918849493915"> 
   <button className=' mt-6 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[8px] outline-none'>Contact Us</button>
   </Link>
 </div>

 <div className={`${layout.sectionImg} flex-col`}>
  {features.map((feature,index) => (
    <FeatureCard key={feature.id} {...feature} index={index}/>
  ))}
 </div>
           
    </div>
  )
}

export default Business