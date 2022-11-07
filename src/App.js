import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
	const [mode, setMode] = useState('light'); //whether dark mode is enabled or not in Navbar and whole page

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.color = 'white';
			document.body.style.backgroundColor = 'black';
		} else {
			setMode('light');
			document.body.style.color = 'black';
			document.body.style.backgroundColor = 'white';
		}
	};

	//*now making an alert function for Alert.js
	const [alert, setAlert] = useState(null);

	const changeAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
	};

	return (
		<>
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

			<Alert alertText={alert} />

			<div className="container my-3">
				<TextForm heading="Type the Text here:" mode={mode} />

				{/* <About /> */}
			</div>
		</>
	);
}

export default App;
