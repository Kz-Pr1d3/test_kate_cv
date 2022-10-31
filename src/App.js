import './App.css';
import Avatar from './components/Avatar.js'
import Hero from './components/Hero.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Contacts from './components/Contacts.js'
import WorkExperience from './components/WorkExperience.js'
import Education from './components/Education.js'
import About from './components/About.js'


function App() {
  return (
    <>
    <header className='header'>
      <Avatar />
      <Hero />
    </header>
    <nav className="sidenav">
      <Skills />
      <Projects />
      <Contacts />
      
    </nav>
    <main className="main-info">
      <WorkExperience />
      <Education />
      <About />
    </main>
    
    </>
  );
}

export default App;
