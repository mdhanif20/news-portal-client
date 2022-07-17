import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DetailsModal from '../ReadDetails/DetailsModal';


const TodayNews = ({news}) => {
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
        <> 
    <Grid container spacing={2} sx={{py:5}}>
        <Grid item xs={12} sm={6}>
            {
                news.slice(0,4).map(singleNews=><Card key={singleNews._id} onClick={()=>readDetails(singleNews._id)} sx={{ display: 'flex',my:1,p:1,cursor:"pointer" }}>
                <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={singleNews.img}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex',px:2 }}>
                        <CardContent sx={{ flex: '1 0 auto',padding:"5px",width:"100%" }}>
                        <Typography sx={{textAlign:"justify",fontWeight:"bolder"}} component="div" variant="body1">
                            {singleNews.heading.slice(0,25)}...
                        </Typography>
                        <Typography sx={{textAlign:"justify"}} color="text.secondary" variant="body1">
                        {singleNews.details.slice(0,70)} <span style={{color:"#587DEF"}}>read more</span>...
                        </Typography>
                </CardContent>
                    </Box>
                    
                </Card>)
            }
        </Grid>
        <Grid item xs={12} sm={6}>
        {
            news.slice(6,10).map(data=><Card key={data._id} onClick={()=>readDetails(data._id)} sx={{ display: 'flex',my:1,p:1,cursor:"pointer" }}>
                <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={data.img}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex',px:2 }}>
                        <CardContent sx={{ flex: '1 0 auto',padding:"5px",width:"100%" }}>
                        <Typography  sx={{textAlign:"justify",fontWeight:"bolder"}}  component="div" variant="body1">
                            {data.heading.slice(0,25)}...
                        </Typography>
                        <Typography sx={{textAlign:"justify"}} color="text.secondary" variant="body1">
                        {data.details.slice(0,70)} <span style={{color:"#587DEF"}}>read more</span>...
                        </Typography>
                       
                        </CardContent>
                    </Box> 
               
            </Card>)
        }
        </Grid>
      </Grid>
      <DetailsModal
        news={details}         
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        ></DetailsModal>
      </>
    );
};

export default TodayNews;