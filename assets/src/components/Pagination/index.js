import React, { useState, useEffect } from 'react'
import axios from 'axios';
  

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [limit, setLimit] = useState(3);
    const [skip, setSkip] = useState(0);

    const fetchRestaurants = async (limit, skip) => {
        // Make sure you send 'limit' and 'skip' as query parameters to your node.js server
        const data = await axios.get(`http://localhost:1337/restaurants?limit=${limit}&skip=${skip}`);
        setRestaurants({
            restaurants: data.data.response
        })
    }    
    const nextPage = () => {
        setSkip(skip + limit)
    }

    const previousPage = () => {
        setSkip(skip - limit)
    }

    useEffect(() => {
        fetchRestaurants(limit, skip)
    }, [skip, limit])


    return (
        <div> 
            <div onClick={nextPage}> Previous Page </div>
            <div onClick={previousPage}> Next Page </div> 
        </div>
    )
}

export default RestaurantList;
