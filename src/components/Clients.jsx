import React from 'react'
import { clients } from '../constants'
import styles from '../style'
const Clients = () =>  (
   
    <section className={` ${styles.flexCenter} my-4 `}>
     <div className={` ${styles.flexCenter} w-full flex-wrap `}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px] m-5`}>
          <img src={client.logo} className='sm:w-[192px] w-[100px] object-contain'/>
        </div>
      ))}

</div>
    </section>
    
   
   
    
  )


export default Clients