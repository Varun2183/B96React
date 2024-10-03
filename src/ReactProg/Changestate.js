import React,{Component} from 'react';
class Changestate extends Component {
    constructor(){
        super();
        this.state = {message:"welcome"
        }
        //console.log("message")
    }
    change(){
        this.setState({
            message:"Thank You"
        }
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.change}><h1>Click Here</h1></button>
            </div>
        )
    }
}

export default Changestate