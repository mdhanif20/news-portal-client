import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DetailsModal from './../ReadDetails/DetailsModal';
import addImg from "../../../../images/nooduls.jpg";

const BottomNews = ({news}) => {
    const [details,setDetails] = useState({});
     const [openBooking, setOpenBooking] = React.useState(false);
     const handleBookingOpen = () => setOpenBooking(true);
     const handleBookingClose = () => setOpenBooking(false);
    const readDetails = (id) =>{       
        const found = news.find(data =>data._id === id)
        setDetails(found)
        handleBookingOpen()
    } 

    return (
        <Box sx={{px:{xs:1,sm:3}}}> 
    <Grid container spacing={2} sx={{py:5}}>
        <Grid item sx={{borderRight:{xs:"none",sm:"none",md:"2px solid #e0e0e0"},pr:{xs:0,sm:0,md:2}}} xs={12} sm={12} md={8}>
            {
                news?.slice(5,10).map(singleNews=><Card key={singleNews._id} onClick={()=>readDetails(singleNews._id)} sx={{ display: 'flex',my:1,p:1,cursor:"pointer" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={singleNews.img}
                        alt="Live from space album cover"
                    />
                    <Box>
                    <CardContent sx={{ flex: '1 0 auto',padding:"5px",width:"100%" }}>
                    <Typography sx={{textAlign:"justify",fontWeight:"bolder"}} component="div" variant="body1">
                            {singleNews?.heading?.slice(0,80)}...
                    </Typography>
                    <Typography sx={{textAlign:"justify"}} color="text.secondary" variant="body1">
                        {singleNews?.details?.slice(0,180)} <span style={{color:"#587DEF"}}>read more</span>...
                        </Typography>
                    </CardContent>
                    </Box>
                </Card>)
            }
            
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
            <Box sx={{pl:{xs:0,sm:0}}}>
                <Typography sx={{py:1}} variant="h2" gutterBottom component="div">
                {/* ?autoplay=1&mute=1  */}
                
                <iframe width="100%" height="250px" src="https://www.youtube.com/embed/WQlISC-N5Xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </Typography> 
               <img style={{paddingRight:"20px",width:"95%",margin:"auto"}}  src={addImg} alt="" />
                <Box > 
                    <Typography sx={{textAlign:"justify",fontSize:"1.2rem"}} variant="body1" gutterBottom>
                    <Typography variant="body1" gutterBottom component="div">
                    Leading food group Nestle India stands to lose advertising inventory of about Rs 10 crore due to Maggi recall despite its move to air commercials of Nescafe or KitKat in all advertisement slots booked for the instant noodles brand, broadcasters and media planners say. "The channels have been told to subtly replace Maggi ads with Nescafe and KitKat commercials," a senior media planner said. "But despite this attempt to recover as much inventory possible, Nestle will have to let go of advertising inventory worth Rs 8-10 crore.
                    </Typography>
                    </Typography>
                </Box> 
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

export default BottomNews;