import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
	return (
		<>
			<Navbar title="TextUtils" />
			<div className="container">
				<TextForm heading="Type the Text here:" />
			</div>
		</>
	);
}

export default App;
