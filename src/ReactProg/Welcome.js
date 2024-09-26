import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        return <h1>welcome {this.props.name} to {this.props.branch}</h1>
    }
}

export default Welcome