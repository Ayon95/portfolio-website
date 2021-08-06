import React from 'react';
import { projects } from '../../../services/projectsService';
import SectionWrapper from '../../generic/SectionWrapper';
import Project from './Project';

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
