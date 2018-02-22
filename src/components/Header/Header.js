import React, { Component } from 'react'
import "./Header.css";

const Header = props => {
	console.log('props in Header: ', props);
	let Greeting
	if (!props.user) {
		Greeting = <p>Hello guest</p>
	} else{
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.email}</strong>
			</p>
		)
	}
	// } else if (props.user.local.username) {
	// 	Greeting = (
	// 		<p>
	// 			Welcome back, <strong>{props.user.user.local.username} </strong>
	// 		</p>
	// 	)
	// } 
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}
export default Header