import React ,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';
import {Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer=(
  <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
 <Typography color={"goldenrod"} 
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}>

        <DirectionsCarIcon/>
        BOOK-MY-HSRP
        </Typography>
      <Divider/>
       <ul className='mobile-navigation'>
        <li>u
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/booking"}>Booking</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>ContactUs</Link>
        </li>
       </ul>
        </Box>
 
  )
  return (
    <>
     <Box>
      <AppBar component={"nav"} sx={{bgcolor:"black"}}>
       <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},
      }}
    onClick={handleDrawerToggle}
      >
       <MenuIcon/>     

        </IconButton>
       <Typography color={"goldenrod"} 
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}>

        <DirectionsCarIcon/>
        BOOK-MY-HSRP
        </Typography>
        <Box sx={{display:{xs:'none',sm:'block'}}}>
       <ul className='navigation-menu'>
        <li>u
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/booking"}>Booking</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>ContactUs</Link>
        </li>
       </ul>
        </Box>
       </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block",sm:"none"} , "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",}}}>
         {drawer}
        </Drawer>
     </Box>
    <Box>
    <Toolbar/>
    </Box>
     </Box>
    </>
  )
}

export default Header