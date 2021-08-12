import React from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../../services/projectsService';
import SectionWrapper from '../../generic/SectionWrapper';
import Project from './Project';

function Projects() {
	const [projectsSectionRef, projectsSectionInView] = useInView({
		threshold: 0.07,
		root: null,
	});
	return (
		<SectionWrapper
			title="Projects"
			id="projects"
			ref={projectsSectionRef}
			sectionInView={projectsSectionInView}
		>
			{projects.map(project => (
				<Project key={project.title} project={project} />
			))}
		</SectionWrapper>
	);
}

export default Projects;
