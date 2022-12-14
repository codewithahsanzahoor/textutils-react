// import React, { useState } from 'react';

export default function About(props) {
	// const [myStyle, setMyStyle] = useState({
	// 	backgroundColor: 'black',
	// 	color: 'white',
	// });

	//NOTE: 1) this is how you style the elements using {style}tag in elements and making objects of the Properties you want to apply 2) by using dom manipulation and using classes and id in js.
	let myStyle = {
		color: props.mode === 'light' ? 'black' : 'white',
		backgroundColor: props.mode === 'dark' ? 'black' : 'white',
	};

	let btnStyleForAccordian = {
		backgroundColor: props.mode === 'dark' ? 'black' : 'white',
		color: props.mode === 'light' ? 'black' : '#c05e5e',
	};

	

	// let bodyFontColor = document.getElementsByClassName('bodyFontColorAhsan')
	// document.getElementById('bodyFontColorAhsan')

	// const [btnText, setBtnText] = useState('Enable White Mode');

	// const toogleStyle = () => {
	// 	if (myStyle.color === 'black') {
	// 		setMyStyle({
	// 			color: 'white',
	// 			backgroundColor: 'black',
	// 			border: '1px solid white',
	// 		});
	// 		setBtnText('Enable Light Mode');
	// 	} else {
	// 		setMyStyle({
	// 			color: 'black',
	// 			backgroundColor: 'white',
	// 			border: '1px solid white',
	// 		});
	// 		setBtnText('Enable Dark Mode');
	// 	}
	// };

	//*this is how we style in jsx
	// let myStyle = {
	// 	backgroundColor: 'black',
	// 	// border: '2px solid green',
	// 	color: 'white',
	// };

	return (
		<div style={myStyle}>
			<h2 className="">AboutUs</h2>
			<div
				className="accordion container"
				style={myStyle}
				id="accordionExample"
			>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							style={btnStyleForAccordian}
						>
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the first item's accordion body.</strong> It is
							shown by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
							style={btnStyleForAccordian}
						>
							Accordion Item #2
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body " id="bodyFontColorAhsan">
							<strong>This is the second item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
							style={btnStyleForAccordian}
						>
							Accordion Item #3
						</button>	
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the third item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
			<div className="container my-2">
				{/* <button onClick={toogleStyle} type="button" className="btn btn-primary">
					{btnText}
				</button> */}
			</div>
		</div>
	);
}
