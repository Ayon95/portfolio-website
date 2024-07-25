import React from 'react';
import styled from 'styled-components';
import Button from '../generic/Button';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';

const transitionOptions = { duration: 0.6, ease: 'easeOut', opacity: { duration: 0.4 } };

const titleVariants = {
	hidden: {
		y: -60,
		opacity: 0,
	},

	visible: {
		y: 0,
		opacity: 1,
		transition: transitionOptions,
	},
};

const subtitleVariants = {
	hidden: { x: -60, opacity: 0 },

	visible: {
		x: 0,
		opacity: 1,
		transition: transitionOptions,
	},
};

const buttonContainerVariants = {
	hidden: {
		y: 60,
		opacity: 0,
	},

	visible: {
		y: 0,
		opacity: 1,
		transition: transitionOptions,
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
				<motion.h1
					aria-labelledby="pageTitle"
					variants={titleVariants}
					initial="hidden"
					animate="visible"
				>
					Hi, I am Mushfiq
				</motion.h1>
				<motion.p variants={subtitleVariants} initial="hidden" animate="visible">
					I am a web developer who is passionate about creating beautiful, interactive, and
					accessible experiences on the web
				</motion.p>
				<ButtonsContainer variants={buttonContainerVariants} initial="hidden" animate="visible">
					<Button text="Projects" isLink={true} path="/#projects" />
					<Button
						text="Resume"
						variant="secondary"
						isExternalLink={true}
						url={data.file.publicURL}
					/>
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
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const ButtonsContainer = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 13rem));
	justify-content: center;
	column-gap: 1rem;
	row-gap: 2rem;
`;

const HeroContent = styled.div`
	margin-top: 2rem;

	h1 {
		margin-bottom: 1.6rem;
	}

	p {
		font-size: 1.8rem;
		max-width: 50ch;
		margin-bottom: 4rem;
	}
`;
