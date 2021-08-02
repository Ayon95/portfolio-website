import React from 'react';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import GlobalStyles from '../style/GlobalStyles';

export default function Home() {
	return (
		<AppContainer>
			<GlobalStyles />
			<Hero />
		</AppContainer>
	);
}

const AppContainer = styled.div`
	width: 100%;
	max-width: 110rem;
	margin: 0 auto;
	padding: 0 2rem;
`;
