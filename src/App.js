import React, { useState } from 'react';
import CalcWrapper from './components/CalcWrapper';
import TotalScreen from './components/TotalScreen';
import ButtonWrapper from './components/ButtonWrapper';
import './styles/App.css';

const App = () => {

	let [calcState, setCalcState] = useState({
        num: 0,
        sign: "",
        calcSum: 0
    })

	const addButtonDetail = (e) => {
		console.log("clicked", e.target.value)
	}
	

	const onNumClick = (e) => {
		e.preventDefault();
		const value = e.target.value;

		console.log("this is the value in onNumClick", value)
		console.log("num length is", calcState.num.length)

		setCalcState({
			...calcState,
			num: value
		})


		// if (calcState.num.length < 16) {
		// 	setCalcState({
		// 		...calcState,
		// 		num: 
		// 			calcState.num === 0 && value === 0 
		// 			? 0
		// 			: calcState.num % 1 === 0 
		// 			? Number(calcState.num + value) 
		// 			: calcState.num + value,
		// 		calcSum: !calcState.sign ? 0 : calcState.calcSum
		// 	})
		// }

	}

	const onResetClick = () => {
		setCalcState({
			...calcState,
			num: 0,
			sign: "",
			calcSum: 0
		});
	};





  return (
    <div className="App">
		<div className="container">
			<CalcWrapper>
				<TotalScreen 
					value={calcState.num ? calcState.num : calcState.calcSum} />	
				<ButtonWrapper 
					addButtonDetail={addButtonDetail}
					onNumClick={onNumClick}
					onResetClick={onResetClick}
					/>
				
			</CalcWrapper>
			
		</div>

    </div>
  );
}

export default App;
