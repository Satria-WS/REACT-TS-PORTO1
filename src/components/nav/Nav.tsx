
import React from 'react'

import "./nav.css";
import {AiOutlineHome , AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {useState , FC} from 'react';


const Nav : React.FunctionComponent = ()  => {
  const [activeNav , setActiveNav] = useState('#')



  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav