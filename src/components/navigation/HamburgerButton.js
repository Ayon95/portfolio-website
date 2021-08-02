import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import { motion } from 'framer-motion';
import {
	animateFullBarOpen,
	animateHalfBarOpen,
	fullBarVariants,
	halfBarContainerVariants,
	halfBarVariants,
} from '../../animation/hamburgerButton';

const fullBarWidth = 5.5;

function HamburgerButton() {
	const [shouldShowMenu, setShouldShowMenu] = useState(false);

	function toggleMenu() {
		setShouldShowMenu(state => !state);
	}
	return (
		<HamburgerButtonContainer onClick={toggleMenu}>
			<FullBar
				variants={fullBarVariants}
				animate={shouldShowMenu ? animateFullBarOpen(45, 15) : 'menuClosed'}
			/>
			<HalfBarContainer
				variants={halfBarContainerVariants}
				animate={shouldShowMenu ? 'menuOpen' : 'menuClosed'}
			>
				<HalfBar
					style={{ borderRadius: '1rem 0 0 1rem' }}
					variants={halfBarVariants}
					animate={shouldShowMenu ? animateHalfBarOpen(-15) : 'menuClosed'}
				/>
				<HalfBar
					style={{ borderRadius: '0 1rem 1rem 0' }}
					variants={halfBarVariants}
					animate={shouldShowMenu ? animateHalfBarOpen(15) : 'menuClosed'}
				/>
			</HalfBarContainer>
			<FullBar
				variants={fullBarVariants}
				animate={shouldShowMenu ? animateFullBarOpen(-45, -20) : 'menuClosed'}
			/>
		</HamburgerButtonContainer>
	);
}

export default HamburgerButton;

const barCommonStyles = css`
	display: inline-block;
	background-color: ${stylesConfig.colorPrimary};
	height: 0.8rem;
`;

const HamburgerButtonContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
`;

const FullBar = styled(motion.span)`
	${barCommonStyles}
	width: ${fullBarWidth}rem;
	border-radius: 1rem;
`;

const HalfBarContainer = styled(motion.div)`
	display: flex;
	margin: 1rem 0;
`;

const HalfBar = styled(motion.span)`
	${barCommonStyles}
	width: ${fullBarWidth / 2}rem;
`;
