import React from 'react'
import "./testimonials.css"
const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h1>Testimonials</h1>
      <div className='testimonials-div'>
       
      <div className='testimonials-container'>
        {/* <div className='testimonials-text'> */}
          <p>I had the pleasure of working with Abhishek on revamping my portfolio website, and I couldn't be happier with the outcome. His technical expertise combined with his creative flair resulted in a visually stunning and highly functional website. Abhishek's dedication to meeting deadlines and accommodating my requests made the entire process smooth and stress-free. I'm grateful for his professionalism and wouldn't hesitate to work with him again."<span className='testimonials-span'>- David Rodriguez, UI/UX Designer</span></p>
       
      </div>
      <div className='testimonials-container'>
        {/* <div className='testimonials-text'> */}
          <p >Abhishek is a true professional in every sense. His ability to translate complex ideas into elegant, user-friendly websites is remarkable. He took the time to understand my objectives and delivered a portfolio platform that exceeded my expectations. His commitment to quality and timeliness is unmatched. I'm incredibly satisfied with the results and would recommend Abhishek to anyone seeking top-notch web development services."<span className='testimonials-span'> - Emily Chen, Marketing Consultant</span></p>
        </div>
     
      </div>
    
    </div>
  )
}

export default Testimonials