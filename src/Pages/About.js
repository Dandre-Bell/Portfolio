import {React, useEffect, useState} from 'react'
import { GetBio } from '../Controllers/PageApiController'
import '../Styles/AboutBoxStyle.css'

function About(){
    const [text, setText] = useState('')
    useEffect(() => {GetBio().then(value => {setText(value)})}, []);

    return(
        <div style={{height: (window.innerHeight * 0.95)}} className="PageBackground">
            <div className='BoxStyle'>
                <h1>
                    {text}
                </h1>
            </div>
        </div>
    );
}

export default About