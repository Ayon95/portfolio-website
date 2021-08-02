import React from 'react';
import styled from 'styled-components';
import TypewriterComponent from 'typewriter-effect';
import stylesConfig from '../../style/stylesConfig';
import Button from '../generic/Button';

function Hero() {
	return (
		<Container>
			<HeroContent>
				<h1>
					<TypewriterComponent
						options={{
							strings: ["Hi, I'm Mushfiq Rahman", 'Welcome to my website'],
							autoStart: true,
							loop: true,
						}}
					/>
				</h1>
				<p>
					A web developer with a passion for creating wonderful interactive experiences on the web.{' '}
				</p>
				<Button text="View Projects" isLink={true} />
			</HeroContent>
		</Container>
	);
}

export default Hero;

const Container = styled.section`
	height: 100vh;
	padding: ${stylesConfig.sectionVerticalPadding} 0;
	display: flex;
	align-items: center;
`;

const HeroContent = styled.div`
	h1 {
		font-size: 4.8rem;
		margin-bottom: 2rem;
	}

	p {
		max-width: 35ch;
		font-size: 2.4rem;
		margin-bottom: 4rem;
	}
`;

const TextContainer = styled.div``;
