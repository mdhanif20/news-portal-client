import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import img from "../../../images/hills3.png";

const useStyle = makeStyles({
    header:{
        background:"black",
        textAlign:'center',
        padding:'20px 0px'
    }
})

const Header = () => {
    const classes = useStyle();
    return (
        <Box className={classes.header}>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
                <img src={img} style={{width:"auto"}} alt="" />
            </Box>
            <Box sx={{display:{xs:"block",sm:"none"}}}>
                <h2 style={{color:"#fff"}}>NEWS PORTAL</h2>
            </Box>
        </Box>
    );
};

export default Header;