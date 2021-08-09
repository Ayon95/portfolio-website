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

const Hero = React.forwardRef((_, ref) => {
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
					A web developer with a passion for creating wonderful interactive experiences on the web.{' '}
				</motion.p>
				<FadeInFromBelow>
					<Button text="View Projects" isLink={true} path="/#projects" />
				</FadeInFromBelow>
			</HeroContent>
		</Container>
	);
});

export default Hero;

const Container = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
`;

const HeroContent = styled.div`
	h1 {
		margin-bottom: 2rem;
	}

	p {
		font-size: 2rem;
		max-width: 35ch;
		margin-bottom: 4rem;
	}
`;
