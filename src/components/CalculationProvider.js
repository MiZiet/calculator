import React, { useState } from 'react';
export const CalculationContext = React.createContext();



const CalculationProvider = props => {
    const [calculationFormula, setCalculationFormula] = useState([]);
    const [pressedButton, setPressedButton] = useState("");
    const [displayResult, setDisplayResult] = useState("");
    const [displayFormula, setDisplayFormula] = useState("");
    const [calcHistory, setCalcHistory] = useState([]);
    const [logVisible, setLogVisible] = useState(false);


    const buttonPressed = (buttonValue) => {
        let supportVariable;
        let prevValue = calculationFormula[calculationFormula.length - 1];
        switch (true) {
            case buttonValue === "C":
                supportVariable = [];
                break;
            case buttonValue === "<=":
                supportVariable = calculationFormula;
                supportVariable.pop();
                break;
            case parseInt(buttonValue) == buttonValue: //checking if its a number
                if (parseInt(prevValue) == prevValue) {
                    supportVariable = calculationFormula;
                    supportVariable[supportVariable.length - 1] = supportVariable[calculationFormula.length - 1] + buttonValue;
                } else if (prevValue === ")") {
                    return;
                } else {
                    supportVariable = [...calculationFormula, buttonValue];
                }

                break;
            case buttonValue === "(":
                if (prevValue === ")" || parseInt(prevValue) == prevValue) {
                    return;
                } else {
                    supportVariable = [...calculationFormula, buttonValue];
                }
                break;
            case buttonValue === ")":
                if (parseInt(prevValue) == prevValue || prevValue === ")") {
                    supportVariable = [...calculationFormula, buttonValue];
                } else {
                    return;
                }
                break;
            case buttonValue === "=":
                supportVariable = calculationFormula;
                setCalculationFormula(supportVariable);
                Execute();
                return;
            default:
                if (parseInt(prevValue) == prevValue || prevValue === ")") {
                    supportVariable = [...calculationFormula, buttonValue];
                } else {
                    return;
                }
        }
        setCalculationFormula(supportVariable);
        Disp(supportVariable, supportVariable);
    };

    const Execute = () => {
        //Zmiana na ONP
        let stack = [], result = [];
        console.log(calculationFormula);
        for (let i = 0; i < calculationFormula.length; i++) {
            if (parseInt(calculationFormula[i]) == calculationFormula[i]) {
                result = [...result, calculationFormula[i]];
            } else if (calculationFormula[i] === "(") {
                stack = [...stack, calculationFormula[i]];
            } else if (calculationFormula[i] === ")") {
                let openBracket
                for (let i = 0; i < stack.length; i++) {
                    if (stack[i] === "(") openBracket = i;
                }
                for (let i = stack.length - 1; i >= openBracket; i--) {
                    if (stack[i] !== "(") {
                        result = [...result, stack[i]];

                    }
                    stack.pop();
                }
            } else if (calculationFormula[i] === "+" || calculationFormula[i] === "-") {
                if (stack[stack.length - 1] === "/" || stack[stack.length - 1] === "*" || stack[stack.length - 1] === "+" || stack[stack.length - 1] === "-") {
                    do {
                        result = [...result, stack[stack.length - 1]];
                        stack.pop();
                    } while ((!!stack) && (stack[stack.length - 1] === "/" || stack[stack.length - 1] === "*" || stack[stack.length - 1] === "+" || stack[stack.length - 1] === "-"));
                    stack = [...stack, calculationFormula[i]];
                } else {
                    stack = [...stack, calculationFormula[i]];
                }
            }
            else {
                if (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/") {
                    result = [...result, stack[stack.length - 1]];
                    stack[stack.length - 1] = calculationFormula[i];
                } else {
                    stack = [...stack, calculationFormula[i]];
                }
            }
        }

        for (let i = stack.length - 1; i >= 0; i--) {
            result = [...result, stack[i]];
            stack.pop();
        }

        //Obliczanie wyrazenia zapisanego w ONP
        let parA, parB;
        for (let i = 0; i <= result.length - 1; i++) {
            if (parseFloat(result[i]) == result[i]) stack = [...stack, result[i]]
            else {
                parA = stack[stack.length - 1];
                parB = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                if (result[i] === "+") stack = [...stack, Add(parA, parB)];
                else if (result[i] === "-") stack = [...stack, Substract(parA, parB)];
                else if (result[i] === "*") stack = [...stack, Multiply(parA, parB)];
                else stack = [...stack, Divide(parA, parB)];
            }
        }
        Disp([...calculationFormula, "="], stack);
        if (calcHistory.some(x => x === calculationFormula.join([' ']) + "=" + stack)) {
            return
        } else {
            calcHistory.unshift(calculationFormula.join([' ']) + "=" + stack);
            // setCalcHistory([...calcHistory, calculationFormula.join([' ']) + "=" + stack]);
            //setCalcHistory(calcHistory.unshift(calculationFormula.join([' ']) + "=" + stack));
        }
    };

    function Add(parA, parB) {
        return (Math.round((parseFloat(parB) + parseFloat(parA)) * 1000)) / 1000;
    };
    function Substract(parA, parB) {
        return (Math.round((parseFloat(parB) - parseFloat(parA)) * 1000)) / 1000;
    };
    function Multiply(parA, parB) {
        return (Math.round((parseFloat(parB) * parseFloat(parA)) * 1000)) / 1000;
    };
    function Divide(parA, parB) {
        return (Math.round((parseFloat(parB) / parseFloat(parA)) * 1000)) / 1000;
    };

    const Disp = (formula, result) => {
        setDisplayFormula(formula.join([' ']));
        setDisplayResult(result[result.length - 1]);
    }
    const showLog = () => {
        setLogVisible(!logVisible);
    }

    return (
        <CalculationContext.Provider
            value={{
                calculationFormula,
                setCalculationFormula,
                pressedButton,
                setPressedButton,
                buttonPressed,
                displayResult,
                displayFormula,
                calcHistory,
                logVisible,
                setLogVisible,
                showLog,
            }}
        >
            {props.children}
        </CalculationContext.Provider>
    );
};

export default CalculationProvider;