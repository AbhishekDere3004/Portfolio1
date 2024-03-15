import React from 'react';
import "./skills.css";
const Skills = () => {
  return (
    <section id='skill'> 
    <div className='skills' >

      <h1 className='skills-heading'>
        Skills
      </h1>
      <div className='skills-contant'>
        <div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png' alt='' />
            <p className='skills-title'>HTML</p>
          </div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png' alt='' />
            <p className='skills-title'>CSS</p>
          </div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://media.licdn.com/dms/image/D4D12AQG1X-reG_TmAA/article-cover_image-shrink_423_752/0/1694890806184?e=1715817600&v=beta&t=vYfRJ9Ts7iWTm4T4VD-LrzCR8HWRc4k-t-uC7t7opqY' alt='' />
            <p className='skills-title' >javascript</p>
          </div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='' />
            <p className='skills-title'>REACT.JS</p>
          </div>
        </div>
        <div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*Yhe1R94CIotr2se7Wf6TQQ.png' alt='' />
            <p className='skills-title'>NODE.JS</p>
          </div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png' alt='' />
            <p className='skills-title'>MONGODB</p>
          </div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://www.iteachrecruiters.com/img/blog/logo/react-native.png' alt='' />
            <p className='skills-title'>React Native</p>
          </div>
          <div className='skills-img-div'>
            <img className='skills-img' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png' alt='' />
            <p className='skills-title'>JAVA</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills