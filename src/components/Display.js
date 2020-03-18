import React, { useContext } from 'react';
import "./Display.css";
import { CalculationContext } from './CalculationProvider';

function Display() {
    const { displayFormula, displayResult } = useContext(CalculationContext);
    return (
        <div className="container">
            <div className="calculations">{!!displayFormula ? (displayFormula.length > 27 ? "..." + displayFormula.slice(displayFormula.length - 28, displayFormula.length - 1) : displayFormula) : 0}</div>
            <div className="result">{!!displayResult ? (displayResult.length > 7 ? "..." + displayResult.slice(displayResult.length - 8, displayResult.length - 1) : displayResult) : 0}</div>
        </div>
    );
}

export default Display;