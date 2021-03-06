import React from 'react';
import './Header.css';
import { Link , withRouter } from 'react-router-dom';

const Header = ( props ) => {
	return (
		<div className="header">
			<Link to="/">Home</Link>&nbsp;&nbsp;
			<Link to="/about">About</Link>&nbsp;&nbsp;
			<Link to="/posts">Posts</Link>&nbsp;&nbsp;
			<Link to="/login">Login</Link>&nbsp;&nbsp;
			<Link to="/signup">Signup</Link>
		</div>	
	);
}

export default withRouter(Header);