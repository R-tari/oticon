import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const swiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      style={{height:'423px'}}
      speed={500}
      
    >
      <SwiperSlide>
      <div className="img-box">
        <img src="/images/slide1.jpg" alt="슬라이드1" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="img-box">
        <img src="/images/slide2.jpg" alt="슬라이드2" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div classNae="img-box">
        <img src="/images/slide3.jpg" alt="슬라이드3" />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="img-box">
        <img src="/images/slide4.jpg" alt="슬라이드4" />
      </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default swiper;