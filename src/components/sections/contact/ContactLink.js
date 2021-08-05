import React from 'react';
import styled, { css } from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';

function ContactLink({ title, url, icon: Icon }) {
	return (
		<ContactLinkComponent href={url} title={title} target="_blank">
			<Icon />
		</ContactLinkComponent>
	);
}

export default ContactLink;

const focusAndHoverStyles = css`
	fill: ${stylesConfig.colorPrimaryLight};
	transform: scale(1.2);
`;

const ContactLinkComponent = styled.a`
	outline: none;

	&:not(:last-child) {
		margin-right: 4rem;
	}

	&:focus svg {
		${focusAndHoverStyles}
	}

	svg {
		transition: transform 0.2s, fill 0.2s;
	}

	/* apply hover styles to the svg icon only for devices that support mouse hover state */
	@media only screen and (hover: hover) and (pointer: fine) {
		svg:hover {
			${focusAndHoverStyles}
		}
	}
`;
