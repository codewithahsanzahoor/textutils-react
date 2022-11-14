import React from 'react';

function Alert(props) {
	//*function to capitalize first letter of success or type of alerts.
	const capitalizeAlertTypeFirstLetter = (word) => {
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	return (
		<div style={{ height: '50px' }}>
			{props.alert && (
				<div
					className={`alert alert-${props.alert.type} alert-dismissible fade show`}
					role="alert"
				>
					{`${capitalizeAlertTypeFirstLetter(props.alert.type)} `}
					<strong>{props.alert.message}</strong>
				</div>
			)}
		</div>
	);
}

export default Alert;
