import React,{useState,useEffect,useRef} from 'react';

function NavOn()
{
  const [subNav,setSubNav]= useState(false);
  const subNavref=useRef();

  setSubNav(subNav.toggle);
}

export default NavOn;
