import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

function SectionWrapper({ title, id, children }) {
	// the id is for scrolling to the section when the fragment containing the id gets added to the url
	return (
		<Container id={id}>
			<h2>{title}</h2>
			{children}
		</Container>
	);
}

export default SectionWrapper;

const Container = styled.section`
	padding: ${stylesConfig.sectionVerticalPadding} 0;
	border-top: 2px solid ${stylesConfig.colorPrimary};

	h2 {
		text-align: center;
		margin-bottom: 6rem;
	}
`;
