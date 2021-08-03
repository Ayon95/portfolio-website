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
	width: 100%;
	max-width: 110rem;
	margin: 0 auto;
	padding: 0 3rem;
`;