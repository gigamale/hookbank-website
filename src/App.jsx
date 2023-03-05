import React from 'react';
import styles from './style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Hero, Business, Calendy, CardDeal, Testimonials, CTA, Footer, CopyRight } from './components';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Business />
            <Calendy />
            <CardDeal />
            <Testimonials />
            <CTA />
            <Footer />
            <CopyRight />
          </div>
        </div>
      </div>} />

      <Route path='/calendy' element={

        <div style={{backgroundColor:'black', overflow:'hidden'}}><Calendy/> </div>
      }></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
