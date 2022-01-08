import React from 'react';
import '../styles/TotalScreen.css';


const TotalScreen = ({ value }) => {
    return(
        <div className="screen-display">
            {value}
        </div>
    )
}

export default TotalScreen