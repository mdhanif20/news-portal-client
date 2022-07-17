import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';

const useStyle = makeStyles({
    icon:{
        fontSize: "2rem",
        padding: "5px",
        border: "2px solid red",
        margin: "5px",
        borderRadius: "50%",
        cursor:"pointer",
        "&:hover":{
            color:"#fff",
            background:"red"
        }
        }
})

const Footer = () => {
    const classes = useStyle();
    return (
        <Box sx={{borderTop:"2px solid black",mt:10}}>
              <Typography sx={{textAlign:'center',pt:5}} variant="subtitle1" gutterBottom component="div">
                <span><FacebookIcon className={classes.icon}></FacebookIcon></span>
                <span> <TwitterIcon className={classes.icon}></TwitterIcon></span>
                <span> <LinkedInIcon className={classes.icon}></LinkedInIcon></span>
                <span> <YouTubeIcon className={classes.icon}></YouTubeIcon></span>
              </Typography>
             
              <Typography sx={{fontWeight:"bolder",pt:1}} variant="button" display="block" gutterBottom>
              © Copyright 2021, All rights reserved. Design by Alithemes.com
            </Typography>
        </Box>
    );
};

export default Footer;