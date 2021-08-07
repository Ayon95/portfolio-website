import { useEffect, useState } from 'react';
import stylesConfig from '../style/stylesConfig';
// This custom hook will check whether the current screen matches the specified media query
function useMediaQuery(mediaQueryString) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		// getting a mediaQueryList object based on the specified media query string
		const mediaQueryList = window.matchMedia(mediaQueryString);

		// updating the state variable with the current status of the media query
		if (matches !== mediaQueryList.matches) {
			setMatches(mediaQueryList.matches);
		}

		function updateMediaQueryStatus() {
			setMatches(mediaQueryList.matches);
		}

		// adding an event handler that will get called whenever the media query status changes
		mediaQueryList.addEventListener('change', updateMediaQueryStatus);

		// cleanup function that will remove the event listener
		return () => mediaQueryList.removeEventListener('change', updateMediaQueryStatus);
	}, [mediaQueryString, matches]);

	return matches;
}

// custom hook for determining whether the screen matches the mediq query defined for medium-sized screen
export const useIsMediumScreen = () => useMediaQuery(`(min-width: ${stylesConfig.bpMedium})`);
