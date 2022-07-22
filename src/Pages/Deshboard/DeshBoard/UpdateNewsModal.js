import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const UpdateNewsModal = ({openUpdateNewsModal,closeUpdateModal,id,news,type}) => { 

    const [updatedomain,setUpdatedomain] = useState({});
    useEffect(()=>{
        const domainData = {
            type:`${type}`,
            img:`${news?.img}`,
            time:`${news?.time}`,
            heading:`${news?.heading}`,
            details:`${news?.details}`,
            
          }
          setUpdatedomain(domainData)
    },[news])


    const OnBlurhandle = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...updatedomain};
      newInfo[field] = value
      setUpdatedomain(newInfo);
  }

    const updatenewsData = id =>{
            const url = `https://gentle-dawn-20200.herokuapp.com/news/${id}`;
            fetch(url,{
                method:"PUT",
                headers:{
                    'content-type':"application/json"
                },
                body: JSON.stringify(updatedomain)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount>0){
                    alert("News Updated Successfully")
                    // setUser({}) 
                }
            })
    }
    return (
        <Modal
        open={openUpdateNewsModal} 
        onClose={closeUpdateModal}
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
             width:{xs:"70%",sm:"50%",md:"40%"}, 
             px: 3,
             py: 2,
             borderRadius:"10px"
          }}>
            <Typography sx={{color:"#26C9C4",mb:2}} id="modal-modal-title" variant="h6" component="h2">
            Update Your {type} News
            </Typography>
            <Scrollbars style={{ width:"100%", height:"70vh" }}>
              <form>
                    <Typography variant="subtitle1" display="block" gutterBottom>
                    Image Url
                    </Typography>
                    <TextareaAutosize
                    style={{ width: "97%",border:"1px solid black",borderRadius:"5px",padding:"5px",fontWeight:"bolder" }}
                    onBlur={OnBlurhandle}
                    name="img"
                    id="outlined-size-small"
                    defaultValue={news?.img} 
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
                    defaultValue={news?.heading} 
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
                    defaultValue={news?.time} 
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
                    defaultValue={news?.details} 
                    minRows={3}
                    />
                   
                 
                <Button onClick={()=> updatenewsData(news._id)}
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
                    } variant="contained">Update {type} News</Button>
              </form>
              </Scrollbars>
          </Box>
      </Modal>
    );
};

export default UpdateNewsModal;