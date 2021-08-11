import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import stylesConfig from '../../../style/stylesConfig';
import HamburgerButton from './HamburgerButton';
import {
	navLinksContainerVariants,
	navLinkVariants,
} from '../../../services/animationService/hamburgerMenu';
import logo from '../../../assets/images/logo-portfolio.png';
import { useIsMediumScreen } from './../../../hooks/useMediaQuery';

const navbarLinks = [
	{ title: 'Projects', path: '/#projects' },
	{ title: 'Skills', path: '/#skills' },
	{ title: 'About', path: '/#about' },
	{ title: 'Contact', path: '/#contact' },
];

function Navbar({ heroSectionInView }) {
	const [shouldShowMenu, setShouldShowMenu] = useState(false);
	// isMediumScreen will be true when the viewport width is at least the width specified for medium-sized screens
	const isMediumScreen = useIsMediumScreen();

	const location = useLocation();

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
		<Nav heroSectionInView={heroSectionInView}>
			<NavContent>
				<LogoWrapper to="/">
					<img src={logo} alt="Website logo" />
				</LogoWrapper>
				{isMediumScreen && (
					<NavLinksContainer>
						{navbarLinks.map(link => (
							<NavLink
								href={link.path}
								key={link.title}
								path={link.path}
								currentPath={`/${location.hash}`}
							>
								{link.title}
							</NavLink>
						))}
					</NavLinksContainer>
				)}
				{/* render the animated versions (animated hamburger menu) when the viewport width is smaller than that specified for medium-sized screens */}
				{!isMediumScreen && (
					<AnimatedNavLinksContainer
						variants={navLinksContainerVariants}
						initial="hidden"
						animate={shouldShowMenu ? 'visible' : 'hidden'}
					>
						{navbarLinks.map(link => (
							<AnimatedNavLink
								href={link.path}
								key={link.title}
								onClick={toggleMenu}
								path={link.path}
								currentPath={`/${location.hash}`}
								variants={navLinkVariants}
							>
								{link.title}
							</AnimatedNavLink>
						))}
					</AnimatedNavLinksContainer>
				)}
				<HamburgerButton shouldShowMenu={shouldShowMenu} toggleMenu={toggleMenu} />
			</NavContent>
		</Nav>
	);
}

export default Navbar;

const commonNavLinkStyles = css`
	outline: none;
	/* style to show active link */
	color: ${props =>
		props.currentPath === props.path ? stylesConfig.colorPrimaryLight : stylesConfig.bodyFontColor};

	&:focus-visible {
		color: ${stylesConfig.colorPrimaryLight};
		text-shadow: ${stylesConfig.glowEffect};
	}
`;

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

const NavLinksContainer = styled.div``;

const AnimatedNavLinksContainer = styled(motion.div)`
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

	@media only screen and (min-width: ${stylesConfig.bpMedium}) {
		all: unset;
	}
`;

const NavLink = styled.a`
	${commonNavLinkStyles}

	font-size: 2rem;
	transition: color 0.3s, text-shadow 0.3s;

	&:not(:last-child) {
		margin-right: 3rem;
	}

	@media only screen and (hover: hover) and (pointer: fine) {
		&:hover {
			color: ${stylesConfig.colorPrimaryLight};
		}
	}
`;

const AnimatedNavLink = styled(motion.a)`
	${commonNavLinkStyles}

	font-size: 2.6rem;

	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;
