import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Components/Projects'
import Team from './Pages/Team'
import Contact from './Pages/contact'
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'
import Project4 from './Components/Project4'
import Project5 from './Components/Project5'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='projects/project1' element={<Project1 />} />
        <Route path='projects/project2' element={<Project2 />} />
        <Route path='projects/project3' element={<Project3 />} />
        <Route path='projects/project4' element={<Project4 />} />
        <Route path='projects/project5' element={<Project5 />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App