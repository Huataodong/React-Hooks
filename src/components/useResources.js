import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resourceName) => {  //costum hook

    const [resources, setResources] = useState([]);

    const fetchResources = async (resourceName) => { //take one param
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
        setResources(response.data)
    }

    useEffect(() => {   // has two params
        fetchResources(resourceName) //call fetchResources
    }, [resourceName])  //checks whether the useEffect or API call needs to be actually called

    return resources;
}

export default useResources;