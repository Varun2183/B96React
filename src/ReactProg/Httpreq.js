import React,{useState,useEffect} from "react";
import axios from 'axios'

function Httpreq(){

    const[posts,setposts]=useState([])
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            setposts(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    },[]);
    return (
        <div>
            <button onClick></button>
            <ol>
                {
                    posts.map((post=><li key={post.id}> {post.userId} {post.body}{post.title} </li>))
                }
            </ol>
        </div>
    )
}

export default Httpreq;