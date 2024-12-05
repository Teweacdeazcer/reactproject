import React from "react";
import './AirApp.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";

function AirApp(){
    return(
        <div className="App">
            <Header/>
            <Hero/>
            <CardContainer/>
        </div>
    )
}

export default AirApp;