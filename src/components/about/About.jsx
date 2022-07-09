import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {HiCollection} from 'react-icons/hi'
import {FaUniversity} from 'react-icons/fa'
import {FcElectronics} from 'react-icons/fc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'> 
            <HiCollection className='about__icon'/>
              <h5>Course</h5>
              <small> B-tech(2019-2023)</small>
              <small> CGPA:-8.5</small>
            </article>

            <article className='about__card'> 
            <FaUniversity className='about__icon'/>
              <h5>College</h5>
              <small> Jaypee Institute Of Information And Technology</small>
            </article>

            <article className='about__card'> 
            <FcElectronics className='about__icon'/>
              <h5>Branch</h5>
              <small>Electronics and Communication Engineering</small>
            </article>
          </div>
          <p>
          Strong in design and integration with intuitive problem-solving skills. Passionate about implementing and launching new projects. 
          Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer 
          with a reputed firm driven by technology.I am a mature team worker and adaptable to all challenging situations. I am able to work well 
          both in a team environment as well as using own initiative. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About