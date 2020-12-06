import React from 'react'
// import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
// import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
function App() {
  return (
       <Router>
         <Navbar/>
       </Router>
  );
}

export default App;
