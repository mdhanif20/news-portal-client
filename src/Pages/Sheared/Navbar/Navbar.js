import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';
// import useAuth from './../../Hooks/useAuth';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import useAuth from './../Firebase/useAuth';

const Navbar = () => {
    const {users,logOut} = useAuth();
    const logOutEmail = () =>{
      const sure = window.confirm("Are You Sure? You Want To log Out.");
      if(sure){
        logOut();
      }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
     
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


    return (
        <AppBar style={{position:"sticky",top:"0",zIndex:10}} position="static" sx={{bgcolor:"#212121"}}>
          <Container maxWidth="xl">
            <Toolbar style={{minHeight:"34px"}} disableGutters>
              <DehazeIcon sx={{pr:3,fontSize:"2rem",cursor:"pointer",display: { xs: 'none', lg: 'flex' }}}/>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' },bgcolor:"red",padding:"7px 5px",fontWeight:"600" }}
              >
                NEWS
              </Typography>


              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'flex', md: 'none' },bgcolor:"red",padding:"8px 20px 8px 5px",fontWeight:"600" }}
              >
                NEWS
              </Typography>

              <Typography sx={{display: { xs: 'flex', lg: 'none' },justifyContent:"flex-end",width:"100%"}} textAlign="center"><SearchIcon sx={{cursor:"pointer"}}/></Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex',sm:"flex", md: 'flex',lg:"none" },justifyContent: 'flex-end'  }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  
                    <MenuItem  onClick={handleCloseNavMenu}>
                       {/* <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/home"> */}
                        <Typography textAlign="center">Home</Typography>
                      {/* </Link> */}
                    </MenuItem>

                    <MenuItem  onClick={handleCloseNavMenu}>
                      {/* <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/appointment"> */}
                         <Typography textAlign="center">Appointment</Typography>
                      {/* </Link> */}
                    </MenuItem>

                   {/*  {
                    users?.email && 
                    <MenuItem  onClick={handleCloseNavMenu}>
                          <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/deshboard">
                            <Typography style={{color:"#0F0C0B"}} textAlign="center">Desh Board</Typography>
                          </Link>
                    </MenuItem>
                    } */}

                    <MenuItem  onClick={handleCloseNavMenu}>
                      {/* <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/contact"> */}
                         <Typography textAlign="center">Contact Us</Typography>
                      {/* </Link> */}
                    </MenuItem>

                    <MenuItem  onClick={handleCloseNavMenu}>
                   {/*  {
                        users?.email?
                        <Typography onClick={()=>logOutEmail()} textAlign="center">Log Out</Typography>
                        :
                     <Link style={{textDecoration:"none",color:"#0F0C0B"}} to="/login">
                        <Typography textAlign="center">Login</Typography>
                     </Link>
                      } */}
                    </MenuItem>

                </Menu>
              </Box>





              <Box sx={{ flexGrow: 1, display: { xs: 'none',sx:"none", md: 'none',lg:"flex" },justifyContent: 'flex-start' }}>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                     <Link style={{textDecoration:"none",color:"#fff"}} to="/home"> 
                        <Typography textAlign="center">Home</Typography>
                       </Link> 
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/home"> */}
                        <Typography textAlign="center">Bangladesh</Typography>
                      {/* </Link> */}
                  </Button>
              
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/appointment"> */}
                         <Typography textAlign="center">Sports</Typography>
                      {/* </Link> */}
                  </Button>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/appointment"> */}
                         <Typography textAlign="center">Business</Typography>
                      {/* </Link> */}
                  </Button>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/appointment"> */}
                         <Typography textAlign="center">Health</Typography>
                      {/* </Link> */}
                  </Button>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/appointment"> */}
                         <Typography textAlign="center">Technology</Typography>
                      {/* </Link> */}
                  </Button>
                
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ color: '#fff', display: 'block' ,padding:"0px 8px"}}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/appointment"> */}
                         <Typography textAlign="center">Entertainment</Typography>
                      {/* </Link> */}
                  </Button>

                  {/* {
                        users?.email && <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#fff', display: 'block' }}>
                          <Link style={{textDecoration:"none",color:"#fff"}} to="/deshboard">
                            <Typography textAlign="center">DeshBoard</Typography>
                          </Link>
                      </Button>
                  } */}
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{  color: '#fff', display: 'block' }}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/contact"> */}
                         <Typography textAlign="center">Contact Us</Typography>
                      {/* </Link> */}
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{  color: '#fff', display: 'block',ml:"auto" }}>
                      {/* <Link style={{textDecoration:"none",color:"#fff"}} to="/contact"> */}
                         <Typography textAlign="center"><SearchIcon/></Typography>
                      {/* </Link> */}
                  </Button>
                 
                  <Button
                    onClick={handleCloseNavMenu}
                    style={{padding:"0",margin:"0"}}
                    sx={{ color: '#fff', display: 'block' }}>
                      {
                        users?.email?
                          <Typography onClick={()=>logOutEmail()} sx={{background:"red",padding:"11px 8px",fontWeight:'bolder'}} textAlign="center">LogOut</Typography>
                       
                        :
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/login">
                          <Typography sx={{background:"red",padding:"11px 8px",fontWeight:'bolder'}} textAlign="center">Login</Typography>
                        </Link>
                      }
                      
                     
                  </Button>
                      
                 
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  
                </Menu>
              </Box>
            </Toolbar>
          </Container>
      </AppBar>
    );
};
export default Navbar;