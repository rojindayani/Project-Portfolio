// import '/src/App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from './About/Rozhin Dayyani.jpg';
import '/src/App.css';

export default function About() {
    return (
        <>
        <body>
            <div className="aboutMe">
                <p>
                A computer engineer, equipped with 14 months of hands-on experience as a java backend developer,
                several months of hands-on experience as a machine- learning researcher and a current game programming student.
                </p>

                <img className='rozhin' src={profilePic} alt='Rozhin Dayyani' />

                <Link
                    to="route"
                    onClick={(event) => { event.preventDefault(); window.open("src/Resume/RozhinDayyaniResume.pdf"); }}>
                        Resume
                </Link>
            </div>
        </body>
        </>
    );
}    