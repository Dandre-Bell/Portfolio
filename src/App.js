import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Error from "./Pages/ErrorPage"
import './Styles/MainStyles.css'


const linkStyle = {
  padding: 20,
  textDecoration: "none",
  color: 'white',
  fontSize: 22,
};

function App() {
  return (
    <Router style={{backgroundColor: "#3E3E3E"}}>
      <div className="NavBar" style={{height: (window.innerHeight * 0.05)}}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/About" style={linkStyle}>About me</Link>
          <Link to="/Resume" style={linkStyle}>Resume</Link>
          <Link to="/Projects" style={linkStyle}>Projects</Link>
          <Link to="/Contact" style={linkStyle}>Contact me</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*/' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
