import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import FadeInWhenInView from '../animation/FadeInWhenInView';
import { useLocation } from '@reach/router';

function SectionWrapper({ title, id, children, className }) {
	// the id is for scrolling to the section when the fragment containing the id gets added to the url
	// the className prop is for extending the style of this custom component if needed

	const location = useLocation();
	const sectionRef = useRef();

	// scroll to that particular section when the page reloads and the section mounts if the id is included in the url fragment identifier
	useEffect(() => {
		console.log(sectionRef.current);
		if (location.hash.includes(id)) {
			sectionRef.current.scrollIntoView();
		}
	}, [id, location.hash]);
	return (
		<FadeInWhenInView>
			<Container id={id} className={className} ref={sectionRef}>
				<h2>{title}</h2>
				{children}
			</Container>
		</FadeInWhenInView>
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
