import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';
import { motion } from 'framer-motion';
import {
	fullBarVariants,
	halfBarContainerVariants,
	halfBarVariants,
} from '../../../services/animationService/hamburgerButton';

const fullBarWidth = 40;

function HamburgerButton({ shouldShowMenu, toggleMenu }) {
	return (
		<HamburgerButtonContainer onClick={toggleMenu} tabIndex={0}>
			<FullBar
				custom={{ y: 13, rotate: 45 }}
				variants={fullBarVariants}
				animate={shouldShowMenu ? 'menuOpen' : 'menuClosed'}
			/>
			<HalfBarContainer
				variants={halfBarContainerVariants}
				animate={shouldShowMenu ? 'menuOpen' : 'menuClosed'}
			>
				<HalfBar
					style={{ borderRadius: '1rem 0 0 1rem' }}
					custom={-15}
					variants={halfBarVariants}
					animate={shouldShowMenu ? 'menuOpen' : 'menuClosed'}
				/>
				<HalfBar
					style={{ borderRadius: '0 1rem 1rem 0' }}
					custom={15}
					variants={halfBarVariants}
					animate={shouldShowMenu ? 'menuOpen' : 'menuClosed'}
				/>
			</HalfBarContainer>
			<FullBar
				custom={{ y: -13, rotate: -45 }}
				variants={fullBarVariants}
				animate={shouldShowMenu ? 'menuOpen' : 'menuClosed'}
			/>
		</HamburgerButtonContainer>
	);
}

export default HamburgerButton;

const barCommonStyles = css`
	display: inline-block;
	background-color: ${stylesConfig.colorPrimary};
	${'' /* using px because I want the size of the hamburger button to be fixed */}
	height: 5px;
`;

const HamburgerButtonContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	z-index: 20;

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		display: none;
	}
`;

const FullBar = styled(motion.span)`
	${barCommonStyles}
	width: ${fullBarWidth}px;
	border-radius: 1rem;
`;

const HalfBarContainer = styled(motion.div)`
	display: flex;
	margin: 8px 0;
`;

const HalfBar = styled(motion.span)`
	${barCommonStyles}
	width: ${fullBarWidth / 2}px;
`;
