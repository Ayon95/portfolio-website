import React from 'react';
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';

function Navbar() {
	return (
		<Nav>
			<HamburgerButton />
		</Nav>
	);
}

export default Navbar;

const Nav = styled.nav`
	padding: 2rem;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	z-index: 10;
	background-color: transparent;
	border: 1px solid yellow;
	transition: background-color 0.6s;
`;
