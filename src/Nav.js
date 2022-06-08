import React,{useState,useEffect,useRef} from 'react';

function NavOn() {
  const [subNav,setSubNav]= useState(false);
  const subNavref=useRef();

  

const navOnHandler = () =>{
  setSubNav(!subNav);
  console.log(subNav);
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
                          <li  ref={subNavref} style={{transtion:'0.3s'}} onClick={navOnHandler}>
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
          <div className="subNav">
            <div className="sub-outcontainer">
              <div className="sub-incontainer">
                <ul>
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

                <ul>
                {SubNav2.map(sub2=>
                  {
                    return(
                    <li>
                      <a href={sub2.href}>
                        {sub2.subnav}
                      </a>
                    </li>
                    )
                  })}
                </ul>

                <ul>
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

                <ul>
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

                <ul>
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

export default NavOn;
