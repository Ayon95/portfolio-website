import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';
import HamburgerButton from './HamburgerButton';
import {
	navLinksContainerVariants,
	navLinkVariants,
} from '../../../services/animationService/hamburgerMenu';
import logo from '../../../assets/images/logo-portfolio.png';
import FocusLock from 'react-focus-lock';

const navbarLinks = [
	{ title: 'Projects', path: '/#projects' },
	{ title: 'Skills', path: '/#skills' },
	{ title: 'About', path: '/#about' },
	{ title: 'Contact', path: '/#contact' },
];

function Navbar({ heroSectionInView }) {
	const [shouldShowMenu, setShouldShowMenu] = useState(false);

	// Need a ref to the hamburger button so that it can be programmatically focused when a user closes the hamburger menu by pressing Escape
	const hamburgerButtonRef = useRef();

	function toggleMenu() {
		setShouldShowMenu(state => !state);
	}

	// this event handler will close the opened hamburger menu when the Escape key is pressed
	function handlePressEscape(event) {
		if (shouldShowMenu && event.key === 'Escape') {
			setShouldShowMenu(false);
			// focus on the hamburger button after the menu was closed by pressing Esc
			hamburgerButtonRef.current.focus();
		}
	}

	// disable scrolling on body when the hamburger menu is open
	useEffect(() => {
		if (shouldShowMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [shouldShowMenu]);

	/* Accessibility
	- The FocusLock component will trap focus within the Nav component when the hamburger menu is open
	- The website logo should not be focusable when the hamburger menu is open
	- The nav links in the hamburger menu should only be focusable when the hamburger menu is open
	- The hamburger menu should be hidden to screen readers when it is closed
	*/
	return (
		<NavContainer heroSectionInView={heroSectionInView}>
			<FocusLock disabled={!shouldShowMenu}>
				<Nav>
					<LogoWrapper to="/" tabIndex={shouldShowMenu ? -1 : 0}>
						<img src={logo} alt="Mushfiq Rahman Logo Home" />
					</LogoWrapper>
					<HamburgerButton
						shouldShowMenu={shouldShowMenu}
						toggleMenu={toggleMenu}
						handlePressEscape={handlePressEscape}
						ref={hamburgerButtonRef}
					/>
					<NavLinks>
						{navbarLinks.map(link => (
							<li key={link.title}>
								<NavLink href={link.path}>{link.title}</NavLink>
							</li>
						))}
					</NavLinks>
					<AnimatedNavLinks
						id="navigation menu"
						variants={navLinksContainerVariants}
						initial="hidden"
						animate={shouldShowMenu ? 'visible' : 'hidden'}
						aria-hidden={!shouldShowMenu}
					>
						{navbarLinks.map(link => (
							<li key={link.title}>
								<AnimatedNavLink
									href={link.path}
									onClick={toggleMenu}
									onKeyDown={handlePressEscape}
									tabIndex={shouldShowMenu ? 0 : -1}
									variants={navLinkVariants}
								>
									{link.title}
								</AnimatedNavLink>
							</li>
						))}
					</AnimatedNavLinks>
					{}
				</Nav>
			</FocusLock>
		</NavContainer>
	);
}

export default Navbar;

const NavContainer = styled.header`
	padding: 2rem 3rem;
	position: ${props => (props.heroSectionInView ? 'absolute' : 'fixed')};
	background-color: ${props =>
		props.heroSectionInView ? 'transparent' : `hsl(${stylesConfig.colorCardBackground} / 0.6)`};
	width: 100%;
	z-index: 10;
	transition: background-color 0.6s;
	backdrop-filter: blur(15px);

	${props =>
		!props.heroSectionInView &&
		css`
			border-bottom: 1px solid hsl(${stylesConfig.colorPrimary} / 0.4);
		`}
`;

const Nav = styled.nav`
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

const NavLinks = styled.ul`
	list-style: none;
	display: none;

	li:not(:last-child) {
		margin-right: 3rem;
	}

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		display: flex;
	}
`;
/* render the animated versions (animated hamburger menu) when the viewport width is smaller than that specified for medium-sized screens */
const AnimatedNavLinks = styled(motion.ul)`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: fixed;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;

	background-color: hsl(${stylesConfig.bodyBackgroundColor});
	background-image: radial-gradient(
		ellipse 100% 100% at top,
		hsl(${stylesConfig.colorPrimary} / 0.3),
		hsl(${stylesConfig.bodyBackgroundColor})
	);
	z-index: 10;

	li:not(:last-child) {
		margin-bottom: 3rem;
	}

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		display: none;
	}
`;

const NavLink = styled.a`
	font-size: 1.6rem;
	transition: color 0.3s, text-shadow 0.3s;

	@media only screen and (hover: hover) and (pointer: fine) {
		&:hover {
			color: hsl(${stylesConfig.colorPrimaryLight});
		}
	}
`;

const AnimatedNavLink = styled(motion.a)`
	font-size: 2rem;
`;
