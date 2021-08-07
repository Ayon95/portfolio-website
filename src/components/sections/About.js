import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../generic/SectionWrapper';

function About() {
	return (
		<SectionContainer title="About me">
			<p>
				Hi, I'm Mushfiq Rahman, a web developer based in Waterloo, Canada. I enjoy building web
				applications with clean and beautiful interfaces that provide a delightful user experience.
				I love learning new technologies and concepts related to web development. I find delight in
				solving problems with clean, simple, and easy-to-understand code.
			</p>
		</SectionContainer>
	);
}

export default About;

const SectionContainer = styled(SectionWrapper)`
	p {
		width: 100%;
		max-width: 50ch;
		margin: 0 auto;
	}
`;
