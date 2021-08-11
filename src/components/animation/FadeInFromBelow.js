import React from 'react';
import { motion } from 'framer-motion';

const variants = {
	hidden: {
		y: 60,
		opacity: 0,
	},

	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, delay: 3.2, ease: 'easeOut' },
	},
};

function FadeInFromBelow({ children }) {
	return (
		<motion.div variants={variants} initial="hidden" animate="visible">
			{children}
		</motion.div>
	);
}

export default FadeInFromBelow;
