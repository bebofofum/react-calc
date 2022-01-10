import React from 'react';
import '../styles/Button.css';



const Button = (props) => {
    console.log([props]);

    return(
        <button 
            className="" 
            value={0} 
            onClick={(e) => {addButtonDetail(e, "value")}}>
            0
        </button>
        )
}