import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';

function ContactLink({ title, url, icon: Icon }) {
	return (
		<ContactLinkComponent href={url} title={title} target="_blank">
			<Icon aria-hidden="true" />
		</ContactLinkComponent>
	);
}

export default ContactLink;

const ContactLinkComponent = styled.a`
	outline: none;

	&:not(:last-child) {
		margin-right: 4rem;
	}

	&:focus-visible svg {
		fill: ${stylesConfig.colorPrimaryLight};
		filter: drop-shadow(${stylesConfig.glowEffect});
	}

	svg {
		font-size: 3rem;
		transition: filter 0.3s, fill 0.3s;
	}

	/* apply hover styles to the svg icon only for devices that support mouse hover state */
	@media only screen and (hover: hover) and (pointer: fine) {
		svg:hover {
			fill: ${stylesConfig.colorPrimaryLight};
		}
	}
`;
