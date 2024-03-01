import React, { Component } from 'react'

class Country extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        name:"india",
        timeZone: "GMT+5:30"
    }
  }

  changeCountry = () => {
    // console.log("OK");
        this.setState({
            name:"Usa",
            timeZone:"Est-6:00"
        })
  }

render () {
    return (
        <>
            <h1> Country </h1>
            <h3> MY Country is {this.state.name} </h3>
            <h3> My Country TimeZone:{this.state.timeZone}</h3>
            <button onClick={this.changeCountry}>ChangeCountry</button>     
        </>
    );
}

}

export default Country;