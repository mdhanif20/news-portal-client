import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DetailsModal from './../News/ReadDetails/DetailsModal';

const CardNews = ({news}) => {
    const [details,setDetails] = useState({});
    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
   const readDetails = (id) =>{       
       const found = news.find(data =>data._id === id)
       setDetails(found)
       handleBookingOpen()
   } 
    return (
        <Box sx={{px:{xs:2,sm:4},zIndex:1}}>
        
        <Grid container spacing={2}>
            {
                news.slice(10,16).map(singleNews=><Grid key={singleNews._id} item xs={12} sm={6} md={4}>
                     <Card onClick={()=>readDetails(singleNews._id)} sx={{ maxWidth: "100%"}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="250"
                            image={singleNews.img}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {singleNews?.heading?.slice(0,30)}...
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {singleNews?.details?.slice(0,200)}  <span style={{color:"#587DEF"}}>read more</span>...
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>)
            }
       </Grid>
       <DetailsModal
        news={details}         
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        ></DetailsModal>
       </Box>
    );
};

export default CardNews;