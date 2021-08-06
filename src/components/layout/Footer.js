import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function Footer() {
	return (
		<FooterComponent>
			<p>&copy; 2021. Designed and developed by Mushfiq Rahman.</p>
		</FooterComponent>
	);
}

export default Footer;

const FooterComponent = styled.footer`
	border-top: 2px solid ${stylesConfig.colorPrimary};
	padding: 4rem ${stylesConfig.layoutHorizontalPadding};

	p {
		color: ${stylesConfig.bodyFontColor};
		text-align: center;
		font-size: 1.8rem;
	}
`;
