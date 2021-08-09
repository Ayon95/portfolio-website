import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FadeInWhenInView({ children }) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 150 },
	};

	useEffect(() => {
		// start the 'visible' animation when the target element is in view
		if (inView) controls.start('visible');
		else controls.start('hidden');
	}, [inView, controls]);
	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={variants}
			transition={{ ease: 'easeOut', duration: 1 }}
		>
			{children}
		</motion.div>
	);
}

export default FadeInWhenInView;
