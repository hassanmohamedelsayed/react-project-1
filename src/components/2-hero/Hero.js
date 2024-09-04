import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
          <div className='left-section'>
            <div className="parent-avatar flex">
              <img src="photo_2024-06-05_02-02-53-modified.png" className='avatar' alt="" />
              <div className='icon-verified_user'></div>

            </div>

        <h1 className='title'>Software designer founder and amateur astronaut</h1>
        <p className='subtitle'>I’m Spencer, a software designer and entrepreneur based in 
        New York City. I’m the founder and CEO of Planetaria,
        where we develop technologies that empower regular people to explore space on their own terms.</p>


<div className='all-icons flex'>
  <div className="icon icon-instagram"></div>
<div className="icon icon-github"></div>
<div className="icon icon-social-twitter"></div>
<div className="icon icon-social-linkedin">

</div>
</div>



          </div>


          <div className='right-section'>
          <img src="slider-img.png" alt=""/>





          </div>


    </section>
  )
}
