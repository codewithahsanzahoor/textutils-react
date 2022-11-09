import React, { useState } from 'react';

export default function TextForm(props) {
	const [text, finalText] = useState('');

	const capitalBtn = () => {
		let finalValue = text.toUpperCase();
		finalText(finalValue);
		props.showAlert('All text is Capitalized!', 'success');
	};

	const lowerBtn = () => {
		let finalValue = text.toLowerCase();
		finalText(finalValue);
		props.showAlert('All text is converted into Lower Case!', 'success');
	};

	const clearBtn = () => {
		finalText('');
		props.showAlert('Clear All Text in TextArea!', 'success');
	};

	const finalTextFunc = (event) => {
		finalText(event.target.value);
	};

	let textAreaBackgroundColor = {
		backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
		color: props.mode === 'dark' ? 'white' : 'black',
	};

	let otherTextStyle = {
		backgroundColor: props.mode === 'dark' ? 'black' : 'white',
		color: props.mode === 'dark' ? 'white' : 'black',
	};

	// const previewChangeText = () => {
	// 	let previewText = document.getElementsByClassName('previewText')[0];
	// 	if (text.length >= 1) {
	// 		previewText.innerHTML = text;
	// 	} else {
	// 		previewText.innerHTML =
	// 			'(Enter something above the box to preview here!)';
	// 	}
	// };

	return (
		<>
			<div className="mb-3 my-2">
				<label
					htmlFor="exampleFormControlTextarea1"
					className="form-label my-2"
				>
					{props.heading}
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows={6}
					value={text}
					onChange={finalTextFunc}
					style={textAreaBackgroundColor}
				/>
			</div>
			<button className="btn btn-primary" onClick={capitalBtn}>
				Convert To Capital Text
			</button>
			<button className="btn btn-primary mx-2" onClick={lowerBtn}>
				Convert To Lower Text
			</button>
			<button className="btn btn-primary mx-2" onClick={clearBtn}>
				Clear
			</button>
			<div className="container my-2" style={otherTextStyle}>
				<h2>your Text Summary</h2>
				<p>
					<b>
						{text.split(' ').length} words and {text.length} characters
					</b>
				</p>
				<p>
					<b>{0.008 * text.split(' ').length} Time to read this text</b>
				</p>
				<h2>Preview of Above Text.</h2>
				<p className="previewText">
					{text.length >= 1
						? text
						: 'Enter something above the box to preview here!'}
				</p>
			</div>
		</>
	);
}
