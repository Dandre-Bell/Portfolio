import React, { useEffect, useState } from 'react'
import { GetProjects } from '../Controllers/PageApiController';
import {ThreeDots} from 'react-loader-spinner';

 function Projects(){
    const [isLoading, setIsLoading] = useState(true);
    const [projectsList, setProjectsList] = useState([]);
    
    const loadList = (list) => {
        setProjectsList(list);
        handleLoading();
    }

    const handleLoading = () => {
        setIsLoading(false);
    }

    useEffect(() => {GetProjects().then(value => {loadList(value)})}, []);

    return isLoading ? (
        <div style={{height: (window.innerHeight * 0.95)}} className="PageBackground">
            <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
    ): (
        <div style={{height: (window.innerHeight * 0.95)}} className="PageBackground">
            <h1>{projectsList[0].name}</h1>
        </div>   
    );
}

export default Projects