import React,{useState,useEffect,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide_Btn } from './data/data_slide';
import { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';



const Slide = () => {

  const [slideIdx,setSlideIdx] =useState(null);
  const [thumbs, setThumbs] = useState(null);
  const btn=useRef();

  useEffect(()=>
  {
    let top=document.querySelector('.swiper-slide-active')
    console.log(top)
  })

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
                  multipleActiveThumbs:false
                }}
        onTouchEnd={(swiper,event)=>
          {
            console.log(swiper.activeIndex)
          }}
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
           nested={true}
           slideActiveClass={'swiper-slide-thumb-active'}

           onTouchEnd={(swiper,event)=>
          {
            console.log(swiper.clickedIndex)
            swiper.thumbs.init()
          }}

           onActiveIndexChange={(swiper)=>
          {
            let center1=document.querySelector('.slide-btn')
            // let center=swiper.el.getElementsByClassName('swiper-slide-next').item

            console.log(thumbs)
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