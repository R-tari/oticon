import React,{useState,useEffect,useRef} from 'react';
import {Store_Date } from './data/data_article'


const CardSlide=()=>{

    const [Slider,setSlider] = useState(0);
    const slideRef=useRef(0);


    function Next()
    {
        if(Slider>=9) 
            return;

        setSlider(Slider+1);
    }

    function Prev()
    {
        if(Slider<=0) 
            return;

        setSlider(Slider-1);
    }

    useEffect(()=>
    {
        const prevRef = slideRef.current.style;
        prevRef.transform  = `translateX(${Slider*-244.22}px)`;
    },[Slider])

    console.log(Slider)

    return(
        <article className="contents store">
            <div className="in-container">
            <h2 className="tit">신규 대리점 소개</h2>
            <div className="btn-box">
                <div className="btn prev" onClick={Prev}>Prev</div>
                <div className="btn next" onClick={Next}>Next</div>
            </div>
            <div className="store-container" ref={slideRef}>
            
            {Store_Date.map(StoreCon=>
            {
                return(
                <div className="store-contents">    
                    <div className="img-box">
                    <a href={StoreCon.href}>
                        <img src={StoreCon.src} alt={StoreCon.alt} />
                    </a>
                    </div>    

                    <div className="info-container">
                    <a href={StoreCon.href} className='info'>
                        <p>
                        <span>{StoreCon.storeTit}</span>
                        </p>
                        <address>
                        {StoreCon.address}
                        </address>
                        <p className="tel">
                        {StoreCon.tel}
                        </p>
                    </a>
                    <a href="#">
                        <div className="btn-more">
                            자세히 보기
                        </div>
                        </a>

                    </div>
                </div>
                )
            }

            )}
            </div>
            </div>
            
            
        </article>
    )
}

export default CardSlide;



