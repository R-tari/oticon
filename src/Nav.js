import React,{useState,useEffect,useRef} from 'react';
import {Dum_Date,SubNav1,SubNav2,SubNav3,SubNav4,SubNav5 } from './data/data_nav'

function Nav() {
  const [subNav,setSubNav]= useState(false);
  const subNavref=useRef();

  const NavOn=()=> {
    setSubNav(!subNav);
    console.log(subNav, 'Nav.js')
  }

  return (
    <div class="nav">
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
                          <li  ref={subNavref} style={{transtion:'0.3s'}} onClick={NavOn}>
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
          <div className="subNav" style={{height:subNav? '364px':'0',transition:'0.3s'} }>
            <div className="sub-outcontainer"style={{visibility:subNav? 'visible':'hidden',pointerEvents:subNav? 'auto':'none' }}>
              <div className="sub-incontainer" >
                <ul className={subNav? 'ul_active':null}>
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

                <ul className={subNav? 'ul_active':null}>
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

                <ul className={subNav? 'ul_active':null}>
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

                <ul className={subNav? 'ul_active':null}>
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

                <ul className={subNav? 'ul_active':null}>
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