import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";
import k from "../../public/assets/kep.jpg"

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperContainer = ({img}) => {

  const k = img.map(kutya)

  function kutya(x){
    return x[0].img
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {img.map(data =>(
          <img src={data[0]} alt=""/>
         ))}
        </SwiperSlide>
      </Swiper>
    </>
   
  );
}

export default SwiperContainer
