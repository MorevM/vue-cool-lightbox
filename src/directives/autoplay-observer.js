const isYoutubeVideo = (url) => {
	// youtube data
	const youtubeRegex = /^(?:https?:\/\/)?(?:w{3}\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))(([\w\-]){11})\S*$/;
	const ytId = (url.match(youtubeRegex)) ? RegExp.$1 : false;

	if (ytId) {
		return true;
	}

	return false;
};

export default {
	inserted: (el) => {
		const autoplayVideo = () => {
			const { tagName } = el;
			const { autoplay } = el.dataset;
			if (!autoplay) return;

			if (tagName === 'VIDEO') {
				el.muted = true;
				el.autoplay = true;

				return;
			}

			if (tagName === 'IFRAME') {
				const url = new URL(el.src);
				let muted = 'muted';

				if (isYoutubeVideo(el.src)) {
					muted = 'mute';
				}

				// append autoplay
				url.searchParams.append(muted, 1);
				url.searchParams.append('autoplay', 1);

				el.src = url.href;
			}
		};

		const handleIntersect = (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					autoplayVideo();
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
			// loadImage(); // Smth missed in the original repo
		}
	},
};
