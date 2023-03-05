import React from 'react'
import styles from './style';

import { Navbar, Hero, Billing,Button,CardDeal,Clients,CTA,FeedBackCard,Footer,GetStarted,Business, Calendy
,Stats,Testimonials,CopyRight
} from './components';

const App = () => 
   (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        
         <Business></Business>
         <Calendy/>
         <CardDeal></CardDeal>
         <Testimonials></Testimonials>

         <CTA></CTA>   
         <Footer></Footer>
         <CopyRight/>
        </div>
      </div>
   
      </div>
   
   
  );


export default App