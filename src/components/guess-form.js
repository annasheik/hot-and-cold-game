import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component{
	onSubmit(event) {
		event.preventDefault();

		if(this.props.onMakeGuess) {
			const value = this.input.value;
			this.props.onMakeGuess(value)
		}
		this.input.value = '';

	}
	render() {
	return(
			<form
			onSubmit = {e => this.onSubmit(e)} >
			<input type='number' placeholder='Enter your guess' name='user-guess' id='user-guess' 
			min='1' max='100' ref={input => (this.input = input)}
			required />
			<button type='submit'
			id='guess-button'
			className='button'>Guess</button>
			</form>
		)
}
}