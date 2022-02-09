import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';
import FadeInWhenInView from '../animation/FadeInWhenInView';
import { useLocation } from '@reach/router';

const SectionWrapper = React.forwardRef(
	({ title, id, sectionInView, children, className }, ref) => {
		// The id is for scrolling to the section when the fragment containing the id gets added to the url
		// The className prop is for extending the style of this custom component if needed

		const location = useLocation();
		const sectionRef = useRef();

		// This callback ref will make it possible to assign multiple refs to a single component
		// This way, I can use both sectionRef (from useRef) and the forwarded ref (from useInView)
		// Both sectionRef and ref will have a reference to the same DOM element
		const setRefs = useCallback(
			domElement => {
				// Assigning the HTML DOM element to sectionRef.current
				sectionRef.current = domElement;
				// The ref created by useInView is a callback ref that receives the DOM element as argument
				// Tntersection observer will monitor the in-view status of the received DOM element
				ref(domElement);
			},
			[ref]
		);

		// Highlight active link when the user scrolls to the associated section
		// Add active link styles to the nav link when the associated section is in view
		useEffect(() => {
			const sectionNavLink = document.querySelector(`a[href="/#${id}"]`);
			if (sectionInView) {
				sectionNavLink.classList.add('active-link');
				sectionNavLink.setAttribute('aria-current', 'true');
			} else {
				sectionNavLink.classList.remove('active-link');
				sectionNavLink.removeAttribute('aria-current');
			}
		}, [sectionInView, id]);

		// scroll to that particular section when the page reloads and the section mounts if the id is included in the url fragment identifier
		useEffect(() => {
			if (location.hash.includes(id)) {
				sectionRef.current.scrollIntoView();
			}
		}, [id, location.hash]);

		return (
			<FadeInWhenInView>
				<Container id={id} className={className} ref={setRefs}>
					<h2>{title}</h2>
					{children}
				</Container>
			</FadeInWhenInView>
		);
	}
);

export default SectionWrapper;

const Container = styled.section`
	padding: ${stylesConfig.sectionVerticalPadding} 0;
	border-top: 2px solid ${stylesConfig.colorPrimary};

	h2 {
		text-align: center;
		margin-bottom: 6rem;
	}
`;
