module.exports = {
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images/`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `documents`,
				path: `${__dirname}/src/assets/documents/`,
			},
		},

		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /icons/,
				},
			},
		},
	],
	siteMetadata: {
		title: 'Mushfiq Rahman | Web Development',
		description: 'Portfolio website of Mushfiq Rahman',
		author: 'Mushfiq Rahman',
		contact: 'mushfiqurrahman78@yahoo.com',
	},
};
