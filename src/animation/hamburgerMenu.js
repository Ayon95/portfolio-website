/* How the animation will work (for mobile):
Opening the menu:
- First, the link container will appear
- then each link will appear one after another (stagger effect)

Closing the menu:
- first, each link will disappear one after another
- then the link container will disappear*/

export const navLinksContainerVariants = {
	hidden: {
		x: '100vw',
		opacity: 0,
		transition: { duration: 0.3, when: 'afterChildren', staggerChildren: 0.15 },
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: { delay: 0.3, duration: 0.3, when: 'beforeChildren', staggerChildren: 0.15 },
	},
};

export const navLinkVariants = {
	hidden: {
		x: '100vw',
		opacity: 0,
	},

	visible: { x: 0, opacity: 1 },
};
