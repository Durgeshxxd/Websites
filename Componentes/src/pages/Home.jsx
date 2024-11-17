import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/white.jpg'
import "../styles/HomeStyles.css";
const Home = () => {
  return (
   <Layout>
     <div className="home" style={{ backgroundImage:`url(${Banner})` }}>
        <div className="headerContainer">
          <p> <b>MVT HSRP SOLUTIONS PVT LTD</b></p>
        
          <Link to="/booking">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
   </Layout>
  )
}

export default Home
