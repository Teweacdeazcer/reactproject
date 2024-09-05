import React from "react";
import './Clock.css';

function Clock(props){
    return(
        <div className={'clock'}>
            <h1>Clock Test</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;