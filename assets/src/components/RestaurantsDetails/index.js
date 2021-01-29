import React, {Component }from 'react';
import Customize from '../../routes/components/dataDisplay/Cards/Customize'

const RestaurantDetails = (props) => {
    console.log('props in restaurant details', props)
    return(
        <>
            {/* <h1>{props.location.data.id}</h1>
            <h1>{props.location.data.name}</h1>
            <h1>{props.location.data.location}</h1>
            <h1>{props.location.data.imgUrl}</h1> */}
            <Customize resto={props.location.data}/>
        </>

    )
}

export default RestaurantDetails;
