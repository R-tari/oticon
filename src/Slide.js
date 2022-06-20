import React,{useState,useEffect,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide_Btn } from './data/data_slide';
import { Thumbs,Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';




const Slide = () => {
  const [controlled,setControlled] =useState(null);

  const [thumbs, setThumbs] = useState(null);
  const btn=useRef();


  const [top,setTop]=useState(null);



  return (
    <div className="slider-outcontainer">
      <Swiper
        modules={[Thumbs]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        style={{height:'423px'}}
        speed={500}
        thumbs={{
                  swiper:thumbs,
                  autoScrollOffset:1,
                }}
        onUpdate={(swiper)=>
          {
            swiper.slideTo(3,500)
            console.log('제발')
            setTop(swiper);
          }
        }
       
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
           onSwiper={setThumbs}
           slideActiveClass={'swiper-slide-thumb-active'}
           shortSwipes={false}

           onActiveIndexChange={(swiper)=>
          {
            setControlled(swiper.realIndex);


          }}

           onTouchEnd={(swiper,e)=>
          {
            
            console.log(controlled)
            console.log(swiper.realIndex)
            swiper.update();

            top.slideToLoop(controlled,500)
          }}

           >
                <div className="btn-slide">
                    <div className="btn-slider">
                        {Slide_Btn.map(SlideBtn=>
                        {
                         
                            return(
                                <SwiperSlide>
                                    <div className="slide-btn" id={SlideBtn.id} ref={btn}>
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