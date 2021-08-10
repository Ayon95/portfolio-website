import React from 'react';
import styled from 'styled-components';
import Button from '../components/generic/Button';
import GlobalStyles from './../style/GlobalStyles';
import { RiGhostFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import stylesConfig from '../style/stylesConfig';

const iconVariants = {
	float: {
		y: [-20, 20],
		transition: { duration: 1.5, repeatType: 'reverse', repeat: Infinity },
	},
};

function NotFound() {
	return (
		<>
			<GlobalStyles />
			<PageContainer>
				<Content>
					<h1>
						4
						<AnimatedIconWrapper variants={iconVariants} animate="float">
							<RiGhostFill />
						</AnimatedIconWrapper>
						4
					</h1>
					<h2>Page not found</h2>
					<p>
						I'm afraid you have landed on unknown territory. Click the button below to find your way
						back home.
					</p>
					<Button isLink={true} path="/" text="Back To Home" />
				</Content>
			</PageContainer>
		</>
	);
}

export default NotFound;

const PageContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`;

const Content = styled.main`
	text-align: center;

	h1 {
		font-size: 10rem;
		line-height: 1.1;
	}

	p {
		font-size: 2rem;
		margin: 3rem 0;
		max-width: 50ch;
	}
`;

const AnimatedIconWrapper = styled(motion.div)`
	display: inline-block;

	svg {
		filter: drop-shadow(${stylesConfig.glowEffect});
	}
`;
