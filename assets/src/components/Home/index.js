import React from 'react';
import Cards from '../../routes/components/dataDisplay/Cards/index';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{fontWeight:'bolder'}}>Welcome To Zonions App</h1>
                    <h3>You Wish, We Serve</h3>
                </div>

                <div style={{ display: 'inline-block', marginLeft:'2%'}}>
                    <Cards />
                </div>
            </div>

        );
    }
}
export default Home;