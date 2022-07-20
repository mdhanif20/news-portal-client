import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height: "70vh",
  bgcolor: 'background.paper',
  boxShadow: 24,
  overflow:"scroll",
  p: 4,
  borderRadius:"10px"
};

const DetailsModal = ({openBooking, news, handleBookingClose,booking,date}) => {

   
   
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img style={{paddingRight:"20px",width:"60%"}} align="left" src={news?.img} alt="" />
                    <Box align="right"> 
                    <Typography sx={{textAlign:"justify",fontSize:"1.2rem"}} variant="body1" gutterBottom>
                    <Typography variant="h5" gutterBottom component="div">
                      {news?.heading}
                    </Typography>
                    <Typography sx={{textAlign:"justify",fontWeight:"bolder",padding:"2px 0px",color:"#cecece"}} variant="caption" display="block" gutterBottom>
                      {news?.time}
                    </Typography>
                    {news?.details}   
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        
                    </Typography>
                    </Box>
                    
        </Box>
      </Modal>
    );
};

export default  DetailsModal;