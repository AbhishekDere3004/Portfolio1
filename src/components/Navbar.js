import React from 'react'
import "./nevbar.css"
const Navbar = () => {
  return (
   <header className='nevbar'>
    <div className='heading'>
      <h1 className='heading-text'>Abhishek Dere</h1>
    </div>
    <div className='contant'>
        <a href='#about' className='contant-text'>About</a>
        <a href='#skill' className='contant-text'>Skills</a>
        <a href='#projects' className='contant-text'>Projects</a>
        <a href='#contact' className='contant-text'>Contact</a>
    </div>
    <div className='img-div'>
      <img src='./abhishek.jpg' alt='' className='img'/>
    </div>
   </header>
  )
}

export default Navbar