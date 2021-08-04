import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Navbar from '../components/navigation/Navbar';
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
