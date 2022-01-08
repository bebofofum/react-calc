import React from 'react';
import '../styles/ButtonWrapper.css';
import '../styles/Button.css';

const btnValue = [0, 1, 2, 3, 4, "&#61;", 5, 6, 7, 8, 9, "&#43;", "&minus;", "&times;", "&divide;"]



const ButtonWrapper = ({children}) => {

    return (
        <div className="button-container">
            <button className="" value="0" onClick={() => console.log()}>0</button>
            <button className="" value="1" onClick={() => console.log("clicked!")}>1</button>
            <button className="" value="2" onClick={() => console.log("clicked!")}>2</button>
            <button className="" value="3" onClick={() => console.log("clicked!")}>3</button>
            <button className="" value="4" onClick={() => console.log("clicked!")}>4</button>
            <button className="equals-button" value="0" onClick={() => console.log("clicked!")}>&#61;</button>
            <button className="" value="5" onClick={() => console.log("clicked!")}>5</button>
            <button className="" value="6" onClick={() => console.log("clicked!")}>6</button>
            <button className="" value="7" onClick={() => console.log("clicked!")}>7</button>
            <button className="" value="8" onClick={() => console.log("clicked!")}>8</button>
            <button className="" value="9" onClick={() => console.log("clicked!")}>9</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&#43;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&minus;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&times;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&divide;</button>
            <button className="clear-button" value="0" onClick={() => console.log("clicked!")}>C</button>
        </div>
    )
}

export default ButtonWrapper