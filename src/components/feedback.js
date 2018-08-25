import React from 'react';
import './feedback.css';

export default function Feedback(props) {
	return(
		<h2 id='feedback' aria-live='assertive'>
			{props.feedback}
		</h2>
		)
}