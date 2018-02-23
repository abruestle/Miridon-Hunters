import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import HomeComp from '../components/HomeComp'
import DisplayLinks from '../components/DisplayLinks'
import {Launcher} from '../components/Chat2'
import Menu  from '../components/Navbar/menus/pushRotate'
import Imagetwo from '../components/Imagetwo'
import { Well, Button, Jumbotron } from 'react-bootstrap';
// https://react-bootstrap.github.io/components/buttons/
import Input from "../components/Input";
import Greeting from "../components/Greeting";
import Wins_Losses from "../components/Wins_Losses";

const Profile = props => (
	<div>

<footer className="navbar-fixed-bottom">
					<div className="container">
						<div className="row">
							<p>Don't miss my site: <a href="www.devbutze.com">DevButze</a> </p>
						</div>
					</div>
				</footer>
		<Launcher
			agentProfile={{
			teamName: 'react-live-chat',
			imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
			}}
			onMessageWasSent={props._onMessageWasSent}
			messageList={props.messageList}
			showEmoji
		/>
		<div className="App" id="outer-container"> 
		<Menu left outerContainerId={"outer-container"} pageWrapId={"page-wrap"}>

			<Imagetwo />
			<br />
				<a id="login" className="menu-item" href="/login">
					<h3>Log In</h3>
				</a>
				<a id="profile" className="menu-item" href="/profile">
					<h3>Profile</h3>
				</a>
				<a id="createhero" className="menu-item" href="/createhero">
					<h3>Create Hero</h3>
				</a>
				<a id="selecthero" className="menu-item" href="/selecthero">
					<h3>Select Hero</h3>
				</a>
				<a id="battle" className="menu-item" href="/battle">
					<h3>Battle</h3>
				</a>
				<a id="upgrades" className="menu-item" href="/upgrades">
					<h3>Upgrades</h3>
				</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
		</Menu>
  								
  									
		
<div id="page-wrap">
				<div className="container">
						{/* <Header user={props.user} /> */}
						<br />	
						<br />
						{/* <HomeComp /> */}

						<div>
  	<Header user={props.user.user} />
  	{/*image*/}
  
  				
  	<Greeting {...props}/>
  	<div className="jumbotron">			
  	<Input/>
  	{/*image*/}
  								
  	<Wins_Losses/>

	  
	  </div>
	  </div>
</div>
	 

</div>
</div>
    </div>

	
);




  export default Profile;
 
