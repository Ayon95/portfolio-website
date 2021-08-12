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
			title="About me"
			id="about"
			ref={aboutSectionRef}
			sectionInView={aboutSectionInView}
		>
			<p>
				Hi, I'm Mushfiq Rahman, a web developer based in Waterloo, Canada. I enjoy building web
				applications with clean and beautiful interfaces that provide a delightful user experience.
				I love learning new technologies and concepts related to web development. I find delight in
				solving problems with clean, simple, and easy-to-understand code.
			</p>

			<p>
				I am excited to work with and learn from the experts in the industry, and continue to grow
				myself as a developer.
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
