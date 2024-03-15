
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
