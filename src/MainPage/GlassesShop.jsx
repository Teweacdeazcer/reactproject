import React from "react";
import './GlassesShop.css'
import Header from "./Header";
import BoxGroup from "./BoxGroup";


function GlassesShop(){
    return(
        <>
            <Header/>
            <div className="background-container"></div>
            <div className="App">
                <BoxGroup />
            </div>
        </>
    )
}

export default GlassesShop;