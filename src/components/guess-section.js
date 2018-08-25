import React from 'react';
import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
	const {feedback, guessCount} = props;
	return (
			<div className='hot-cold'>
			<Feedback feedback={feedback} guessCount={guessCount} />
			<GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
			</div>
		)
}
