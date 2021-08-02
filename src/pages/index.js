import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import GlobalStyles from '../style/GlobalStyles';

export default function Home() {
	return (
		<div id="app">
			<GlobalStyles />
			<Layout>
				<Hero />
			</Layout>
		</div>
	);
}
