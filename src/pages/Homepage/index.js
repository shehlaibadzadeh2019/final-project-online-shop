import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./index.sass";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carousell = () => {
    return (
    <Carousel 
    autoPlay
    infiniteLoop
    interval={3000}
    stopOnHover={false}
    useKeyboardArrows
    showStatus={false}
    >
        <div  className='carousel-promotional-offer'>
            <img src="https://usa.tommy.com/resource/image/25924/landscape_ratio16x9/2048/1152/e1c34c437d06e1f79e1609b406d69ce3/DE/cl-wpsp20-msw-del1-look-24-0032-fulltile.jpg" alt="" />
            <div  className='promotional-offer'>
                <div className="promotional-offer-text-center">
                    <h1 className="promotional-offer-text mb-5 pb-4">SALE</h1>
                    <h1 className="promotional-offer-text mb-lg-5 mb-md-5 mb-3">UP TO 10% OFF</h1>
                    <h2 className="promotional-offer-subtitle ">mango </h2>
                </div>
            </div>
        </div>
        <div className='carousel-promotional-offer'>
            <img src="https://usa.tommy.com/resource/image/25394/landscape_ratio16x9/2048/1152/e3fda9b2899206ee3a87ffe6fc62c780/px/20190413-psp20-kids-look-09-girls-0080-1-fulltile.jpg" alt=""/>

            <div  className='promotional-offer'>
                <div className="promotional-offer-text-center">
                    <h1 className="promotional-offer-text mb-5 pb-4">SALE</h1>
                    <h1 className="promotional-offer-text mb-lg-5 mb-md-5 mb-3">UP TO 20% OFF</h1>
                    <h2 className="promotional-offer-subtitle ">Bershka </h2>
                </div>
            </div>
        </div>
        <div className='carousel-promotional-offer'>
        <img src="https://usa.tommy.com/resource/image/25918/landscape_ratio16x9/2048/1152/ad43bf3e1beb97a02f322a2c766abb7b/lJ/wips20-wsw-kl-del2-04-front-main-02-0009-fulltile.jpg" alt=""/>
            <div  className='promotional-offer'>
                <div className="promotional-offer-text-center">
                    <h1 className="promotional-offer-text mb-5 pb-4">SALE</h1>
                    <h1 className="promotional-offer-text mb-lg-5 mb-md-5 mb-3">UP TO 10% OFF</h1>
                    <h2 className="promotional-offer-subtitle ">Nike</h2>
                </div>
            </div>
        </div>
    </Carousel>
    )
}