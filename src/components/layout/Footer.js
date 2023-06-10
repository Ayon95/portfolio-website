import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function Footer() {
	return (
		<FooterComponent>
			<p>&copy; {new Date(Date.now()).getFullYear()}. Designed and developed by Mushfiq Rahman.</p>
		</FooterComponent>
	);
}

export default Footer;

const FooterComponent = styled.footer`
	padding: 3rem ${stylesConfig.layoutHorizontalPadding};

	p {
		color: ${stylesConfig.bodyFontColor};
		opacity: 0.85;
		text-align: center;
		font-size: 1.4rem;
	}
`;
