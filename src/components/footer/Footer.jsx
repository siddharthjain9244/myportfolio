import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Siddharth Jain</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Achievements</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/sid_.jain/"><AiOutlineInstagram/></a>
        <a href="https://www.facebook.com/profile.php?id=100036863449592"><BsFacebook/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Made by Siddharth Jain</small>
      </div>
    </footer>
  )
}

export default Footer