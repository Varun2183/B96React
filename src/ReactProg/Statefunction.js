import React, { useState, useEffect } from "react"

function StateFunction (){

    const [count, setCount] = useState(1);
    useEffect(()=>{
        document.title=`you clicked ${count} times`;
        console.log(count)
    },[count]);
    return(
        <div>
            <p>you clicked {count} times</p>
            <button on click={() =>setCount(count+1)}>
                <h1>click me</h1>
            </button>
        </div>
    )
}

export default StateFunction;