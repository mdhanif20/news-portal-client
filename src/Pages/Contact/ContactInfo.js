import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactFormHeader from './ContactFormHeader';

const useStyle = makeStyles({
    contactArea:{
        backgroundColor:"#000000"
    },
    contactAreaSmall:{
        backgroundColor:'#FF0000',
        paddingStart:"20px"
    },
    contact:{
        textAlign:"start"
    },
    icon:{
        color:"red",
        padding:"3px",
        border:"1px solid",
        borderRadius:'20%',
        marginRight:'10px',
        cursor:"pointer",
        "&:hover":{
            color:"#fff",
            background:"#e40000",
            transition:".4s"
        }
    }
})

const ContactInfo = () => {
    const classes = useStyle();
    return (
        <Box sx={{mb:{xs:10,sm:10}}}>
            <Box sx={{display:{xs:"none",sm:"block"}}} className={classes.contactArea}>
            <Grid container spacing={2}>
                <Grid  item xs={12} sm={4} >
                    <Box sx={{p:{xs:2,sm:8}}} className={classes.contact}>
                    <Typography sx={{fontSize:"1.2rem",color:"#fff"}} variant="button" display="block" gutterBottom>
                        Location
                    </Typography>
                    <Typography sx={{color:"#fff"}} variant="body1" gutterBottom>
                    House-32, Kanchannagar, <br />
                    Chandanish, Chittagong
                    </Typography>
                        <Box sx={{mt:{xs:5,sm:20}}}>
                        <Typography sx={{fontSize:"1.1rem",color:"#fff",pb:1,fontWeight:"bolder"}} variant="button" display="block" gutterBottom>
                            Follow us
                        </Typography>
                            <Box sx={{display:"flex"}}>
                                <Box><FacebookIcon className={classes.icon} /></Box>
                                <Box><EmailIcon className={classes.icon}/></Box>
                                <Box><TwitterIcon className={classes.icon}/></Box>
                                <Box><LinkedInIcon className={classes.icon}/></Box>
                            </Box>
                            <Typography sx={{color:"#fff",pt:1,fontWeight:"bolder"}} variant="subtitle2" gutterBottom component="div">
                            @2021 Privacy Policy
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid  item xs={12} sm={8}>
                    <ContactFormHeader></ContactFormHeader>
                </Grid>
            </Grid>
            </Box>

            <Box sx={{display:{xs:"block",sm:"none"}}}>
            <Grid  className={classes.contactAreaSmall} container>
                <Grid  item xs={12}>
                    <Box className={classes.contact}>
                    <Typography sx={{fontSize:"1.2rem",color:"#fff",pt:5}} variant="button" display="block" gutterBottom>
                        Location
                    </Typography>
                    <Typography sx={{color:"#fff"}} variant="body1" gutterBottom>
                    House-32, Kanchannagar, <br />
                    Chandanish, Chittagong
                    </Typography>
                        <Box sx={{mt:{xs:2}}}>
                        <Typography sx={{fontSize:"1.1rem",color:"#00ffff",pb:1}} variant="button" display="block" gutterBottom>
                            Follow us
                        </Typography>
                            <Box sx={{display:"flex"}}>
                                <Box><FacebookIcon className={classes.icon} /></Box>
                                <Box><EmailIcon className={classes.icon}/></Box>
                                <Box><TwitterIcon className={classes.icon}/></Box>
                                <Box><LinkedInIcon className={classes.icon}/></Box>
                            </Box>
                            <Typography sx={{color:"#00ffff",pt:1}} variant="subtitle2" gutterBottom component="div">
                            @2021 Privacy Policy
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid  item xs={12}>
                    <ContactFormHeader></ContactFormHeader>
                </Grid>
            </Grid>
            </Box>
        </Box>
    );
};

export default ContactInfo;