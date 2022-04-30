import React from 'react';
// import Swiper core and required modules
import { EffectCards, thumbsSwiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
         
<section className='px-0 lg:px-20'>
                <Swiper
                    // install Swiper modules
                    modules={[ EffectCards, Navigation, Pagination, Scrollbar, A11y]}
                    effect='cards'
                    loop={true}
                    autoplay={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    scrollbar={{
                        draggable: true,
                        dragSize: 'auto',
                        hide: true
                    }}
                    thumbs={{
                        swiper: thumbsSwiper
                      }}
                >

                    <SwiperSlide>
                        <img src="./assest/Carosal2.jpg"
                            className="block w-full shadow-2xl" 
                      onClick={() => { window.open('./assest/kaddy10.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/Carosal3.jpg"
                            className="block w-full shadow-2xl" 
                      onClick={() => { window.open('./assest/kaddy9.jpg', '_self') }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./assest/Carosal4.jpg"
                            className="block w-full shadow-2xl" 
                      onClick={() => { window.open('./assest/kaddy9.jpg', '_self') }}
                      />
                    </SwiperSlide>
                </Swiper>
                </section>
</>  
)
}
export default Carosal