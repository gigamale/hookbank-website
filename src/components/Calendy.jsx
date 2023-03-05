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
    <div className='flex flex-col justify-center items-center mb-10 overflow-hidden '  >
    <h1 style={{textAlign: 'center'}} className={`${styles.heading2} sm:mb-1  `}>
      
   Schedule a call with us

       <br className='sm:block hidden'/> today</h1>

    
     <div className="calendly-inline-widget" data-url="https://calendly.com/fruitboxalternative/30min" style={{height:'89vh',width:'100%',marginTop:'16px',overflow:'clip'}}></div>

    
       
   </div>
   
  );
}

export default CalendlyButton;
