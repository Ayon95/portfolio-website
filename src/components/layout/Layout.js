import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import Footer from './Footer';
import Navbar from './navigation/Navbar';

function Layout({ heroSectionInView, children }) {
	return (
		<>
			<Navbar heroSectionInView={heroSectionInView} />
			<Content>{children}</Content>
			<Footer />
		</>
	);
}

export default Layout;

const Content = styled.main`
	width: 100%;
	max-width: ${stylesConfig.sectionMaxWidth};
	margin: 0 auto;
	padding: 0 ${stylesConfig.layoutHorizontalPadding};
`;
