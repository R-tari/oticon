
import React from 'react';
import './App.css';

export const DUMMY_SRC = [
  {
    id: 'd1',
    href: '#',
    src: '/images/icon_sns1.png',
    alt: 'facebook'
  },  
  {
    id: 'd1',
    href: '#',
    src: '/images/icon_sns2.png',
    alt: 'oticonkorea'
  },  
  {
    id: 'd1',
    href: '#',
    src: '/images/icon_sns3.png',
    alt: 'blog'
  }
]

export const Dum_Date =
[
  {
    id: 1,
    href:'#',
    nav: '보청기제품'   
  },

  {
    id: 1,
    href:'#',
    nav: '대리점'   
  },

  {
    id: 1,
    href:'#',
    nav: '미디어센터'   
  },

  {
    id: 1,
    href:'#',
    nav: '고객센터'   
  },

  {
    id: 1,
    href:'#',
    nav: '회사소개'   
  },
]

export const Store_Date=
[
  {
    id:'sotre1',
    href:'#',
    src:'/images/경주.jpg',
    alt:'경주점',
    storeTit:'오티콘보청기 경주점',
    address:'경북 경주시 안강읍 안강시장길(양월리)',
    tel:'054-761-2555',
  },

  {
    id:'sotre2',
    href:'#',
    src:'/images/세종.jpg',
    alt:'세종점',
    storeTit:'오티콘보청기 세종점',
    address:'세종특별자치시 나성북1로 12 (나성동, 메가타워2) 405호',
    tel:'044-998-1239',
  },

  {
    id:'sotre3',
    href:'#',
    src:'/images/노원.jpg',
    alt:'노원점',
    storeTit:'오티콘보청기 노원점',
    address:'서울 노원구 한글비석로20길 43 (중계동) 2층',
    tel:'02)-930-1234',
  },

  {
    id:'sotre4',
    href:'#',
    src:'/images/조치원.jpg',
    alt:'조치원점',
    storeTit:'오티콘보청기 조치원점',
    address:'세종특별자치시 조치원읍 새내로 92-1 (정리)',
    tel:'044-998-1233',
  },

  {
    id:'sotre5',
    href:'#',
    src:'/images/용산.jpg',
    alt:'용산점',
    storeTit:'오티콘보청기 용산점',
    address:'서울 용산구 한강대로 109 (한강로2가, 용성비즈텔) B209호',
    tel:'02-795-0900',
  },

  {
    id:'sotre6',
    href:'#',
    src:'/images/울산.jpg',
    alt:'울산점',
    storeTit:'오티콘보청기 울산점',
    address:'울산 남구 삼산로 150 (달동)',
    tel:'052-235-5757',
  },

  {
    id:'sotre7',
    href:'#',
    src:'/images/강화난천센터.jpg',
    alt:'강화난청센터점',
    storeTit:'오티콘보청기 강화난청센터',
    address:'인천 강화군 강화읍 강화대로 404 (관청리)',
    tel:'032-933-2279',
  },

  {
    id:'sotre8',
    href:'#',
    src:'/images/김해부원.jpg',
    alt:'김해부원점',
    storeTit:'오티콘보청기 김해부원점',
    address:'경남 김해시 김해대로 2349 (부원동, 부원역그린코아더센텀) 107동 232, 233호(부원동)',
    tel:'055-311-8782',
  },

  {
    id:'sotre9',
    href:'#',
    src:'/images/양평.jpg',
    alt:'양평점',
    storeTit:'오티콘보청기 양평점',
    address:'경기 양평군 양평읍 시민로 37 (양근리)',
    tel:'031-771-1123',
  },

  {
    id:'sotre10',
    href:'#',
    src:'/images/도봉.jpg',
    alt:'도봉점',
    storeTit:'오티콘보청기 도봉점',
    address:'서울 도봉구 마들로 650 (방학동, 도봉월드상가) 제 2층 제 217호',
    tel:'02-6952-8228',
  },
  
]

export const Search_Store=
[
  {
    id:'1',
    tit:'오티콘 대리점 매장찾기',
    src:'/images/map.png',
    txt:'전국 오티콘 코리아 매장을<br>쉽게 찾으실 수 있습니다.',
  }
]






function Header()
{
  return(
    <header class="header">
     
          <div class="out-container">
            <div className="in-container">
            <div className="utill">
              <ul>
                  <li><a href="#">LOGIN</a></li>
                  <li><a href="#">JOIN</a></li>
              </ul>
            </div>

              <div className="sns">
                <ul>
                  {/* <li>
                      <a href="#">
                          <img src="/images/icon_sns1.png" alt="facebook"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="/images/icon_sns2.png" alt="oticonkorea"/>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="/images/icon_sns3.png" alt="blog"/>
                      </a>
                  </li> */}
                  {DUMMY_SRC.map(
                    (
                      list=>
                        <list className='test' key={list.id}><a href={list.href}>
                        <img src={list.src} alt='t'/>
                        </a></list>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
      
      <div class="nav">
          <div class="container">
              <h1 class="logo">
                 <a href="#">
                    <img src="/images/logo.png" alt="logo"/>
                  </a>
              </h1>
              <nav class="nav">
                  <ul>
                      {/* <li>
                          <a href="#">보청기제품</a>
                      </li>
                      <li>
                          <a href="#">대리점</a>
                      </li>
                      <li>
                          <a href="#">미디어센터</a>
                      </li>
                      <li>
                          <a href="#">고객센터</a>
                      </li>
                      <li>
                          <a href="#">회사소개</a>
                      </li> */}
                      {Dum_Date.map(nav=>
                      {
                        return(
                          <li>
                            <a href={nav.href}>
                            {nav.nav}
                            </a>
                          </li>
                        )
                      })
                    }
                    
                  </ul>
              </nav>
          </div>
      </div>
    </header>
  );
}

function Section()
{
  return(
    <section className="full-container">
      
        <div className="full-contents">
          <div className="slider">
            <div className="img-box">
              <img src="/images/slide1.jpg" alt="슬라이드1" />
            </div>
            <div className="img-box">
              <img src="/images/slide2.jpg" alt="슬라이드1" />
            </div>
            <div className="img-box">
              <img src="/images/slide3.jpg" alt="슬라이드1" />
            </div>
            <div className="img-box">
              <img src="/images/slide4.jpg" alt="슬라이드1" />
            </div>np
          </div>
          <button className="btn1">1</button>
          <button className="btn2">2</button>
          <button className="btn3">3</button>
        </div>
      
        <article className="contents store">
          <div className="in-container">
            <h2 className="tit">신규 대리점 소개</h2>
            <div className="btn-box">
              <div className="btn next">next</div>
              <div className="btn prev">prev</div>
            </div>
            <div className="store-container">
           {/* <div className="store-contents">

               <div className="img-box">
                <a href="#">
                <img src="/images/경주.jpg" alt="경주점"/>
                </a>
              </div>
              
                <div className='info-container'>
                <a href="#" className='info'>
                  <p><strong>오티콘보청기 경주점</strong></p>
                  <address>
                    경북 경주시 안강읍 안강시장길 15(양월리)
                  </address>
                  <p className="tel">
                    054-761-2555
                  </p>
                </a>
                  <a href="#">
                    <div className="btn-more">
                      자세히 보기
                    </div>
                  </a>
                </div> 
           
              
            </div> */}
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
                        <strong>{StoreCon.storeTit}</strong>
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
        {Search_Store.map(SearchCon=>
          {
            return(
              <article className="contents search">
               
                  <h2 className="tit">{SearchCon.tit}</h2>
                      <a href="#" className='info'>
                        <p>전국 오티콘 코리아 매장을<br/>쉽게 찾으실 수 있습니다.</p>
                      </a>
                      <a href="#">
                        <div className="btn-more">
                          자세히 보기
                        </div>
                      </a>
                
              </article>
            )
          })}
        

      



    </section>
  )
}
   
function card()
{
  <article className="contents store">
    <div className="in-container">
      <h2 className="tit">신규 대리점 소개</h2>
      <div className="btn-box">
        <div className="btn next">next</div>
        <div className="btn prev">prev</div>
      </div>
      <div className="store-contents">
        <div className="img-box">
          <a href="#">
          <img src="/images/경주.jpg" alt="경주점"/>
          </a>
        </div>
        
          <div className='info-container'>
          <a href="#" className='info'>
            <p><strong>오티콘보청기 경주점</strong></p>
            <address>
              경북 경주시 안강읍 안강시장길 15(양월리)
            </address>
            <p className="tel">
              054-761-2555
            </p>
          </a>
            <a href="#">
              <div className="btn-more">
                자세히 보기
              </div>
            </a>
          </div>
        
        
      </div>
    </div>
          
  </article>
}


function App()
{

  
  return(
    <div className="wrap">
      <Header/>
      <Section/>
    </div>
  )
}
export default App;



