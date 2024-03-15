import React from 'react'
import "./about.css"
const About = () => {
  return (
    <section id='about'> 
    <div>
      
<div className='about-heading'>
  <h1 className='about-heading-text'>full stack Developer</h1>

</div>

<div className='about-contant'>
  <p className='about-contant-text'>Hi there! 
    <span className='name'>I'm Abhishek Dere</span>,
    a passionate and creative software developer based in Pune. 
    With a strong background in  full-stack web development, mobile app development, machine learning , 
    I thrive on turning ideas into reality through code.
</p>
</div>
    </div>
<div className='about-img-div'>
  <img src='./abhishek1.png' alt='' className='about-img'/>
</div>



    </section>
  )
}

export default About