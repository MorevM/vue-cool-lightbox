const attributes = ['media', 'srcset', 'sizes', 'src'];

const swapAttributes = (el) => {
	attributes.forEach((attribute) => {
		const dataAttribute = el.dataset[attribute];
		if (dataAttribute) {
			el[attribute] = dataAttribute;
			el.removeAttribute(`data-${attribute}`);
		}
	});
};

const setLoadListeners = (el) => {
	el.addEventListener('load', () => {
		setTimeout(() => el.classList.add('loaded'), 100);
	});
	el.addEventListener('error', () => console.error('Error while loading the resource'));
};

const findChild = (parent, nodeName) => {
	return [...parent.children].find(
		el => el.nodeName === nodeName.toUpperCase(),
	);
};

export default {
	mounted(el) {
		const loadImage = () => {
			const imageElement = findChild(el, 'img');
			const pictureElement = findChild(el, 'picture');
			if (imageElement) {
				setLoadListeners(imageElement);
				swapAttributes(imageElement);
			} else if (pictureElement) {
				const pictureImg = findChild(pictureElement, 'img');
				const pictureSources = [...pictureElement.children].filter(
					child => child.nodeName === 'SOURCE',
				);
				if (pictureImg) {
					setLoadListeners(pictureImg);
					if (pictureSources.length) {
						pictureSources.forEach(source => {
							swapAttributes(source);
						});
					}
					swapAttributes(pictureImg);
				}
			}
		};

		const handleIntersect = (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					loadImage();
					observer.unobserve(el);
				}
			});
		};

		const createObserver = () => {
			const options = {
				root: null,
				threshold: '0',
			};
			const observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(el);
		};

		if (window.IntersectionObserver) {
			createObserver();
		} else {
			loadImage();
		}
	},
};
