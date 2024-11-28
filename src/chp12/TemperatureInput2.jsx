import React from "react";

const scaleNames = {
    c: '섭씨',
    f: '화씨'
};

function TemperatureInput2(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return(
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input type="text" value={props.temperauture} onChange={handleChange}/>
        </fieldset>
    )
}

export default TemperatureInput2;