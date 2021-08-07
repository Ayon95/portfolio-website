import React from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import Contact from '../components/sections/contact/Contact';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/projects/Projects';
import Skills from '../components/sections/Skills/Skills';
import GlobalStyles from '../style/GlobalStyles';

export default function Home() {
	return (
		<div id="app">
			<GlobalStyles />
			<Layout>
				<Hero />
				<Projects />
				<Skills />
				<About />
				<Contact />
			</Layout>
		</div>
	);
}
