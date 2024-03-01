// state Function 

import React, { useState } from 'react'

function CountryFun() {
    const [data,setIncreData]=useState(0)
    const [decrData,setDecrData] = useState (5)

    const updateData = ()=>  {
        setIncreData(data+1 >= 5)
    }

    const addData = () => {
        setIncreData(data + decrData)
        setDecrData(0)

    }

    //console.log("OK");

    return (
        <div className='CountryFun'>
            <h1> Update Data{data}</h1>
            <button onClick={updateData}> incr data </button>
            <button onClick={addData}> decr data </button>
        </div>
    )
}

export default CountryFun;

