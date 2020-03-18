import React, { useContext } from 'react';
import "./MyButton.css"
import { CalculationContext } from "./CalculationProvider";

function MyButton(props) {
    const { buttonPressed } = useContext(CalculationContext);
    return (
        <button onClick={() => {
            buttonPressed(props.buttonValue);
        }} className={props.buttonColor} > {props.buttonValue}</button >
    );
}

export default MyButton;