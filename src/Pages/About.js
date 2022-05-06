import React from 'react'
import '../Styles/AboutBoxStyle.css'

function About(){
    return(
        <div style={{height: (window.innerHeight * 0.95)}} className="PageBackground">
            <div className='BoxStyle'>
                <h1>
                    I'm a recent graduate of the University of Pittsburgh at Johnstown
                     with a degree in computer science. During my time at the university
                     I was president of the martial arts club for 4 years and acted in several theatrical productions.
                     As a software engineer I am looking to specialize in full-stack web development and virtual
                      and augmented reality development.
                </h1>
            </div>
        </div>
    );
}

export default About