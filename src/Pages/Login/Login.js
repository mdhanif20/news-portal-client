import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import Navbar from './../Sheared/Navbar/Navbar';
import Footer from './../Sheared/Footer/Footer';
import useAuth from './../Sheared/Firebase/useAuth';
import useFirebase from './../Sheared/Firebase/useFirebase';


const useStyle = makeStyles({
    image:{
        width:"100%",
        height:"80vh"
    },
    login:{
        boxShadow:" 1px 1px 43px 0px #ebe4e4",
        margin:"auto"
    },
    textField:{
       
    },
    fieldButton:{
        background: "red"
    }
})


const Login = () => {
    const {users,singnInUser,isLoading,signInWithGoogle} = useAuth();
    const classes = useStyle();
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    const onChangeBlur = e =>{
        const field = e.target.name;
        const value= e.target.value;
        const newUser = {...user};
        newUser[field]=value
        setUser(newUser)
    }
    const googleSignIn = e =>{
        signInWithGoogle()
        navigate("/home")  
    }
    const loginAccount = e =>{
        singnInUser(user.email,user.password)
        navigate("/home")
        e.preventDefault()
        }
    
    
    return (
        <Box>
        <Box sx={{backgroundColor:"#24262f",position:'sticky',top:0,zIndex:10}}>
             <Navbar></Navbar>
       </Box>
         <Container sx={{zIndex:1}}>
            <Box sx={{py:10}}>
                 
            <Box className={classes.login} sx={{width:{md:"50%",xs:"90%"}, padding:{md:"70px 20px",xs:"30px 10px"}}}>
                 <Typography sx={{pb:2}} variant="h6" gutterBottom component="div">
                         Login
                     </Typography>

             { !isLoading &&  <form onSubmit={loginAccount}>
                         
                         <TextField 
                         sx={{width:{md:"75%",xs:1}}}
                         id="standard-basic"
                         type="Email"  
                         name="email"
                         onBlur={onChangeBlur}
                         label="Email"
                        variant="standard" 
                        /> <br /> <br /> 
                         <TextField 
                         sx={{width:{md:"75%",xs:1}}} id="standard-basic" 
                         type="password" 
                         name="password"
                         onBlur={onChangeBlur}
                         label="Password" 
                         variant="standard" 
                         /> <br /> <br /> 
                         
                         <Button sx={{ color:"#fff",
                         width:{md:"75%",xs:1},
                         fontWeight:"bolder",
                         background:"red",
                         "&:hover":{
                             background:"#ea0000"
                         }
                         }} type="submit">Login</Button> <br /> <br />
                         
                         
                 </form>
                 }
                 <Button 
                        onClick={()=>googleSignIn()}
                        sx={{ color:"#fff",
                         width:{md:"75%",xs:1},
                         fontWeight:"bolder",
                         background:"red",
                         "&:hover":{
                             background:"#ea0000"
                         }
                         }} type="submit">Google Sign In</Button> <br /> <br />

                         <Link style={{textDecoration:"none"}} to={"/reagister"}>
                         <Button sx={{ color:"#fff",
                         width:{md:"75%",xs:1},
                         fontWeight:"bolder",
                         background:"red",
                         "&:hover":{
                             background:"#ea0000"
                         }
                         }} type="submit">Please Reagister</Button>
                         </Link>
         </Box>
     </Box>
     </Container>
     <Box sx={{boxShadow: 1,color:"rgba(0, 0, 0, 0.87)"}}>
         <Footer></Footer>
     </Box>
    </Box>
    );
};

export default Login;