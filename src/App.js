import './App.css';
import Avatar from './components/Avatar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Contacts from './components/Contacts.js'
import WorkExperience from './components/WorkExperience.js'
import Education from './components/Education.js'
import Projects from './components/Projects.js'


function App() {
  return (
    <>
    <header className='header'>
      <Avatar />
      <Hero />
    </header>
    <nav className="sidenav">
      <Skills />
      <About />
      <Contacts />
      
    </nav>
    <main className="main-info">
      <WorkExperience />
      <Education />
      <Projects />
    </main>
    
    </>
  );
}

export default App;
