import React from 'react'
import {Link} from 'react-router-dom'

function About() {
    return (
      <div>
        <h2>About</h2>
        <p>This is a simple paragraph about the application.</p>
      <p>This page is navigate to the Home page & HEAD-TAIL pages</p>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/HeadTail'>Head & Tail</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default About