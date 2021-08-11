import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import stylesConfig from '../../../style/stylesConfig';
import Button from './../../generic/Button';

function Project({ project }) {
	/* The query will return a data object containing allFile property.
    allFile is an object containing a 'nodes' property, and 'nodes' is an array of objects containing
    two properties -> relativePath, and childImageSharp.
    */
	const data = useStaticQuery(graphql`
		query ProjectImagesQuery {
			allFile {
				nodes {
					relativePath
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 50)
					}
				}
			}
		}
	`);
	/*
    Selecting the node that corresponds with the specified project
    If the image name is included in relative path, then that is the appropriate project node.

    For example, for the image of memories app, relative path would be "memories-mockup.png", and image name would be "memories-mockup"
    In this case, I am keeping the node for memories image only, and then destructuring it from the array
     */
	const [projectNode] = data.allFile.nodes.filter(node =>
		node.relativePath.includes(project.image.name)
	);

	return (
		<ProjectContainer>
			<Image
				image={projectNode.childImageSharp.gatsbyImageData}
				imgStyle={{ objectFit: 'contain' }}
				alt={project.image.alt}
			/>
			<TextContent>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<TechnologiesUsedContainer>
					<h4>Technologies Used</h4>
					<ul>
						{project.technologiesUsed.map(technology => (
							<li key={technology}>{technology}</li>
						))}
					</ul>
				</TechnologiesUsedContainer>
				<ButtonsContainer>
					<Button
						text="Live Website"
						isExternalLink={true}
						url={project.websiteLink}
						style={{ fontSize: '1.8rem' }}
					/>
					<Button
						text="GitHub Repo"
						isExternalLink={true}
						url={project.githubLink}
						style={{ fontSize: '1.8rem' }}
					/>
				</ButtonsContainer>
			</TextContent>
		</ProjectContainer>
	);
}

export default Project;

const ProjectContainer = styled.div`
	background-color: #2b293b;
	padding: ${stylesConfig.projectLayoutSpacing};
	border-radius: 1rem;
	box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;

	&:not(:last-child) {
		margin-bottom: 3rem;
	}

	@media only screen and (min-width: ${stylesConfig.bpLarge}) {
		display: flex;

		& > * {
			flex: 1;
		}
	}
`;
const Image = styled(GatsbyImage)`
	margin-bottom: ${stylesConfig.projectLayoutSpacing};

	@media only screen and (min-width: ${stylesConfig.bpLarge}) {
		margin-right: ${stylesConfig.projectLayoutSpacing};
	}
`;
const TextContent = styled.div`
	h3 {
		text-align: center;
		margin-bottom: ${stylesConfig.projectLayoutSpacing};
	}

	p {
		max-width: 60ch;
		margin: 0 auto;
	}
`;

const TechnologiesUsedContainer = styled.div`
	margin: ${stylesConfig.projectLayoutSpacing} 0;
	h4 {
		text-align: center;
		margin-bottom: ${stylesConfig.projectLayoutSpacing};
	}

	ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, 15rem);
		gap: 1rem;
		justify-content: center;
	}

	li {
		color: ${stylesConfig.bodyFontColor};
		background-color: ${stylesConfig.bodyBackgroundColor};
		padding: 1rem;
		border-radius: 4px;
		font-size: 1.8rem;
		text-align: center;
		justify-content: center;
		display: flex;
		align-items: center;
	}
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 16rem));
	justify-content: center;
	column-gap: 1rem;
	row-gap: 2rem;
`;
