import React from 'react';
import CalcWrapper from './components/CalcWrapper';
import TotalScreen from './components/TotalScreen';
import ButtonWrapper from './components/ButtonWrapper';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
		<div className="container">
			<CalcWrapper>
				<TotalScreen />	
				<ButtonWrapper />
				
			</CalcWrapper>
			
		</div>

    </div>
  );
}

export default App;
