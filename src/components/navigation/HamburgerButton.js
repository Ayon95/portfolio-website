import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import { motion } from 'framer-motion';
import {
	fullBarVariants,
	halfBarContainerVariants,
	halfBarVariants,
} from '../../animation/hamburgerButton';

const fullBarWidth = 5.5;

function HamburgerButton({ shouldShowMenu, toggleMenu }) {
	return (
		<HamburgerButtonContainer onClick={toggleMenu}>
			<FullBar
				custom={{ rotate: 45, y: 15 }}
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
				custom={{ rotate: -45, y: -20 }}
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
	height: 0.8rem;
`;

const HamburgerButtonContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	z-index: 20;
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
