import React from 'react';
import styled from 'styled-components';
import TypewriterComponent from 'typewriter-effect';
import Button from '../generic/Button';
import FadeInFromBelow from '../animation/FadeInFromBelow';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';

const subtitleVariants = {
	hidden: { x: -60, opacity: 0 },

	visible: {
		x: 0,
		opacity: 1,
		transition: { delay: 2.7, duration: 1, ease: 'easeOut' },
	},
};

const Hero = React.forwardRef((_, ref) => {
	// making a query to get the resume
	const data = useStaticQuery(graphql`
		query ResumeQuery {
			file(relativePath: { eq: "mushfiq_rahman_resume.pdf" }) {
				publicURL
			}
		}
	`);
	return (
		<Container ref={ref}>
			<HeroContent>
				<h1>
					<TypewriterComponent
						options={{
							strings: ["Hi, I'm Mushfiq", 'Welcome to my website'],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<motion.p variants={subtitleVariants} initial="hidden" animate="visible">
					A web developer with a passion for creating amazing interactive experiences on the web.{' '}
				</motion.p>
				<ButtonsContainer>
					<FadeInFromBelow>
						<Button text="Projects" isLink={true} path="/#projects" />
					</FadeInFromBelow>

					<FadeInFromBelow>
						<Button text="Resume" isExternalLink={true} url={data.file.publicURL} />
					</FadeInFromBelow>
				</ButtonsContainer>
			</HeroContent>
		</Container>
	);
});

export default Hero;

const Container = styled.section`
	min-height: 100vh;
	min-height: 100svh;
	display: flex;
	align-items: center;
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 13rem));
	column-gap: 1rem;
	row-gap: 2rem;
`;

const HeroContent = styled.div`
	margin-top: 2rem;

	h1 {
		margin-bottom: 1.6rem;
	}

	p {
		font-size: 2rem;
		max-width: 35ch;
		margin-bottom: 4rem;
	}
`;
