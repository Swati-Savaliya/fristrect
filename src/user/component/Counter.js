import React, { Component } from 'react';

class Counter extends Component {
    render() {
       constructor() {
        super();
        this.state  = {
            count : 0
        }
    };

    incrData = () =>{
        this.setState({count})

    }
    
    decrData = () => {

    }
               
        return (
            <div>
                <button onClick={this.incrData} > + </button>
                <span></span>
                <button onClick={this.decrData}> - </button>
            </div>
        );
    }

    }


export default Counter;