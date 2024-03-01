import React from 'react';

function Propsdemo(props) {
    // console.log(props);
    return (
        <div style={{ backgroundColor:"orange", margin: 50 }}> 
            <p> Name :{props.name}</p>
            <h4> Email : {props.email}</h4>
        </div>
    );
}

export default Propsdemo;
