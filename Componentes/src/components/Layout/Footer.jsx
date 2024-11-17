import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
     <Box sx={{textAlign:"center" ,bgcolor:"#0C0C0C", color:"wheat" ,p:3}}>
        <Box  sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
            
          }}>
        <InstagramIcon/>
          <TwitterIcon />
          <YouTubeIcon />
        
        </Box>
    <Typography variant="h5"  sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
    }}}>
        All Right Reserved::BOOK-MY-HSRP
    </Typography>
     </Box>
    </>
  )
}

export default Footer
