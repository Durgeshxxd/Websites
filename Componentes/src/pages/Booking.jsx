import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/Booking.css";
import { useNavigate } from 'react-router-dom';
import Form from './Form';







const Booking = () => {
  const navigate=useNavigate();
  const [cards]=useState([
    {
    
      text:'Colour Sticker'
      
    },
    {
   
      text:'High Security Registration Plate for Four Wheeler'
      

    },
    {
     
      text:'High Security Registration Plate with Colour Sticker'
    },
    {
      
      text:'High Security Registration Plate For Electric Vehicle'
    },
    {
    
      text:'High Security Registration Plate for Two Wheeler'
    },
    {
    
      text:'High Security Registration Plate For Tractor'
      
    },
  ])
  return (
    <Layout>
      <div>
     <section>
      <div className="container">
        
        <div className="cards">
          {cards.map((card,i)=>
          <div key={i} className='card'>
            <h3>
              {card.tittle}
            </h3>
            <h16>
              <b>{card.text}</b>
            </h16>
      
          <button className='btn' onClick={()=>navigate("/form")}>BookNow</button>
          
          </div>
          )}
        </div>
      </div>
      
     </section>
      </div>
     
    </Layout>
  )
}

export default Booking;
