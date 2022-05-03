import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Resume from "./Pages/Resume"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Error from "./Pages/ErrorPage"

function App() {
  return (
    <Router>
      <nav>
        
      </nav>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/About' element={About}/>
        <Route path='/Resume' element={Resume}/>
        <Route path='/Projects' element={Projects}/>
        <Route path='/Contact' element={Contact}/>
        <Route path='*/' element={Error}/>
      </Routes>
    </Router>
  );
}

export default App;
