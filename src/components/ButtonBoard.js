import React from 'react';
import MyButton from './MyButton.js';
import "./ButtonBoards.css"

function ButtonBoard() {
    return (
        <div className="buttonBoard">
            <MyButton
                buttonValue="7"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="4"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="1"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="0"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="8"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="5"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="2"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="("
                buttonColor="btn-blueD2"
                buttonType="funct" />
            <MyButton
                buttonValue="9"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="6"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue="3"
                buttonColor="btn-blueD"
                buttonType="number" />
            <MyButton
                buttonValue=")"
                buttonColor="btn-blueD2"
                buttonType="funct" />
            <MyButton
                buttonValue="/"
                buttonColor="btn-blueD2"
                buttonType="funct" />
            <MyButton
                buttonValue="*"
                buttonColor="btn-blueD2"
                buttonType="funct" />
            <MyButton
                buttonValue="-"
                buttonColor="btn-blueD2 "
                buttonType="funct" />
            <MyButton
                buttonValue="+"
                buttonColor="btn-blueD2"
                buttonType="funct" />
            <MyButton
                buttonValue="C"
                buttonColor="btn-blueD2"
                buttonType="clear" />
            <MyButton
                buttonValue="<="
                buttonColor="btn-blueD2"
                buttonType="del" />
            <MyButton
                buttonValue="="
                buttonColor="btn-red btn-big"
                buttonType="exec" />

        </div>
    );
}
export default ButtonBoard;
