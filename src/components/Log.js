import React, { useContext } from 'react';
import "./Log.css"
import LogItem from './LogItem';
import { CalculationContext } from './CalculationProvider';

function Log() {
    const { calcHistory, logVisible, showLog } = useContext(CalculationContext);
    const LogList = calcHistory.map((calc1) =>
        <LogItem key={calc1.toString()}
            calculationHistory={calc1}

        />
    );

    return (
        <>
            <div className="logContainer">Calculation Log <button onClick={() => { showLog() }} className="dropdown">{!logVisible ? "show" : "hide"}</button></div>
            <div className={logVisible === true ? "Visible" : "notVisible"}>
                <ul>
                    {LogList}
                </ul></div>
        </>
    );
}

export default Log;