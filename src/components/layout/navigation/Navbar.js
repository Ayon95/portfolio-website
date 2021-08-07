import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';
import HamburgerButton from './HamburgerButton';
import { navLinksContainerVariants, navLinkVariants } from '../../../animation/hamburgerMenu';

const navbarLinks = [
	{ title: 'Projects', url: '/#projects' },
	{ title: 'Skills', url: '/#skills' },
	{ title: 'About', url: '/#about' },
	{ title: 'Contact', url: '/#contact' },
];

function Navbar() {
	const [shouldShowMenu, setShouldShowMenu] = useState(false);

	function toggleMenu() {
		setShouldShowMenu(state => !state);
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
				initial="hidden"
				animate={shouldShowMenu ? 'visible' : 'hidden'}
			>
				{navbarLinks.map(link => (
					<NavLink to={link.url} key={link.title} onClick={toggleMenu} variants={navLinkVariants}>
						{link.title}
					</NavLink>
				))}
			</NavLinksContainer>
			<HamburgerButton shouldShowMenu={shouldShowMenu} toggleMenu={toggleMenu} />
		</Nav>
	);
}

export default Navbar;

const Nav = styled(motion.nav)`
	padding: ${stylesConfig.layoutHorizontalPadding};
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	z-index: 10;
	background-color: transparent;

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		justify-content: center;
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

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		all: unset;
	}
`;
const NavLink = styled(motion(Link))`
	:not(:last-child) {
		margin-bottom: 3rem;
	}
`;
