import React from 'react'
import './services.css'
import {BiChevronsRight} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What did I achieve</h5>
      <h2>My Accomplishments</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Codechef</h3>
          </div>
          
          <ul className='service__list'>
          <li>
            <BiChevronsRight  size={20} color='#4db5ff' /*size={20} color='#4db5ff'*/ />
            <p>4 Start Rated (Max Rating-1822)</p>
          </li>

          <li>
            <BiChevronsRight size={20} color='#4db5ff'/>
            <p>Participated in 50+ contests</p>
          </li>

          <li>
            <BiChevronsRight size={30} color='#4db5ff'/>
            <p>Achieved Global Rank-26 in April Long challenge 2022</p>
          </li>

          <li>
            <BiChevronsRight size={35} color='#4db5ff' />
            <p>Achieved Global Rank-455 in March Lunchtime challenge 2022</p>
          </li>

          <li>
            <BiChevronsRight size={35} color='#4db5ff'/>
            <p>Achieved Global Rank-96 in February Long challenge 2022</p>
          </li>
          </ul>
        </article>

        <article className='service'>
        <div className='service__head'>
        <h3>CodeForces</h3>
          </div>
          
          <ul className='service__list'>
          <li>
            <BiChevronsRight size={20} color='#4db5ff'/>
            <p>Max rating-1170</p>
          </li>

          <li>
            <BiChevronsRight size={20} color='#4db5ff'/>
            <p>Participated in 50+ contests</p>
          </li>

          <li>
            <BiChevronsRight size={35} color='#4db5ff'/>
            <p>Achieved Global Rank-3866 in Codeforces round 803(Div 2) </p>
          </li>

          <li>
            <BiChevronsRight size={35} color='#4db5ff'/>
            <p>Achieved Global Rank-4909 in Codeforces round 789(Div 2)</p>
          </li>
          </ul>
        </article>

        <article className='service'>
        <div className='service__head'>
        <h3>Others</h3>
          </div>
          
          <ul className='service__list'>
          <li>
            <BiChevronsRight size={28} color='#4db5ff'/>
            <p>Solved 400+ questions on leetcode (Max rating-1625)</p>
          </li>

          <li>
            <BiChevronsRight size={22} color='#4db5ff'/>
            <p>Participated in 30+ contests on leetcode</p>
          </li>

          <li>
            <BiChevronsRight size={35} color='#4db5ff'/>
            <p>Secured 1990 rank in Google CodeJam 2022 (Qualification round)</p>
          </li>

          <li>
            <BiChevronsRight size={25} color='#4db5ff'/>
            <p>Secured 231 rank in  Quora Coding Contest 2021</p>
          </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services