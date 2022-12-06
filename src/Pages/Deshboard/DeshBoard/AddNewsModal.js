import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const AddNewsModal = ({openBooking,handleBookingClose,type}) => { 
   
    const domainData = {
      type:`${type}`,
      img:"",
      time:"",
      heading:"",
      details:""
    }
    const [domain,setDomain] = useState(domainData);
    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...domain};
      newInfo[field] = value
      setDomain(newInfo);
  }
  
   
    const addNews = e =>{
        fetch("https://news-portal-server.onrender.com/news",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(domain)
      })
      .then(res => res.json())
      .then(data=>{
        if(data.insertedId){
            alert("Add domain Successfully")
          setInterval(() => {
          }, 18000);
        }
      }) 
    }
    return (
        <Modal
        open={openBooking} 
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             bgcolor: 'background.paper',
             boxShadow: 24,
             width:{xs:"70%",sm:"60%",md:"50%"},
             px: 3,
             py: 2,
             borderRadius:"10px"
          }}>
            <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
            Add {type} news
            </Typography>
              
            <form>
                    <Typography variant="subtitle1" display="block" gutterBottom>
                    Image Url
                    </Typography>
                    <TextareaAutosize
                    style={{ width: "97%",border:"1px solid black",borderRadius:"5px",padding:"5px",fontWeight:"bolder" }}
                    onBlur={OnBlurhandle}
                    name="img"
                    id="outlined-size-small"
                    defaultValue="Image Url" 
                    minRows={1}
                    />
                    <Typography variant="subtitle1" display="block" gutterBottom>
                    Heading
                    </Typography>
                    <TextareaAutosize
                    style={{ width: "97%",border:"1px solid black",borderRadius:"5px",padding:"5px",fontWeight:"bolder" }}
                    onBlur={OnBlurhandle}
                    name="heading"
                    id="outlined-size-small"
                    defaultValue="News Heading" 
                    minRows={3}
                    />
                    <Typography variant="subtitle1" display="block" gutterBottom>
                    Time
                    </Typography>
                    <TextareaAutosize
                    style={{ width: "97%",border:"1px solid black",borderRadius:"5px",padding:"5px",fontWeight:"bolder" }}
                    onBlur={OnBlurhandle}
                    name="time"
                    id="outlined-size-small"
                    defaultValue="Time" 
                    minRows={1}
                    />
                    <Typography variant="subtitle1" display="block" gutterBottom>
                    Details
                    </Typography>
                    <TextareaAutosize
                    style={{ width: "97%",border:"1px solid black",borderRadius:"5px",padding:"5px",fontWeight:"bolder" }}
                    onBlur={OnBlurhandle}
                    name="details"
                    id="outlined-size-small"
                    defaultValue="News Details Info"
                    minRows={3}
                    />
                   
                 
                <Button onClick={()=> addNews()}
                style={
                    {
                        background:"#8F40FB",
                        fontSize: "15px",
                        fontWeight:"600",
                        padding: "8px 20px",
                        width:"auto",
                        borderRadius: "30px",
                        boxShadow: 0,
                        color:"#fff",
                        margin:"10px 0px"
                        }
                    } variant="contained">Add {type} News</Button>
              </form>
          </Box>
      </Modal>
    );
};

export default AddNewsModal;