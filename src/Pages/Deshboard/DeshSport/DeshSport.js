import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Scrollbars } from 'react-custom-scrollbars';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import UpdateNewsModal from './../DeshBoard/UpdateNewsModal';
import AddNewsModal from './../DeshBoard/AddNewsModal';
import Typography from '@mui/material/Typography';

const Deshnews = () => {
    const [allNews,setAllNews] = useState([]);
    const [update,setUpdate]= useState({});
    const [openBooking, setOpenBooking] = useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const handleUpdateOpen = () => setOpenUpdate(true);
    const handleUpdateClose = () => setOpenUpdate(false);
    console.log(openUpdate)
    const updateModalOpen = e =>{
        setUpdate(e)
        handleUpdateOpen()
        
    }
    let value = 0;
    const serialNumber = (n)=>{
        value = value+1;
    }

    //load theme
    useEffect(()=>{
        fetch("https://news-portal-server.onrender.com/news/sport")
        .then(res=> res.json())
        .then(data => setAllNews(data))
    },[openBooking,openUpdate])


    // for delete 
  const deletenewsa = id =>{
        const proceed = window.confirm("Are you sure, you want to delete?")
        if(proceed){
            const url = `https://news-portal-server.onrender.com/news/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert("Delete Successfully")
                    const remainingUser = allNews.filter(theme=> theme._id !== id) 
                    setAllNews(remainingUser) 
                }
            }) 
        }
    } 

    return (
        <> 
        <Box sx={{px:{xs:2,sm:3,md:5}}}>
            
            <Box sx={{opacity:"0",mb:{xs:-12,sm:-10,md:-3}}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque repudiandae totam error,unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.repudiandae totam error, unde possimus, commodi officia, dolorum accusamus vitae quia dicta. Minus totam nobis ratione.
            </Box> 
            <Box sx={{display:"flex",justifyContent: "space-between"}}>
            <Typography sx={{fontWeight:"bolder"}} variant="h5" gutterBottom component="div">
                Edit Sport News
            </Typography>
            <p style={{marginTop:'0px',textAlign:"end"}}>
            <Button 
            onClick={handleBookingOpen}
                style={
                    {
                        background:"red",
                        fontSize: "15px",
                        fontWeight:"600",
                        padding: "8px 10px",
                        width:"auto",
                        borderRadius: "30px",
                        boxShadow: 0,
                        color:"#fff",
                        margin:"0px 0px 15px 0px"
                        }
                    }
                variant="contained"> <AddIcon/> Add Sport News</Button>
            </p>
            </Box>

           <Card> 
                <Scrollbars style={{ width:"100%", height:"70vh" }}>
                <TableContainer style={{overflowX:"visible"}} component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="simple table">
                        <TableHead style={{position:"sticky",top:0,background:"red"}}>
                            <TableRow sx={{}}>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>No</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Image</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Heading</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Details</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Time</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Update</TableCell>
                                <TableCell sx={{padding:"10px",color:"#fff",fontSize:"18px",fontWeight:"500"}}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
 
                       {
                            allNews.map(news=> <TableRow
                                style={{color:"red"}}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={news._id}
                                >
                                    {
                                        news._id && serialNumber()
                                    }
                                <TableCell sx={{padding:"10px",fontSize:"18px"}} align="left">{value}</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">
                                <img style={{width:"50px",height:"50px"}} src={news?.img} alt="" />
                                </TableCell>
                                <TableCell sx={{padding:"10px",fontWeight:"bolder"}} align="left">{news?.heading?.slice(0,20)}...</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">{news?.time}</TableCell>
                                <TableCell sx={{padding:"10px"}} align="left">{news?.details?.slice(0,40)}...</TableCell>
                                
                                 <TableCell onClick={()=>updateModalOpen(news)} sx={{padding:"10px",cursor:"pointer",color:'#357EDD'}} align="left">Update</TableCell> 
                                 <TableCell onClick={()=>deletenewsa(news._id)} sx={{padding:"10px",cursor:"pointer",color:'#ff7373'}} align="left">Delete</TableCell> 
                                <Box>
                                    <UpdateNewsModal
                                        openUpdateNewsModal={openUpdate}
                                        closeUpdateModal={handleUpdateClose}
                                        news={update} 
                                        type="sport"
                                        >
                                    </UpdateNewsModal>   
                                </Box>
                                </TableRow>  )
                        }  
                         
                        </TableBody>
                    </Table>
                </TableContainer>
                </Scrollbars>
            </Card> 
            <AddNewsModal
            type="sport"
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            >
            </AddNewsModal> 
            
        </Box>
        
        </>
    );
};

export default Deshnews;