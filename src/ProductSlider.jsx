import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react"
import { FreeMode } from "swiper"
import 'swiper/css'
import "swiper/css/free-mode"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/Card"


const ProductSlider = () => {
    return (
        <div className='container py-4 px-4 justify-content-center bg-black'>
            <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              className="mySwiper"
              slidesPerView={5}
              spaceBetween={30}
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default ProductSlider;