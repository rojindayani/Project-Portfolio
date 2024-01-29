import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Rozhin Dayyani.png';
import '/src/App.css';

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
        <header>
            <img className='rozhinLogo' src={logo} alt='Rozhin Dayyani' />
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/education">Education</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
              </nav>
        </header>
         <br/>
    </>
    
  );
}
