import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Header from './../Header/Header';
import Navbar from './../../Sheared/Navbar/Navbar';
import HotNews from './../News/HotNews/HotNews';
import CardNews from '../CardNews/CardNews';
import Video from '../VideoAdds/Video';
import PreviousNews from '../News/Previous/PreviousNews';
import BottomNews from '../News/BottomNews/BottomNews';
import Footer from '../../Sheared/Footer/Footer';


const Home = () => {
    const [news,setNews]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/news")
        .then(res =>res.json())
        .then(data => setNews(data))
    },[])
    
    return (
        <Box>
            <Header></Header>
            <Navbar></Navbar>
            <HotNews hotNews={news}></HotNews>
            <CardNews news={news}></CardNews>
            <Video></Video>
            <PreviousNews allnews={news}></PreviousNews>
            <BottomNews news={news}></BottomNews>
            <Footer></Footer>
        </Box>
    );
};

export default Home;