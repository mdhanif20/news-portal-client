import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './../../Sheared/Navbar/Navbar';
import Footer from './../../Sheared/Footer/Footer';
import LeftSideBar from '../SideBar/LeftSideBar';

const Deshboard = () => {
    return (
        <Box>
            <Box sx={{backgroundColor:"#24262f",position:'sticky',top:0,zIndex:10}}>
                <Navbar></Navbar>
             </Box>
             <Box sx={{margin:{xs:"0px",sm:"50px"},display:"flex",boxShadow: "0px 1px 3px #c4bdbd;"}}>
                <LeftSideBar></LeftSideBar>
            </Box>
            <Box sx={{boxShadow: 1,color:"rgba(0, 0, 0, 0.87)"}}>
                <Footer></Footer>
             </Box>
            
        </Box>
    );
};

export default Deshboard;