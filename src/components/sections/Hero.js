import React from 'react';
import styled from 'styled-components';
import TypewriterComponent from 'typewriter-effect';
import Button from '../generic/Button';
import FadeInFromBelow from '../animation/FadeInFromBelow';
import { motion } from 'framer-motion';

const subtitleVariants = {
	hidden: { x: -60, opacity: 0 },

	visible: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.5, duration: 1, ease: 'easeOut' },
	},
};

function Hero() {
	return (
		<Container>
			<HeroContent>
				<h1>
					<TypewriterComponent
						options={{
							strings: ["Hi, I'm Mushfiq Rahman", 'Welcome to my website'],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<motion.p variants={subtitleVariants} initial="hidden" animate="visible">
					A web developer with a passion for creating wonderful interactive experiences on the web.{' '}
				</motion.p>
				<FadeInFromBelow>
					<Button text="View Projects" isLink={true} path="/#projects" />
				</FadeInFromBelow>
			</HeroContent>
		</Container>
	);
}

export default Hero;

const Container = styled.section`
	/* subtracting the height of the nav bar */
	height: calc(100vh - 8.8rem);
	display: flex;
	align-items: center;
`;

const HeroContent = styled.div`
	h1 {
		margin-bottom: 2rem;
	}

	p {
		max-width: 35ch;
		margin-bottom: 4rem;
	}
`;
