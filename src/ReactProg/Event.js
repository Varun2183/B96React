import React from 'react';

const Event=()=>{

    function greet(){
        console.log("Hello");
    }
    return(
        <div>
            <button onClick={greet}><h3>click me </h3></button>
        </div>
    )
}

export default Event