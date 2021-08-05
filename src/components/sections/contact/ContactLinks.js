import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactLink from './ContactLink';

const contactLinks = [
	{ title: 'Send email', url: 'mailto:mushfiqurrahman78@yahoo.com', icon: FaEnvelope },
	{ title: 'View my GitHub', url: 'https://github.com/Ayon95', icon: FaGithub },
	{
		title: 'View my LinkedIn',
		url: 'https://www.linkedin.com/in/mushfiq-rahman-653688203/',
		icon: FaLinkedin,
	},
];

function ContactLinks() {
	return (
		<Container>
			{contactLinks.map(link => (
				<ContactLink key={link.title} title={link.title} url={link.url} icon={link.icon} />
			))}
		</Container>
	);
}

export default ContactLinks;

const Container = styled.div`
	text-align: center;
`;
