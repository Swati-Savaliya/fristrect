import React, { useState } from 'react';

function Statefun(props) {
    // hook useState
    // Compulsory Const Levu
    const [CountryName, setCountryName] = useState ('india')
    const [CountryTime, setCountryTime] = useState ('5:30 GMT')

    const ChangeCountry = () => {
        setCountryName('USA')
        setCountryTime('5:00')
    }
    return (
        <div>
            <h1> State Country Change </h1>
            <h2> Country Name is: {CountryName}</h2>
            <h2> Country Time is: {CountryTime}</h2>
            <button onClick={ChangeCountry}>Change Country</button>
        </div>
    );
}

export default Statefun;