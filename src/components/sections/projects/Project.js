import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import stylesConfig from '../../../style/stylesConfig';

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
			<Image image={projectNode.childImageSharp.gatsbyImageData} alt={project.image.alt} />
			<TextContent>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
			</TextContent>
		</ProjectContainer>
	);
}

export default Project;

const ProjectContainer = styled.div`
	background-color: #2b293b;
	padding: 4rem;
	border-radius: 1rem;
	&:not(:last-child) {
		margin-bottom: 3rem;
	}
`;
const Image = styled(GatsbyImage)`
	margin-bottom: 4rem;
`;
const TextContent = styled.div`
	h3 {
		font-size: 2.6rem;
		text-align: center;
		margin-bottom: 2rem;
	}
	p {
		font-size: 1.8rem;
	}
`;
