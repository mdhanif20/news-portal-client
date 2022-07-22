import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FlagIcon from '@mui/icons-material/Flag';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from './../../Sheared/Firebase/useAuth';


const useStyle = makeStyles({
    container:{
        padding:"40px 0px 40px 0px", 
        paddingBottom:".09px",
        height:"100vh",
        position: "sticky",
        color:'#fff',
        top:0
    },
    item:{
        display:"flex",
        justifyContent:"flex-start",
        marginBottom:'10px',
        cursor:"pointer",
        color:"#fff",
        width:"100%"
    },
    icon:{
        marginRight:"6px",
    },
    text:{
        fontWeight:800,
        fontSize:"1rem",
        opacity:1
    },
    linkDesign:{
        textDecoration:"none",
        color:"#fff"
    }
    ,
    containerSmall:{
        padding:"20px 0px", 
        paddingBottom:".09px",
        height:"98vh", 
        position: "sticky",
        color:'#fff',
        top:0,
    },
    textSmall:{
        fontWeight:800,
        border:"2px solid #fff",
        padding:"2px 14px",
        borderRadius:"30px",
        backgroundColor:"black",
        marginLeft:"-100%",
        opacity:0,
        zIndex:1
    },
    itemSmall:{
        display:"flex",
        alignItems:"center",
        marginBottom:"25px",
        cursor:"pointer",
        '&:hover $textSmall':{
            marginLeft:"0",
            opacity:1,
            transition:".6s"
        }
    },
    
    iconSmall:{
        marginRight:"6px",
    }
   
})
 


const LeftSideBar = () => {
    const classes = useStyle();
    const {logOut,users} = useAuth();
    const logOutEmail = () =>{
        const sure = window.confirm("Are You Sure? You Want To log Out.");
        if(sure){
          logOut();
        }
      }

    return (
        <Box sx={{display:"flex"}}>
            <Box sx={{display:{xs:"none",sm:"none",md:'block'}}}>
                    <Container style={{  backgroundColor:"black",width:"190px",paddingLeft:"10px"}} className={classes.container}>

                    <Link className={classes.linkDesign} to="/deshboard">
                    <Button style={{
                        display:"flex",
                        justifyContent:"flex-start",
                        marginBottom:'10px',  
                        cursor:"pointer",
                        color:"#fff",
                        width:"100%"
                    }}>
                        <FlagIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}} className={classes.text}>Bangladesh</Typography>
                    </Button>
                    </Link>

                    <Link className={classes.linkDesign} to="/deshboard/sport">
                        <Button style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            marginBottom:'15px',
                            cursor:"pointer",
                            color:"#fff",
                            width:"100%"
                            }}>
                            <SportsGymnasticsIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Sport</Typography>   
                        </Button>
                    </Link>
                    <Link className={classes.linkDesign} to="/deshboard/business">
                        <Button style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            marginBottom:'15px',
                            cursor:"pointer",
                            color:"#fff",
                            width:"100%"
                            }}>
                            <BusinessCenterIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Business</Typography>   
                        </Button>
                    </Link>
                   
                    <Link className={classes.linkDesign} to="/deshboard/health">
                        <Button style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            marginBottom:'15px',
                            cursor:"pointer",
                            color:"#fff",
                            width:"100%"
                            }}>
                            <LocalHospitalIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Health</Typography>   
                        </Button>
                    </Link>
                    
                     <Link className={classes.linkDesign} to="/deshboard/technology">
                     <Button style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            marginBottom:'15px',
                            cursor:"pointer",
                            color:"#fff",
                            width:"100%"
                            }}>
                            <BiotechIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Technology</Typography>   
                        </Button>
                    </Link>


                     <Link className={classes.linkDesign} to="/deshboard/entertainment">
                     <Button style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            marginBottom:'15px',
                            cursor:"pointer",
                            color:"#fff",
                            width:"100%"
                            }}>
                            <SlideshowIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>Entartainment</Typography>   
                        </Button>
                    </Link>

                      <Link className={classes.linkDesign} to="/contact">
                        <Button style={{
                            display:"flex",
                            justifyContent:"flex-start",
                            marginBottom:'10px',
                            cursor:"pointer",
                            color:"#fff",
                            width:"100%"
                        }}>
                            <ContactPageIcon style={{fontSize:"25px"}} className={classes.icon}/>
                            <Typography style={{fontWeight:500}}className={classes.text}>ContactUs</Typography>   
                        </Button>
                    </Link>
                    
                   {
                    users?.email ?<Button onClick={()=>logOutEmail()} style={{
                        display:"flex",
                        justifyContent:"flex-start",
                        marginBottom:'10px',
                        cursor:"pointer",
                        color:"#fff",
                        width:"100%"
                    }}>
                        <LogoutIcon style={{fontSize:"25px"}} className={classes.icon}/>
                        <Typography style={{fontWeight:500}}className={classes.text}>LogOut</Typography>   
                    </Button> 
                    :
                    <Link className={classes.linkDesign} to="/login">
                        <Button style={{
                        display:"flex",
                        justifyContent:"flex-start",
                        marginBottom:'10px',
                        cursor:"pointer",
                        color:"#fff",
                        width:"100%"
                        }}>
                        <LoginIcon style={{fontSize:"25px"}} className={classes.icon}/>
                        <Typography style={{fontWeight:500}}className={classes.text}>Login</Typography>   
                        </Button> 
                    </Link>
                    
                   }
                    
                </Container>
            </Box>




           <Box sx={{display:{xs:"block",sm:"block",md:"none"},zIndex:1}}>
           <Container style={{paddingLeft:"8px",paddingRight:"31px"}} sx={{ bgcolor:"#0f0c0b",width:"34px"}} className={classes.containerSmall}>
                    <Link className={classes.linkDesign} to="/deshboard">  
                        <div className={classes.itemSmall}>
                            <FlagIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Bangladesh</Typography>
                        </div>
                    </Link>
                    
                    <Link className={classes.linkDesign} to="/deshboard/sport"> 
                        <div className={classes.itemSmall}>
                            <SportsGymnasticsIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Sport</Typography>
                        </div>
                    </Link>
                    
                    <Link className={classes.linkDesign} to="/deshboard/business"> 
                        <div className={classes.itemSmall}>
                            <BusinessCenterIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Business</Typography>
                        </div>
                    </Link>
                    
                    <Link className={classes.linkDesign} to="/deshboard/health">  
                        <div className={classes.itemSmall}>
                            <LocalHospitalIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Health</Typography>
                        </div>
                    </Link>
                    
                    <Link className={classes.linkDesign} to="/deshboard/technology"> 
                        <div className={classes.itemSmall}>
                            <BiotechIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Technology</Typography>
                        </div>
                    </Link>
                    
                    <Link className={classes.linkDesign} to="/deshboard/entertainment"> 
                        <div className={classes.itemSmall}>
                            <SlideshowIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Entartainment</Typography>
                        </div>
                    </Link>
                    
                    {
                        users.email?<div onClick={()=>logOutEmail()} className={classes.itemSmall}>
                        <LogoutIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                        <Typography style={{fontWeight:400}} className={classes.textSmall}>LogOut</Typography>
                    </div>:<div className={classes.itemSmall}>
                        <Link className={classes.linkDesign} to="/login">
                            <LoginIcon style={{fontSize:"25px"}} className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Login</Typography>
                        </Link>
                    </div>
                    }
                    

                   {/*  {
                        
                        admin && <Box>
                        <Link className={classes.linkDesign} to="/deshboard/allAppointment">
                        <div className={classes.itemSmall}>
                            <PeopleIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}} className={classes.textSmall}>Patients</Typography>
                        </div>
                        </Link>
                        <Link className={classes.linkDesign} to="/deshboard/makeadmin">
                            <div className={classes.itemSmall}>
                                <ManageAccountsIcon style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                                <Typography style={{fontWeight:400}} className={classes.textSmall}>MakeAdmin</Typography>
                            </div>
                        </Link>
                        </Box>
                       } */}
                          
                
                   {/*  {
                        users?.email?
                        <div onClick={()=>logOutEmail()} className={classes.itemSmall}>
                            <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                            <Typography style={{fontWeight:400}}  className={classes.textSmall}>Log Out</Typography>
                        </div>
                        :
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/login">
                            <div className={classes.itemSmall}>
                                <Logout style={{fontSize:"25px"}}  className={classes.iconSmall}/>
                                <Typography style={{fontWeight:400}}  className={classes.textSmall}>Log In</Typography>
                            </div>
                        </Link>
                      } */}
                    
                </Container>
            </Box>
            <Outlet/>
        </Box>
       
        
    );
};

export default LeftSideBar;