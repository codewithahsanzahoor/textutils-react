import React, { useState } from 'react';

export default function TextForm(props) {
	const [text, finalText] = useState('');

	const capitalBtn = () => {
		let finalValue = text.toUpperCase();
		finalText(finalValue);
	};

	const lowerBtn = () => {
		let finalValue = text.toLowerCase();
		finalText(finalValue);
	};

	const finalTextFunc = (event) => {
		finalText(event.target.value);
	};

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
				/>
			</div>
			<button className="btn btn-primary" onClick={capitalBtn}>
				Convert To Capital Text
			</button>
			<button className="btn btn-primary mx-2" onClick={lowerBtn}>
				Convert To Lower Text
			</button>
			<div className="container my-2">
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
				<p>{text}</p>
			</div>
		</>
	);
}
