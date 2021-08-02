import React from 'react';
import styled from 'styled-components';
import Navbar from '../navigation/Navbar';

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<Content>{children}</Content>
		</>
	);
}

export default Layout;

const Content = styled.div`
	border: 1px solid red;
	width: 100%;
	max-width: 110rem;
	margin: 0 auto;
	padding: 0 2rem;
`;
