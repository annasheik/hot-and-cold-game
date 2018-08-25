import React from 'react';
import './top-nav.css';

export default function TopNav(props) {
	return(
		<nav>
			<a
			aria-label='Start a new game'
			onClick={() => props.onRestartGame()}>
			+ New game
			</a>
		</nav>
		)
}