import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light'); //whether dark mode is enabled or not in Navbar and whole page

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.color = 'white';
			document.body.style.backgroundColor = 'black';

			//*changing the alert state for Alert.js
			changeAlert('Dark mode is enabled', 'success');
		} else {
			setMode('light');
			document.body.style.color = 'black';
			document.body.style.backgroundColor = 'white';

			//*changing the alert state for Alert.js
			changeAlert('Light mode is enabled', 'success');
		}
	};

	//*now making an alert object for Alert.js which is a state
	const [alert, setAlert] = useState({
		message: '',
		type: '',
	});

	const changeAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />

				<div className="container my-3">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<TextForm
									heading="Type the Text here:"
									mode={mode}
									showAlert={changeAlert}
								/>
							}
						/>
						<Route exact path="/about" element={<About mode={mode} />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
