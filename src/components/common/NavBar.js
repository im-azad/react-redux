import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	let activeStyle = {
		textDecoration: 'none',
		color: 'red',
	};
	return (
		<div>
			<nav>
				<NavLink
					to='/'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Home
				</NavLink>
				|{' '}
				<NavLink
					to='/about'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					About
				</NavLink>
				|
				<NavLink
					to='/counter'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Counter App
				</NavLink>{' '}
				|
				<NavLink
					to='/todo'
					style={({ isActive }) =>
						isActive ? activeStyle : undefined
					}
				>
					Todo Data
				</NavLink>
			</nav>
		</div>
	);
};

export default NavBar;
