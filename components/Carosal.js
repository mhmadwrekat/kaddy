import React from 'react';
// import Swiper core and required modules
import { EffectCards, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
const Carosal = () => {
    SwiperCore.use([Autoplay]);
  return (
<>
                <Swiper
                    // install Swiper modules
                    modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y]}
                    effect='cards'
                    fadeEffect={{
                        crossFade: true
                    }}
                    loop={true}
                    autoplay={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    scrollbar={{
                        draggable: true,
                        dragSize: 'auto',
                        hide: true
                    }}
                >
                    <SwiperSlide>
                        <img src="./assest/carosal1.jpg"
                            className="block w-full shadow-2xl" 
                      onClick={() => { window.open('./assest/carosal1.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal3.jpg"
                            className="block w-full shadow-2xl" 
                      onClick={() => { window.open('./assest/carosal3.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/carosal2.jpg"
                            className="block w-full shadow-2xl" 
                      onClick={() => { window.open('./assest/carosal2.jpg', '_self') }}
                      />
                    </SwiperSlide>
                </Swiper>
</>  
)
}
export default Carosal