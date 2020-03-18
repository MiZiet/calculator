import React from 'react';
import ButtonBoard from './ButtonBoard.js';
import "./Calculator.css"
import Display from "./Display";
import Log from "./Log.js";
import CalculationProvider from './CalculationProvider.js';


function Calculator() {


    return (

        <CalculationProvider>
            <Display />
            <ButtonBoard />
            <Log />
        </CalculationProvider>


    );
}

export default Calculator;