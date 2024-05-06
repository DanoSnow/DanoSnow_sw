import Home from './components/Home'
import About from './components/About'
import Phrase from './components/Phrase'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Services from './components/Services'
import Skills from './components/Skills'
import { LanguageData } from './context/Language'

function App() {
  return(
    <>
      <LanguageData>
        <Home />
        <About />
        <Phrase />
        <Services />
        <Skills />
        <Resume />
        <Contact />
      </LanguageData>
    </>
  )
}

export default App
