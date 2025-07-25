import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About.jsx'
import { Experience } from './components/Experience/Experience.jsx'
import { Project } from './components/Projects/Project.jsx'
import { Contact } from './components/Contact/Contact.jsx'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
