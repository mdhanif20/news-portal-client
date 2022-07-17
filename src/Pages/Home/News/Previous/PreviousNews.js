import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DetailsModal from './../ReadDetails/DetailsModal';

const PreviousNews = ({allnews}) => {
    const reverse= [...allnews].reverse();
    const news = reverse[1];
    const [learn,setLearn] = useState(false);
    const [details,setDetails] = useState({});
     const [openBooking, setOpenBooking] = React.useState(false);
     const handleBookingOpen = () => setOpenBooking(true);
     const handleBookingClose = () => setOpenBooking(false);
    const readDetail = (id) =>{       
        const found = reverse.find(data =>data._id === id)
        setDetails(found)
        handleBookingOpen()
    }
    const readDetails = (condition,id)=>{
        if(id===news?._id){
            setLearn(condition)
        }
        else{
            setLearn(false)
        }
    }

    return (
        <Box sx={{px:{xs:1,sm:2},pb:6}}>
            <Grid container spacing={2}>
                <Grid  item sm={12} md={8}>
                    <img style={{paddingRight:"20px",width:"95%",margin:"auto"}} align="left" src={news?.img} alt="" />
                    <Box  align="right"> 
                    <Typography sx={{textAlign:"justify",fontSize:"1.2rem"}} variant="body1" gutterBottom>
                    <Typography sx={{fontWeight:'bolder'}} variant="h5" gutterBottom component="div">
                      {news?.heading}
                    </Typography>
                    {
                    learn? <>
                        {
                            news?.details 
                        }
                        <Button onClick={()=>readDetails(false,news?._id)}>Minimize</Button>
                        </>:<>
                        {
                            news?.details.slice(0,500)
                        }...
                        <Button onClick={()=>readDetails(true,news?._id)}>Read more</Button>
                        </>
                } 
                      
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        
                    </Typography>
                    </Box>
                    
                </Grid> 
                <Grid   item sm={12} md={4}>
                    
                <Box>
                    {
                        reverse?.slice(10,15).map(data => <Card key={data._id} onClick={()=>readDetail(data._id)} sx={{ display: 'flex',my:1,p:1,cursor:"pointer" }}>
                            <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={data.img}
                            alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex',px:2 }}>
                            <CardContent sx={{ flex: '1 0 auto',padding:"5px",width:"100%" }}>
                            <Typography  sx={{textAlign:"justify",fontWeight:"bolder"}}  component="div" variant="body1">
                            {data?.heading?.slice(0,25)}...
                            </Typography>
                            <Typography sx={{textAlign:"justify"}} color="text.secondary" variant="body1">
                            {data?.details?.slice(0,70)} <span style={{color:"#587DEF"}}>read more</span>...
                            </Typography>
                            </CardContent>
                            </Box>
                        </Card>)
                    }
              
                </Box> 
                </Grid> 
            </Grid>  
            <DetailsModal
            news={details}         
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            ></DetailsModal>
        </Box>
    );
};

export default PreviousNews;