import React, { useEffect } from 'react';
import { Carousel, Image } from 'antd';
import { Box } from '@mui/material';
import {
  illustration1,
  illustration2,
  illustration3,
  illustration4,
  illustration5,
  errorIMG,
} from "../images/LocalImageExport";

const ImageScroll2 = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            // Scroll to the next image
            // This can be achieved by updating the state or using the Ant Design Carousel API
            // For simplicity, we'll simulate the state update
            console.log('Scrolling to the next image');
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Box style={{ width: '100vw', overflow: 'hidden', position: 'relative', marginTop:"50px" }}>
            <Carousel
                autoplay
                dotPosition="bottom"
                style={{ paddingBottom: '30px'  }}
            >
                <Box>
                    <Image src={illustration1} alt="Image 1" preview={false} fallback={errorIMG} />
                </Box>
                <Box>
                    <Image src={illustration2} alt="Image 2" preview={false} fallback={errorIMG} />
                </Box>
                <Box>
                    <Image src={illustration3} alt="Image 3" preview={false} fallback={errorIMG} />
                </Box>
                <Box>
                    <Image src={illustration4} alt="Image 3" preview={false} fallback={errorIMG} />
                </Box>
                <Box>
                    <Image src={illustration5} alt="Image 3" preview={false} fallback={errorIMG} />
                </Box>
                {/* Add more Image components as needed */}
            </Carousel>
        </Box>
    );
};

export default ImageScroll2;
