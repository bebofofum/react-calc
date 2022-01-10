import React, { useState } from 'react';
import '../styles/ButtonWrapper.css';
import '../styles/Button.css';

// const btnValue = [0, 1, 2, 3, 4, "&#61;", 5, 6, 7, 8, 9, "&#43;", "&minus;", "&times;", "&divide;"]




const ButtonWrapper = ({ addButtonDetail }) => {

    return (
        <div className="button-container">
            <button className="" value={0} onClick={(e) => {addButtonDetail(e, "value")}}>0</button>
            <button className="" value={1} onClick={(e) => {addButtonDetail(e, "value")}}>1</button>
            <button className="" value={2} onClick={(e) => {addButtonDetail(e, "value")}}>2</button>
            <button className="" value={3} onClick={(e) => {addButtonDetail(e, "value")}}>3</button>
            <button className="" value={4} onClick={(e) => {addButtonDetail(e, "value")}}>4</button>
            <button className="equals-button" value={"="} onClick={(e) => {addButtonDetail(e, "value")}}>&#61;</button>
            <button className="" value={5} onClick={(e) => {addButtonDetail(e, "value")}}>5</button>
            <button className="" value={6} onClick={(e) => {addButtonDetail(e, "value")}}>6</button>
            <button className="" value={7} onClick={(e) => {addButtonDetail(e, "value")}}>7</button>
            <button className="" value={8} onClick={(e) => {addButtonDetail(e, "value")}}>8</button>
            <button className="" value={9} onClick={(e) => {addButtonDetail(e, "value")}}>9</button>
            <button className="" value={"+"} onClick={(e) => {addButtonDetail(e, "value")}}>&#43;</button>
            <button className="" value="-" onClick={(e) => {addButtonDetail(e, "value")}}>&minus;</button>
            <button className="" value="X" onClick={(e) => {addButtonDetail(e, "value")}}>&times;</button>
            <button className="" value="/" onClick={(e) => {addButtonDetail(e, "value")}}>&divide;</button>
            <button className="clear-button" value={"C"} onClick={(e) => {addButtonDetail(e, "value")}}>C</button>
        </div>
    )
}

export default ButtonWrapper