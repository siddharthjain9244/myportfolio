import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkFill} from 'react-icons/bs'
import {GiAchievement} from 'react-icons/gi'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BsBookmarkFill/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services'?'active':''} ><GiAchievement/> </a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><MdContacts/> </a>
    </nav>
  )
}

export default Nav