import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TodayNews from '../TodayNews/TodayNews';
import addImg from "../../../../images/add1.jpg";

const HotNews = ({hotNews}) => {
    const reverse= [...hotNews].reverse();
    const news = reverse[0];
    const [learn,setLearn] = useState(false);

    const readDetails = (condition,id)=>{
        if(id===news?._id){
            setLearn(condition)
        }
        else{
            setLearn(false)
        }
    }

    return (
        <Box sx={{px:{xs:1,sm:2},py:6}}>
            <Grid container spacing={2}>
                <Grid  item sm={12} md={8}>
                    <img style={{paddingRight:"20px",width:"70%"}} align="left" src={news?.img} alt="" />
                    <Box align="right"> 
                    <Typography sx={{textAlign:"justify",fontSize:"2rem",display:{xs:"none",sm:"block"}}} variant="h5" gutterBottom component="div">
                      {news?.heading}
                    </Typography>
                    <Typography sx={{textAlign:"justify",fontSize:"1.5rem",display:{xs:"block",sm:"none"}}} variant="h5" gutterBottom component="div">
                      {news?.heading}
                    </Typography>
                    
                    <Typography sx={{textAlign:"justify",fontWeight:"bolder",py:1}} variant="caption" display="block" gutterBottom>
                        {news?.time}
                    </Typography>
                    
                    <Typography sx={{textAlign:"justify",fontSize:"1.2rem",display:{xs:"none",sm:"block"}}} variant="body1" gutterBottom>
                    
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


                    <Typography sx={{textAlign:"justify",fontSize:"1.2rem",display:{xs:"block",sm:"none"}}} variant="body1" gutterBottom>
                    
                    {
                    learn? <>
                        {
                            news?.details 
                        }
                        <Button onClick={()=>readDetails(false,news?._id)}>Minimize</Button>
                        </>:<>
                        {
                            news?.details.slice(0,150)
                        }...
                        <Button onClick={()=>readDetails(true,news?._id)}>Read more</Button>
                        </>
                    } 
                      
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        
                    </Typography>
                    </Box>
                    <Box>
                        <TodayNews news={reverse}></TodayNews>
                    </Box>
                </Grid> 
                <Grid   item sm={12} md={4}>
                <Box sx={{pl:{xs:0,sm:4}}}>
                <Typography sx={{py:5}} variant="h2" gutterBottom component="div">
                
                 <iframe width="100%" height="250px" src="https://www.youtube.com/embed/nqye02H_H6I?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="100%" height="250px" src="https://www.youtube.com/embed/WQlISC-N5Xw?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </Typography> 
               <img style={{paddingRight:"20px",width:"95%",margin:"auto"}}  src={addImg} alt="" />
                    <Box > 
                    <Typography sx={{textAlign:"justify",fontSize:"1.2rem"}} variant="body1" gutterBottom>
                    <Typography variant="body1" gutterBottom component="div">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui esse aliquam magni cum recusandae doloremque in, nam accusantium, rem cumque quasi aut. Vel quidem rerum at nesciunt laudantium enim numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui esse aliquam magni cum recusandae doloremque in, nam accusantium, rem cumque quasi aut. Vel quidem rerum at nesciunt laudantium enim numquam.
                    </Typography>
                    </Typography>
                    </Box> 
                    </Box> 
                </Grid> 
            </Grid>  
        </Box>
    );
};

export default HotNews;