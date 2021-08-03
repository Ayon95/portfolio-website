import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import {
	SiJavascript,
	SiTypescript,
	SiStyledComponents,
	SiGatsby,
	SiMongodb,
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import Skill from './Skill';
import SectionWrapper from '../../generic/SectionWrapper';

const skills = [
	{ text: 'HTML5', icon: FaHtml5, color: '#f05a1a' },
	{ text: 'CSS3', icon: FaCss3Alt, color: '#2965f1' },
	{ text: 'Sass', icon: FaSass, color: '#c752a6' },
	{ text: 'Responsive Design', icon: MdDevices, color: '#4ddbb3' },
	{ text: 'JavaScript', icon: SiJavascript, color: '#e3e017' },
	{ text: 'TypeScript', icon: SiTypescript, color: '#2a74d4' },
	{ text: 'React', icon: FaReact, color: '#61dafb' },
	{ text: 'styled components', icon: SiStyledComponents, color: '#c74eab' },
	{ text: 'Gatsby', icon: SiGatsby, color: '#663399' },
	{ text: 'Node.js', icon: FaNodeJs, color: '#3e863d' },
	{ text: 'MongoDB', icon: SiMongodb, color: '#13aa52' },
	{ text: 'Git', icon: FaGitAlt, color: '#f14e32' },
	{ text: 'npm', icon: FaNpm, color: '#cb3837' },
];

function Skills() {
	return (
		<SectionWrapper title="Skills">
			<SkillsList>
				{skills.map(({ text, icon, color }) => (
					<Skill text={text} icon={icon} color={color} />
				))}
			</SkillsList>
		</SectionWrapper>
	);
}

export default Skills;

const SkillsList = styled.ul`
	list-style: none;
	display: grid;
	justify-content: center;
	gap: 4rem;
	grid-template-columns: repeat(auto-fill, 12rem);
`;