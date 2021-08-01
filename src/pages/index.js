import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../style/GlobalStyles';

export default function Home() {
	return (
		<AppContainer>
			<GlobalStyles />
			<h1>Hello, world</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quae. Beatae corrupti et eos
				nostrum est delectus numquam quis aspernatur!
			</p>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	width: 100%;
	max-width: 110rem;
	border: 1px solid red;
	margin: 0 auto;
`;
