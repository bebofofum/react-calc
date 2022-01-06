import React from 'react';
import '../styles/CalcWrapper.css'

const CalcWrapper = ({children}) => {
    return (
        <div className="outer-wrapper">{children}</div>
    )
}

export default CalcWrapper