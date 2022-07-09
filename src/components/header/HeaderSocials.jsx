import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/siddharth-jain-92b8b4193/' target="_blank"><BsLinkedin/></a>
        <a href='https://leetcode.com/code9244/' target="_blank"><SiLeetcode/></a>
        <a href='https://codeforces.com/profile/code9244' target="_blank"><SiCodeforces/></a>
        <a href='https://www.codechef.com/users/code9244' target="_blank"><SiCodechef/></a>

    </div>
  )
}

export default HeaderSocials