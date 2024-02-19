import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import app from './02counter'


function App() {
 

  return (
    <>
    <div>
      <h1>React Projects</h1>
      <ul>
        <li>
          <link to="/02counter">Project Counter</link>
        </li>
      </ul>
      <route path="/02counter" component={projectcounter} />
    </div>
  
    </>
  );
}

export default App
