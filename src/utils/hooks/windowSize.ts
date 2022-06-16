import { useState, useEffect } from 'react';

export const useWindow = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowProps, setWindowProps] = useState<any>({ width: undefined, height: undefined, search: '' });

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== 'undefined') {
			// Handler to call on window resize
			const handleResize = () => {
				// Set window width/height to state
				setWindowProps({
					width: window.innerWidth,
					height: window.innerHeight,
					search: window.location.search
				});
			};

			// Add event listener
			window.addEventListener('resize', handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	return windowProps;
};
