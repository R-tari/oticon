import React,{useState,useEffect,useRef} from 'react';
import {Dum_Date,SubNav1,SubNav2,SubNav3,SubNav4,SubNav5 } from './data/data_nav'

function Nav() {
  const [subNav,setSubNav]= useState(false);
  
  const subNavref=useRef();

  let mainNav=document.getElementsByClassName('main-nav');
  let subUl=document.getElementsByClassName('ul_active')

  const NavOn=()=> {
    setSubNav(true);
    console.log(subNav, 'Nav.js')
  }

  const NavOff=()=> {
    setSubNav(false);
    console.log(subNav, 'Nav.js')
  }
  const NavOut=()=>
  {
    let i=0;
    for(i=0;i<=mainNav.length;i++)
    {
      mainNav[i].style="color:#black"
    }
  }
  const NavHover=()=>
  {
   subUl[0].addEventListener('mouseover',()=>
    {
      mainNav[0].style="color:#c60081"
      console.log(mainNav[0])
    })

    subUl[1].addEventListener('mouseover',()=>
    {
     
      mainNav[1].style="color:#c60081"
      console.log(mainNav[1])
    })

    subUl[2].addEventListener('mouseover',()=>
    {
     
      mainNav[2].style="color:#c60081"
      console.log(mainNav[2])
    })

    subUl[3].addEventListener('mouseover',()=>
    {
     
      mainNav[3].style="color:#c60081"
      console.log(mainNav[3])
    })

    subUl[4].addEventListener('mouseover',()=>
    {
      
      mainNav[4].style="color:#c60081"
      console.log(mainNav[4])
    })

    
  
  }

  return (
    <div class="nav" onMouseLeave={NavOff}>
          <div class="container">
              <h1 class="logo">
                 <a href="#">
                    <img src="/images/logo.png" alt="logo"/>
                  </a>
              </h1>
              <nav class="navigation">
                  <ul>
                      {Dum_Date.map(nav=> {
                        return(
                          <li   style={{transtion:'0.3s'}} >
                            <a ref={subNavref} href={nav.href} onMouseEnter={NavOn} className="main-nav">
                            {nav.nav}
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
              </nav>
          </div>
          <div className="subNav" style={{height:subNav? '364px':'0',transition:'0.3s'} }>
            <div className="sub-outcontainer"style={{visibility:subNav? 'visible':'hidden',pointerEvents:subNav? 'auto':'none' }}>
              <div className="sub-incontainer" >
                <ul className={subNav? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}> 
                {SubNav1.map(sub1=>
                  {
                    return(
                    <li>
                      <a href={sub1.href}>
                        {sub1.subnav}
                      </a>
                    </li>
                    )
                  })}
                </ul>

                <ul className={subNav? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}>
                {SubNav2.map(sub2=>
                  {
                    return(
                    <li >
                      <a href={sub2.href}>
                        {sub2.subnav}
                      </a>
                    </li>
                    )
                  })}
                </ul>

                <ul className={subNav? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}>
                {SubNav3.map(sub3=>
                  {
                    return(
                    <li>
                      <a href={sub3.href}>
                        {sub3.subnav}
                      </a>
                    </li>
                    )
                  })}
                </ul>

                <ul className={subNav? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}>
                {SubNav4.map(sub4=>
                  {
                    return(
                    <li>
                      <a href={sub4.href}>
                        {sub4.subnav}
                      </a>
                    </li>
                    )
                  })}
                </ul>

                <ul className={subNav? 'ul_active':null} onMouseEnter={NavHover} onMouseLeave={NavOut}>
                {SubNav5.map(sub5=>
                  {
                    return(
                    <li>
                      <a href={sub5.href}>
                        {sub5.subnav}
                      </a>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Nav;