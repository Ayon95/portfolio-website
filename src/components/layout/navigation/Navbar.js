import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';
import HamburgerButton from './HamburgerButton';
import { navLinksContainerVariants, navLinkVariants } from '../../../animation/hamburgerMenu';
import { useIsMediumScreen } from './../../../hooks/useMediaQuery';

const navbarLinks = [
	{ title: 'Projects', url: '/#projects' },
	{ title: 'Skills', url: '/#skills' },
	{ title: 'About', url: '/#about' },
	{ title: 'Contact', url: '/#contact' },
];

function Navbar() {
	const [shouldShowMenu, setShouldShowMenu] = useState(false);

	const isMediumScreen = useIsMediumScreen();

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
		<Nav>
			<NavLinksContainer
				variants={navLinksContainerVariants}
				animate={getNavLinksContainerAnimation()}
			>
				{navbarLinks.map(link => (
					<NavLink to={link.url} key={link.title} onClick={closeMenu} variants={navLinkVariants}>
						{link.title}
					</NavLink>
				))}
			</NavLinksContainer>
			<HamburgerButton shouldShowMenu={shouldShowMenu} toggleMenu={toggleMenu} />
		</Nav>
	);
}

export default Navbar;

const Nav = styled.nav`
	position: fixed;
	padding: ${stylesConfig.layoutHorizontalPadding};
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	z-index: 10;

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		justify-content: center;
		box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
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

	background-image: ${stylesConfig.backgroundGradient};
	z-index: 10;
	opacity: 0;
	transform: translateX(100vw);

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		all: unset;
	}
`;
const NavLink = styled(motion(Link))`
	opacity: 0;
	transform: translateX(100vw);
	font-size: 3rem;

	:not(:last-child) {
		margin-bottom: 3rem;
	}

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		opacity: 1;
		transform: translateX(0);

		margin-bottom: 0;
		font-size: 2.2rem;

		:not(:last-child) {
			margin-right: 3rem;
		}
	}
`;
