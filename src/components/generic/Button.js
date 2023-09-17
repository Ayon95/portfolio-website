import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import { motion } from 'framer-motion';

const variants = {
	hover: {
		scale: 1.05,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
		},
	},
};

function Button({
	text,
	type,
	color = 'primary',
	isDisabled,
	isLink,
	isExternalLink,
	path,
	url,
	...rest
}) {
	// if the button is an internal link
	if (isLink) {
		return (
			<ButtonLinkComponent to={path} variants={variants} whileHover="hover" color={color} {...rest}>
				{text}
			</ButtonLinkComponent>
		);
	}

	// if the button links to an external web page
	if (isExternalLink) {
		return (
			<ButtonLinkComponent
				as={motion.a}
				href={url}
				target="_blank"
				variants={variants}
				whileHover="hover"
				color={color}
				{...rest}
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
			whileHover="hover"
			color={color}
			{...rest}
		>
			{text}
		</ButtonComponent>
	);
}

export default Button;

const commonButtonStyles = css`
	display: flex;
	justify-content: center;
	padding: 1.3rem 3.5rem;
	border-radius: 10rem;
	background-color: ${props =>
		props.color === 'secondary' ? stylesConfig.colorSecondary : stylesConfig.colorPrimary};
	font-size: 1.6rem;
	font-family: 'Nunito Sans';
	color: #eee;
	letter-spacing: 1.2px;
	font-weight: 700;
	cursor: pointer;
	outline: none;

	&:focus-visible {
		outline: 2px solid ${stylesConfig.colorPrimaryLight};
		outline-offset: 5px;
	}
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
