import React from 'react'
import "./project.css"
const Projects = () => {
  return (
    <section id='projects'> 
    <h1 className='project-heading'> Projects</h1>
    <div className='project' >
  
        <div className='project-div'>
       <div className='project-content-div' >
      <img className='project-img' src='https://res.cloudinary.com/practicaldev/image/fetch/s--wrqP_WRW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/rsglka8v5m1zgldy6uzm.png' alt=''/>
      <p className='project-p'>React Facebook Clone: A project that replicates the core features of Facebook's user interface using React.js. This project demonstrates proficiency in building a complex, dynamic application with features like user authentication, news feed, messaging, and notifications.</p>
    </div>
    <div className='project-content-div' >
      <img className='project-img' src='https://img-c.udemycdn.com/course/750x422/5103912_ce44_3.jpg' alt=''/>
      <p className='project-p'>React Native: While not strictly a single project, React Native has revolutionized mobile app development by allowing developers to build cross-platform apps using React.js. Building a sophisticated mobile app using React Native showcases expertise in both React.js and mobile development.</p>
    </div>
      </div>
      <div className='project-div1'>
    <div className='project-content-div' >
      <img className='project-img' src='https://i.ytimg.com/vi/Tgat3-prVv4/maxresdefault.jpg' alt=''/>
      <p className='project-p'>Netflix Clone: Creating a clone of Netflix's user interface using React.js demonstrates the ability to build a visually appealing and responsive application with features like video streaming, search functionality, and user profiles.</p>
    </div>
    <div className='project-content-div' >
      <img className='project-img' src='https://s3u.tmimgcdn.com/u9369588/5a7b92eeda476e1819565dd71840adf2.jpg' alt=''/>
      <p className='project-p'>E-commerce Website: Building a fully functional e-commerce website using React.js, incorporating features like product listings, shopping cart functionality, user authentication, and payment processing, showcases expertise in building complex web applications.</p>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Projects