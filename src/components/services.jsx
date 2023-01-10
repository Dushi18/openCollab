import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.jpg";
// import img4 from "../assets/6.jpg";

export const Services = () => {
    return (
        <div>
            <Carousel infiniteLoop showArrows={false} showStatus={false} showThumbs={false} interval={3000} autoPlay={true}>
                <div>
                    <img src={img1} alt='error' />
                    <p className='legend'>Cosmo Clench</p>
                </div>
                <div>
                    <img src={img2} alt='error' />
                    <p className='legend'>Meshmerise</p>
                </div>
                <div>
                <img src={img3} alt="rerror" />
                <p className='legend'>Line Follower bot</p>
            </div>
                {/* <div>
                <img src={img4} alt="rerror" />
                <p className='legend' marginTop="0px">Our Team</p>
            </div> */}
            </Carousel>
        </div>
    )
}
