import React from 'react';
import profilePic from './Projects/project1.png';
import '/src/App.css';

export default function Project() {
    return (
        <>
        <div className="project-body">
            <div className="project-card">
                <h1>Disconnect Shod !!! Omadi Bego Dobare</h1>
                <div className="project-header">
                    <h2 className="project-title">1. Divar multi-accounting detection:</h2>
                    <img className='project-Pic' src={profilePic} alt='Rozhin Dayyani' />
                </div>
                <p className ="project-details">Divar is a website for selling secondhand goods and advertising.
                This project aims to detect multi-accounting and bonus abusers</p>
                <p className="project-roles">My roles:
                <ul>
                    <li>Conducting research into different fraud detection algorithms and approaches</li>
                    <li>Training machine learning models on behavioral biometrics datasets</li>
                </ul>
                </p>
            </div>
            <div className="project-card">
                <div className="project-header">
                    <h2 className="project-title">1. Machine Learning Intern (Part-time)</h2>
                    <img className='project-Pic' src={profilePic} alt='Rozhin Dayyani' />
                </div>
                <p className ="project-details">Divar is a website for selling secondhand goods and advertising.
                This project aims to detect multi-accounting and bonus abusers</p>
                <p className="project-roles">My roles:
                <ul>
                    <li>Conducting research into different fraud detection algorithms and approaches</li>
                    <li>Training machine learning models on behavioral biometrics datasets</li>
                </ul>
                </p>
            </div>
        </div>
        
        </>
    );
}
    