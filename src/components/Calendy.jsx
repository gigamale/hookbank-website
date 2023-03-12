import React, { useEffect } from 'react';
import styles,{layout} from '../style'
function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mb-4 overflow-hidden '  >
  <h1 className='flex-1 text-center font-poppins font-semibold ss:text-[55px] text-[42px] text-white ss:leading-[100px]'>

  <span className='text-gradient'>Book</span> a Call with us
   <br/> Today 
  </h1>




    
     <div className="calendly-inline-widget" data-url="https://calendly.com/fruitboxmedia/30min" style={{height:'89vh',width:'100%',marginTop:'4px',overflow:'clip'}}></div>

    
       
   </div>
   
  );
}

export default CalendlyButton;
