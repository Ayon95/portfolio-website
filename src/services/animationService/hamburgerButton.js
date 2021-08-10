/* How the hamburger button animation will work:
Opening the hamburger menu
	- When the button is clicked, first the two half bars will animate (duration 0.3s)
	- then, the two half bars will disappear (their container's opacity will become 0), and the two full bars will animate
	
Closing the hamburger menu
	- When the button is clicked, first the two full bars will animate
	- then, the half bars will appear (their container's opacity will be 1), and the half bars will animate
*/

const halfBarAnimationDuration = 0.3;
const fullBarAnimationDuration = 0.3;

export const fullBarVariants = {
	// this is a dynamic variant; it's a function that accepts an argument and returns an animation target object
	// you can pass the argument via a motion component's 'custom' prop
	menuOpen: values => ({
		rotate: values.rotate,
		y: values.y,
		transition: {
			delay: halfBarAnimationDuration,
			duration: fullBarAnimationDuration,
		},
	}),

	menuClosed: {
		rotate: 0,
		y: 0,
		transition: {
			duration: fullBarAnimationDuration,
		},
	},
};

export const halfBarContainerVariants = {
	menuOpen: {
		opacity: 0,
		transition: { delay: halfBarAnimationDuration },
	},

	menuClosed: {
		opacity: 1,
		transition: { delay: fullBarAnimationDuration },
	},
};

export const halfBarVariants = {
	menuOpen: x => ({
		x,
		transition: { duration: halfBarAnimationDuration },
	}),

	menuClosed: {
		x: 0,
		transition: {
			duration: halfBarAnimationDuration,
			delay: fullBarAnimationDuration,
		},
	},
};
