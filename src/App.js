import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Error from "./Pages/ErrorPage"
import './Styles/MainStyles.css'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const linkStyle = {
  padding: 20,
  textDecoration: "none",
  color: 'white',
  fontSize: 22,
};

const iconStyle = {
  color: 'white',
  fontSize: 38,
  marginLeft: 10,
  marginRight:10
};

function App() {
  return (
    <Router style={{backgroundColor: "#3E3E3E"}}>
      <div className="NavBar" style={{height: (window.innerHeight * 0.05)}}>
        <div className='PageList'>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/About" style={linkStyle}>About me</Link>
          <Link to="/Resume" style={linkStyle}>Resume</Link>
          <Link to="/Projects" style={linkStyle}>Projects</Link>
          <Link to="/Contact" style={linkStyle}>Contact me</Link>
        </div>
        <div className='IconList'>
          <IconButton onClick={() => window.open("https://github.com/Dandre-Bell?tab=repositories")}><GitHubIcon style={iconStyle}/></IconButton>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/dandre-bell-56204219a/")}><LinkedInIcon style={iconStyle}/></IconButton>
        </div>
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
