import React from 'react';
import Layout from '../components/layout/Layout';
import Contact from '../components/sections/contact/Contact';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills/Skills';
import GlobalStyles from '../style/GlobalStyles';

export default function Home() {
	return (
		<div id="app">
			<GlobalStyles />
			<Layout>
				<Hero />
				<Skills />
				<Contact />
			</Layout>
		</div>
	);
}
