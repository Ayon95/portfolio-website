import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function Button({ text, type, isLink, path }) {
	if (isLink) {
		return <ButtonLinkComponent to={path}>{text}</ButtonLinkComponent>;
	}

	return <ButtonComponent type={type}>{text}</ButtonComponent>;
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
`;

const ButtonComponent = styled.button`
	${commonButtonStyles}
	border: none;
`;
const ButtonLinkComponent = styled(Link)`
	${commonButtonStyles}
	&:link,
	&:visited,
	&:active {
		text-decoration: none;
	}
`;
