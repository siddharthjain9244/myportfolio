import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioimg.jpg'
import IMG2 from '../../assets/portfolioimg2.jpg'

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'This is My Portfolio',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16957533-Eraf-Portfolio-Website'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Map For Tourism And other things',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16957533-Eraf-Portfolio-Website'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>
      <div className='container portfolio__container'>
       {
        data.map(({id,image,title,github,demo})=>{
          return( <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
)
        })
       }
     
      </div>


    </section>
  )
}

export default Portfolio