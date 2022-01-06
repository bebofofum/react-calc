import React from 'react';
import '../styles/ButtonWrapper.css';

const ButtonWrapper = ({children}) => {
    return (
        <div className="button-container">
            <button className="" value="0" onClick={() => console.log("clicked!")}>0</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>1</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>2</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>3</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>4</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&#61;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>5</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>6</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>7</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>8</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>9</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&#43;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&minus;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&times;</button>
            <button className="" value="0" onClick={() => console.log("clicked!")}>&divide;</button>

        </div>
    )
}

export default ButtonWrapper