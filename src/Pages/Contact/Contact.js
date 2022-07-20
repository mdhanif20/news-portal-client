import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './../Sheared/Navbar/Navbar';
import Footer from './../Sheared/Footer/Footer';
import ContactInfo from './ContactInfo';
import Container from '@mui/material/Container';

const Contact = () => {
    return (
        <Box>
          <Box sx={{backgroundColor:"#24262f",position:'sticky',top:0,zIndex:10}}>
             <Navbar></Navbar>
           </Box>  
          <Container sx={{my:10}}>
             <ContactInfo></ContactInfo>
          </Container>  
          <Box sx={{boxShadow: 1,color:"rgba(0, 0, 0, 0.87)"}}>
                <Footer></Footer>
          </Box> 
        </Box>
    );
};

export default Contact;