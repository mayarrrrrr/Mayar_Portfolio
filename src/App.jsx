import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Projects } from './components/Projects'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner'
import { Skills } from './components/Skills'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import SearchFilter from './components/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      
      <Banner />
      <SearchFilter />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* // <Footer /> */}
    </div>
  )
}

export default App
