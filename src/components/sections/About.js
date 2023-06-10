import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SectionWrapper from '../generic/SectionWrapper';

function About() {
	const [aboutSectionRef, aboutSectionInView] = useInView({
		threshold: 0.6,
		root: null,
	});
	return (
		<SectionContainer
			title="About Me"
			id="about"
			ref={aboutSectionRef}
			sectionInView={aboutSectionInView}
		>
			<p>
				Hi, I am Mushfiq Rahman, a web developer based in Waterloo, Canada. I am passionate about
				building interactive, accessible, responsive websites and web applications. I love learning
				new technologies, concepts, and best practices related to programming and web development.
				Apart from coding, I enjoy watching and playing soccer, hiking, and fishkeeping.
			</p>

			<p>
				I am always eager to work with talented creative individuals, share my knowledge with
				others, as well as learn from them, and continue to grow myself as a developer.
			</p>
		</SectionContainer>
	);
}

export default About;

const SectionContainer = styled(SectionWrapper)`
	p {
		width: 100%;
		max-width: 55ch;
		margin: 0 auto;

		:not(:last-child) {
			margin-bottom: 2rem;
		}
	}
`;
