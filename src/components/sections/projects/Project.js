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
					<div>
						<Button text="Website" isExternalLink={true} url={project.websiteLink} />
					</div>
					{project.githubLink && (
						<div>
							<Button text="GitHub" isExternalLink={true} url={project.githubLink} />
						</div>
					)}
				</ButtonsContainer>
			</TextContent>
		</ProjectContainer>
	);
}

export default Project;

const ProjectContainer = styled.div`
	background-image: radial-gradient(
		ellipse 75% 80% at 50% 0%,
		hsl(${stylesConfig.colorPrimaryLight} / 0.25),
		hsl(${stylesConfig.colorCardBackground} / 0.3)
	);
	border: 1px solid hsl(${stylesConfig.colorPrimaryLight} / 0.2);
	padding: ${stylesConfig.projectLayoutSpacing};
	border-radius: 1.6rem;

	&:not(:last-child) {
		margin-bottom: 3rem;
	}

	@media only screen and (max-width: ${stylesConfig.bpLarge}) {
		text-align: center;
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
		margin-bottom: 1.2rem;
	}

	p {
		max-width: 60ch;

		@media only screen and (max-width: ${stylesConfig.bpLarge}) {
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

const TechnologiesUsedContainer = styled.div`
	margin: ${stylesConfig.projectLayoutSpacing} 0;
	h4 {
		margin-bottom: 2rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 1.4rem;

		@media only screen and (max-width: ${stylesConfig.bpLarge}) {
			justify-content: center;
		}
	}

	li {
		color: ${stylesConfig.bodyFontColor};
		background-color: hsl(${stylesConfig.colorPrimary} / 0.3);
		padding: 1rem 1.6rem;
		border-radius: 5px;
	}
`;

const ButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(max-content, 13rem));
	column-gap: 1rem;
	row-gap: 2rem;

	@media only screen and (max-width: ${stylesConfig.bpLarge}) {
		justify-content: center;
	}
`;
