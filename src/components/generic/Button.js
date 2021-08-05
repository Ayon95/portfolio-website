import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import { motion } from 'framer-motion';

const variants = {
	hoverAndFocus: {
		scale: 1.1,
		boxShadow: stylesConfig.glowEffect,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

function Button({ text, type, isDisabled, isLink, path }) {
	if (isLink) {
		return (
			<ButtonLinkComponent
				to={path}
				variants={variants}
				whileHover="hoverAndFocus"
				whileFocus="hoverAndFocus"
			>
				{text}
			</ButtonLinkComponent>
		);
	}

	return (
		<ButtonComponent
			type={type}
			disabled={isDisabled || false}
			variants={variants}
			whileHover="hoverAndFocus"
			whileFocus="hoverAndFocus"
		>
			{text}
		</ButtonComponent>
	);
}

export default Button;

const commonButtonStyles = css`
	display: inline-block;
	padding: 1.5rem 2.5rem;
	border-radius: 10rem;
	background-color: ${stylesConfig.colorPrimary};
	font-size: 2.2rem;
	font-family: 'Nunito Sans';
	color: #eee;
	letter-spacing: 1.2px;
	font-weight: 700;
	cursor: pointer;
	outline: none;
`;

const ButtonComponent = styled(motion.button)`
	${commonButtonStyles}
	border: none;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
const ButtonLinkComponent = styled(motion(Link))`
	${commonButtonStyles}
	&:link,
	&:visited,
	&:active {
		text-decoration: none;
	}
`;
