export default function viewport(element: Element, params={}) {
	let intersectionObserver: IntersectionObserver;
	

	function setObserver(root: HTMLElement | null) {
		// if (intersectionObserver) intersectionObserver.disconnect();
	  intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
					entry.target.dispatchEvent(new CustomEvent(eventName, {detail: entry}));
				});
			},
			{
				root: root,
				threshold: 1
			}
		);

		intersectionObserver.observe(element)
	}

	setObserver(null)

	return {
		update(){
			setObserver(null)
		},
		destroy() {
			if(intersectionObserver){
				intersectionObserver.disconnect()
			}
		}
	}
}




// export default function viewport(element: Element, params={}) {
// 	
	
// 	ensureIntersectionObserver(element.parentElement);

// 	intersectionObserver.observe(element);

// 	return {
// 		update(params) {
			
// 		},
// 		destroy() {
// 			// intersectionObserver.unobserve(element);
// 			intersectionObserver.disconnect()
// 			
// 			
			
			
// 		}
// 	}
// }