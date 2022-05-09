
import React from 'react';
import './App.css';



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
                  <li>
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
                  </li>
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
                      <li>
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
                      </li>
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
            </div>
          </div>
          <button className="btn1">1</button>
          <button className="btn2">2</button>
          <button className="btn3">3</button>
        </div>
      
        <div className="contents store">
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
          
        </div>

      



    </section>
  )
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



