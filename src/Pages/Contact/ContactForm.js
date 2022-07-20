import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const useStyle = makeStyles({
    input:{
        width: "90%",
        fontSize: "18px",
        padding: "12px 4px",
        borderRadius: "7px",
        border: "2px solid #fff",
        marginTop:"15px"
    },
    textArea:{
        width: "90%",
        height: "90px",
        padding: "12px 4px",
        borderRadius: "7px",
        border: "2px solid #fff",
        margin:" 15px 0px",
        fontSize: "18px",
        fontFamily: 'Roboto'
    },
    submitButton:{
        fontSize: "23px",
        padding: "7px 20px 7px 10px",
        border: "0",
        borderRadius: "25px",
        backgroundColor: "black",
        color: "#fff",
        cursor:"pointer",
        fontWeight:" 500",
    },
    button:{
        backgroundColor: "black",
        fontSize:"1.3rem",
        "&:hover":{
            backgroundColor: "black",
        }
    }
})
const ContactForm = () => {
    const classes = useStyle();
    const form = useRef();
    const sendEmail = e =>{
        e.preventDefault()
        emailjs.sendForm('service_64fo5li', 'template_97mzt4i', e.target, 'sEIjvaT255FOB530n')
        .then((res) => {
            alert("Email Send Successfully.")
            form.current.reset(); 
        }).catch(err => console.log(err));
    }
    return (
        <Box> 
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email" className={classes.input} placeholder="Enter your email" /> <br />
                    <input type="text" name="user_name" className={classes.input} placeholder='Subject' /> <br />
                    <textarea name="message" className={classes.textArea} id="" placeholder='Your Message'></textarea> <br />
                    <Button sx={{backgroundColor: "black","&:hover":{backgroundColor: "black"}}}  className={classes.button} variant="contained">
                    <SendIcon sx={{pl:1}}/>
                    <input className={classes.submitButton} type="submit" value="Send"/>
                    </Button>
                </form>
        </Box>
    );
};

export default ContactForm;