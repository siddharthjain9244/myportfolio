import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2> My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Development</h3>
          <div className='experience__content'  >
          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>HTML</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>javaScript</h4>
           <small className='text-light'>Proficient</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>React</h4>
           <small className='text-light'>Proficient</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Nodejs</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
          </div>
        </div>
      
      <div className='experience__backend'>
      <h3>Programming</h3>
          <div className='experience__content'>
          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>C++(14)</h4>
           <small className='text-light'>Proficient</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Java</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>C</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
          </div>
      </div>
      <div className='experience__frontend'>
          <h3>Computer Fundamentals</h3>
          <div className='experience__content'>
          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>DBMS</h4>
           <small className='text-light'>Proficient</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Operating System</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>

          <article className='experience__details'>
           <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Computer Networks</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience