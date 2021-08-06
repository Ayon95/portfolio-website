import React from 'react';
import SectionWrapper from '../../generic/SectionWrapper';
import Project from './Project';

const projects = [
	{
		title: 'Memories',
		description:
			"A social-media application that allows users to share their memorable moments, or popular places they have visited. They can also like and comment on other people's posts. Give it a try with these fake credentials (email: john123@email.com, password: john123).",
		technologiesUsed: [
			'TypeScript',
			'React',
			'styled components',
			'Redux Toolkit',
			'Express',
			'MongoDB',
		],
		image: {
			name: 'memories-mockup',
			alt: 'laptop and mobile mockup of Memories app',
		},
	},

	{
		title: 'Birthday Reminder',
		description:
			'A React application that allows users to save birthdays of people that they want to remember. It tells a user if there is any birthday today, and also if there are any upcoming birthdays. Give it a try with these fake credentials (email: dummy123@email.com, password: dummy456) ',
		technologiesUsed: ['React', 'Sass', 'Firebase'],
		image: {
			name: 'birthday-reminder-mockup',
			alt: 'laptop and mobile mockup of Birthday Reminder app',
		},
	},
];

function Projects() {
	return (
		<SectionWrapper title="Projects" id="projects">
			{projects.map(project => (
				<Project key={project.title} project={project} />
			))}
		</SectionWrapper>
	);
}

export default Projects;
