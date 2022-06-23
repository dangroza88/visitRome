import React from "react";
import Counter from "../counter/Counter";
import './Tweet.css'

function Tweet({name, message}){

    return(
        <div className="tweet blur">
            <h3>{name}</h3>
            <p>{message}</p>
            <Counter/>
        </div>
    )
}

export default Tweet;