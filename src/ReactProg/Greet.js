import React from 'react';

const Greet = props => {
    console.log(props)
    return (
        <div>
           <h3>hello  {props.name} is a {props.designation}</h3>
        </div>
    )
}

export default Greet