import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import stylesConfig from '../../style/stylesConfig';

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function Snackbar({ snackbar, setSnackbar }) {
	// make the snackbar disappear after 3 seconds
	useEffect(() => {
		const snackbarTimerId = setTimeout(() => {
			setSnackbar({ shouldShow: false, type: '', message: '' });
		}, 3000);

		// cleanup -> clear the timer
		return () => clearTimeout(snackbarTimerId);
	}, [setSnackbar]);

	return (
		<SnackbarComponent
			type={snackbar.type}
			variants={variants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{snackbar.message}
		</SnackbarComponent>
	);
}

export default Snackbar;

const SnackbarComponent = styled(motion.p)`
	position: fixed;
	width: 88%;
	max-width: 51rem;
	bottom: 5rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 1rem 2rem;
	border-radius: 4px;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
	text-align: center;
	color: #eee;
	background-color: ${props =>
		props.type === 'success' ? stylesConfig.colorSuccess : stylesConfig.colorError};
`;
