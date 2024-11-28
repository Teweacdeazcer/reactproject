import React, {useState} from "react";
import TemperatureInput2 from "./TemperatureInput2";
import BoilingVerdict from "./BoilingVerdict";

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius){
    return celsius * 9 / 5 + 32;
}

function tryConVert(temperature, convert){
    // input이 받는 것은 문자열이기 때문에 숫자로 파싱을 해야함
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}

function Calculator3(props){
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConVert(temperature, toCelsius) : temperature
    const fahrenheit = scale === "c" ? tryConVert(temperature, toFahrenheit) : temperature

    return(
        <div>
            <TemperatureInput2 scale="c"
                               temperauture={celsius}
                               onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput2 scale="f"
                               temperauture={fahrenheit}
                               onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    )
}

export default Calculator3;