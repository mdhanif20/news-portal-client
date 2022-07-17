import React from 'react';
import Box from '@mui/material/Box';

const Video = () => {
    return (
        <Box sx={{py:15,px:{xs:2,sm:4},height:{xs:"400px",sm:"550px"}}}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nqye02H_H6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
    );
};

export default Video;