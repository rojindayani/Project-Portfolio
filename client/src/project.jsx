import React from 'react';
import '/src/App.css';

export default function Project() {
    return (
        <>
        <div className="project-body">
            <div className="project-card">
                <h1>My Projects</h1>
                <div className="project-header">
                    <h2 className="project-title">1. Divar multi-accounting detection:</h2>
                    <img className='project-Pic' src='./public/project1.png' alt='Rozhin Dayyani' />
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
                    <h2 className="project-title">2. Store: Online shopping website </h2>
                    <img className='project-Pic' src='./public/onlineshop.jpg' alt='Rozhin Dayyani' />
                </div>
                <p className ="project-details"></p>
                <p className="project-roles">My roles:
                <ul>
                    <li>Writing APIs as a member of the backend team</li>
                    <li>Guiding the frontend team through the APIs</li>
                    <li>Fixing the bugs reported by the frontend team</li>
                </ul>
                </p>
            </div>
            <div className="project-card">
                <div className="project-header">
                    <h2 className="project-title">3. Pet-Vet: Veterinary clinic online services website</h2>
                    <img className='project-Pic' src='./public/vet.jpg' alt='Rozhin Dayyani' />
                </div>
                <p className ="project-details"></p>
                <p className="project-roles">My roles:
                <ul>
                    <li>Analysing, designing and developing a microservice named “Comment”</li>
                    <li>Writing APIs and fixing bugs on other microservices than “Comment”</li>
                </ul>
                </p>
            </div>
        </div>
        
        </>
    );
}
    