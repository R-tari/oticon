import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide_Btn } from './data/data_slide';
import { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';


const Slide = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div className="slider-outcontainer">
      <Swiper
        modules={[Thumbs]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        style={{height:'423px'}}
        speed={500}
        thumbs={{swiper:thumbsSwiper}}
      
       
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

      <Swiper id="thumbs"
          modules={[Thumbs]}
           loop={true}
           slidesPerView={3}
           watchSlidesProgress
           onSwiper={setThumbsSwiper}
           >
                <div className="btn-slide">
                    <div className="btn-slider">
                        {Slide_Btn.map(SlideBtn=>
                        {
                            return(
                                <SwiperSlide>
                                    <div className="slide-btn" id={SlideBtn.id}>
                                        <p>{SlideBtn.txt}</p>
                                    </div>
                                    </SwiperSlide>
                                    )
                                
                        })}
                    </div>
                </div>
            
            </Swiper> 
    </div>
  );
};

export default Slide;