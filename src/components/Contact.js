import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section id='contact'> 
    <div className='contact'>
     
      <div className='contact-heading'>
      <h3 className='contact-h3'>Feel free To Contact Me anytimes</h3>
      <h1 className='contact-h1'>Get in Touch</h1>
      <p className='contact-p'></p>
      </div>
      <form>
       <div className='contact-div' >
        <div >
        <input className='contact-input' type='text' placeholder='Name'/>
        <input className='contact-input0' type='email' placeholder='Email'/>
        </div>
        <input className='contact-input1' type='text' placeholder='Subject'/>
        <div>
        <textarea className='contact-input2' type='text' placeholder='Massage'/>
       </div>
       </div>
       <button className='contact-button'>Send Massage</button>
       </form>
    </div>
    </section>
  )
}

export default Contact