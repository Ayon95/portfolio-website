import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function Button({
	text,
	variant = 'primary',
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
			<ButtonLinkComponent to={path} variant={variant} {...rest}>
				{text}
			</ButtonLinkComponent>
		);
	}

	// if the button links to an external web page
	if (isExternalLink) {
		return (
			<ButtonLinkComponent href={url} target="_blank" variant={variant} {...rest}>
				{text}
			</ButtonLinkComponent>
		);
	}

	return (
		<ButtonComponent variant={variant} disabled={isDisabled || false} {...rest}>
			{text}
		</ButtonComponent>
	);
}

export default Button;

const commonButtonStyles = css`
	display: flex;
	justify-content: center;
	padding: 1.6rem 3.5rem;

	${props =>
		props.variant === 'primary' &&
		css`
			border: 1px solid hsl(${stylesConfig.colorPrimaryLight} / 0.5);
		`}

	border-radius: 10rem;
	background-color: ${props =>
		props.variant === 'secondary'
			? `hsl(${stylesConfig.colorCardBackground})`
			: `hsl(${stylesConfig.colorPrimary} / 0.2)`};
	font-family: 'Work Sans';
	font-size: 1.6rem;
	color: #eee;
	letter-spacing: 1.2px;
	font-weight: 600;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		${props =>
			props.variant === 'secondary'
				? css`
						background-color: hsl(${stylesConfig.colorCardBackground} / 0.5);
				  `
				: css`
						background-color: hsl(${stylesConfig.colorPrimary});
				  `}
	}
`;

const ButtonComponent = styled.button`
	${commonButtonStyles}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
const ButtonLinkComponent = styled(Link)`
	${commonButtonStyles}
	&:link,
	&:visited,
	&:active {
		text-decoration: none;
	}
`;
