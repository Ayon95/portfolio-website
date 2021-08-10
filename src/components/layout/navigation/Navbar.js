import { Link } from 'gatsby';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from '@reach/router';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';
import HamburgerButton from './HamburgerButton';
import {
	navLinksContainerVariants,
	navLinkVariants,
} from '../../../services/animationService/hamburgerMenu';
import { useIsMediumScreen } from './../../../hooks/useMediaQuery';
import logo from '../../../images/logo-portfolio.png';

const navbarLinks = [
	{ title: 'Projects', path: '/#projects' },
	{ title: 'Skills', path: '/#skills' },
	{ title: 'About', path: '/#about' },
	{ title: 'Contact', path: '/#contact' },
];

function Navbar({ heroSectionInView }) {
	const [shouldShowMenu, setShouldShowMenu] = useState(false);
	// for having a reference to each nav link
	// will need a reference to each link in order to remove its 'style' attribute
	const navLinksRef = useRef([]);

	const isMediumScreen = useIsMediumScreen();

	const location = useLocation();

	function toggleMenu() {
		setShouldShowMenu(state => !state);
	}

	function closeMenu() {
		// only close menu if the menu is open
		if (shouldShowMenu) setShouldShowMenu(false);
	}

	function getNavLinksContainerAnimation() {
		// no animation when the screen size is medium
		if (isMediumScreen) return undefined;
		// else return the appropriate animation
		return shouldShowMenu ? 'visible' : 'hidden';
	}

	// disable scrolling on body when the hamburger menu is open
	useEffect(() => {
		if (shouldShowMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [shouldShowMenu]);

	return (
		<Nav heroSectionInView={heroSectionInView}>
			<NavContent>
				<LogoWrapper to="/">
					<img src={logo} alt="Website logo" />
				</LogoWrapper>
				<NavLinksContainer
					variants={navLinksContainerVariants}
					animate={getNavLinksContainerAnimation()}
				>
					{navbarLinks.map((link, index) => (
						<NavLink
							href={link.path}
							key={link.title}
							onClick={closeMenu}
							path={link.path}
							currentPath={`/${location.hash}`}
							// using this callback ref to store the current nav link element in the navLinksRef array
							ref={currentElement => (navLinksRef.current[index] = currentElement)}
							variants={navLinkVariants}
							onAnimationComplete={() => {
								// don't remove the inline style when the screen is not medium-sized
								if (!isMediumScreen) return;
								// removing the lingering style (inline style that is staying after an animation) attribute of the nav link
								navLinksRef.current[index].removeAttribute('style');
							}}
						>
							{link.title}
						</NavLink>
					))}
				</NavLinksContainer>
				<HamburgerButton shouldShowMenu={shouldShowMenu} toggleMenu={toggleMenu} />
			</NavContent>
		</Nav>
	);
}

/* Wrapping the Navbar component with React.memo() to prevent it from getting re-rendered
when reach router's location object changes due to clicking on a nav link.
When a nav link is being clicked, the url path is changing, hence the location object is changing.
Reach router passes location, history, and matches props to the component it wraps (in this case, the entire app).
This is why, when the location prop changes, the entire app is getting re-rendered.

Preventing the re-render of Navbar component is important because the removed inline style
of each nav link is coming back when Navbar is re-rendering. */
export default React.memo(Navbar);

const Nav = styled.nav`
	position: ${props => (props.heroSectionInView ? 'absolute' : 'fixed')};
	background-color: ${props =>
		props.heroSectionInView ? 'transparent' : stylesConfig.navBackgroundColor};
	width: 100%;
	z-index: 10;
	transition: background-color 0.6s;
`;

const NavContent = styled.div`
	padding: ${stylesConfig.layoutHorizontalPadding};
	width: 100%;
	max-width: ${stylesConfig.sectionMaxWidth};
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoWrapper = styled(Link)`
	img {
		width: 7rem;
	}
`;

const NavLinksContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: fixed;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;

	background-color: ${stylesConfig.navBackgroundColor};
	z-index: 10;
	opacity: 0;
	transform: translateX(100vw);

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		all: unset;
	}
`;
const NavLink = styled(motion.a)`
	opacity: 0;
	transform: translateX(100vw);
	outline: none;
	font-size: 3rem;
	/* style to show active link */
	color: ${props =>
		props.currentPath === props.path ? stylesConfig.colorPrimaryLight : stylesConfig.bodyFontColor};

	:not(:last-child) {
		margin-bottom: 3rem;

		@media only screen and (min-width: ${stylesConfig.bpMedium}) {
			margin-bottom: 0;
			margin-right: 3rem;
		}
	}

	:focus-visible {
		color: ${stylesConfig.colorPrimaryLight};
		text-shadow: ${stylesConfig.glowEffect};
	}

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		opacity: 1;
		transform: translateX(0);
		transition: color 0.3s, text-shadow 0.3s;
		font-size: 2rem;
	}

	@media only screen and (hover: hover) and (pointer: fine) {
		&:hover {
			color: ${stylesConfig.colorPrimaryLight};
		}
	}
`;
