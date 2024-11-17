import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
  <Layout>
   <Box  sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            color:"red",
            textDecoration:"bold"
          },
          "& p": {
            textAlign: "center",
            color:"green"
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}>
  <Typography variant='h4'>
    <u> <i>Welcome to Shop</i></u>
    
  </Typography>
  <p>
  We Provide Number Plate Booking Services At Lower Cost Just INR 1299 Ruppes For Two Wheelers Four Wheelers EV Vehicles <br />We Provide High Security Registration Plate With Colour Stickers Also <br />
  </p>
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <h12><b>For Offline Services Contact Us </b></h12>
   <br />
  <h12><b>MVT HSRP SOLUTION PVT LTD</b></h12>
  <h12><b>Maharana Pratap Murti, Karhel Chauraha, Mainpuri</b></h12>
  <br /><br /><br /><h12><b>Email US <br />bookmyhsrp775@gmail.com</b></h12>
  <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <h12>
   <b> <i>OUR SERVICES</i></b> 
   </h12>
   <br />
   <h12>
    <b>
   High Security Registration Plate with Colour Sticker
   </b>
   </h12>
   <br />
   <h12>
    <b>
   High Security Registration Plate for Two Wheeler
   </b>

   </h12>
   <br />
   <h12>
    <b>
   High Security Registration Plate For Tractor
   </b>
   </h12>
   <br />
   <h12>
    <b>
    High Security Registration Plate for Four Wheeler</b>
  
   </h12>
   </Box>
  </Layout>
  )
}

export default About
