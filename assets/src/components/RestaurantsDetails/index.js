import React, { Component } from 'react';
import Customize from '../../routes/components/dataDisplay/Cards/Customize'


const RestaurantDetails = (props) => {
    console.log('props in restaurant details', props)
    return (
        <Customize resto={props.location.data} />
    )
}

export default RestaurantDetails;
