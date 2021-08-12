import React from 'react';
import styled from 'styled-components';

function Skill({ text, icon: Icon, color }) {
	const iconStyles = { fontSize: '6rem', fill: color, marginBottom: '1.5rem' };
	return (
		<SkillComponent>
			<Icon style={iconStyles} aria-hidden="true" />
			<p>{text}</p>
		</SkillComponent>
	);
}

export default Skill;

const SkillComponent = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-size: 1.8rem;
		text-align: center;
	}
`;
