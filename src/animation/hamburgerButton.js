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
	menuClosed: {
		x: 0,
		transition: {
			duration: halfBarAnimationDuration,
			delay: fullBarAnimationDuration,
		},
	},
};

// this function will return the animation target object for full bar when the menu should be opened
export function animateFullBarOpen(rotate, y) {
	return {
		rotate,
		y,
		transition: {
			delay: halfBarAnimationDuration,
			duration: fullBarAnimationDuration,
		},
	};
}

// this function will return the animation target object for half bar when the menu should be opened
export function animateHalfBarOpen(x) {
	return {
		x,
		transition: { duration: halfBarAnimationDuration },
	};
}
