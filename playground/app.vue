<template>
	<div id="app">
		<!-- eslint-disable-next-line vue/no-undef-components -- Globally installed -->
		<cool-light-box
			:items="items"
			:index="index"
			@close="index = null"
		/>

		<div class="images-wrapper">
			<div
				v-for="(image, imageIndex) in items"
				:key="imageIndex"
				class="image"
				:style="{ backgroundImage: 'url(' + image.src + ')' }"
				@click="index = imageIndex"
			></div>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'app',
		components: {},

		data() {
			return {
				items: [
					{
						title: 'Rocky mountain under blue and white sky',
						description: 'Photo by Guillaume Briard',
						src: 'https://www.cheatsheet.com/wp-content/uploads/2019/04/Planet-Earth.jpg',
					},
					{
					    src: 'https://www.youtube.com/watch?v=f7N0yns4CAU',
					    autoplay: true,
					},
					{
					    src: 'https://vk.ru/video-130940568_456239281',
					    autoplay: true,
					},
					{
					    src: 'https://vk.ru/video/@volhovec_official?z=video-130940568_456239045%2Fclub130940568',
					},
					{
					    src: 'https://play.boomstream.com/oUY6fsRa',
					    autoplay: true,
					},
				],
				index: null,
			};
		},

		methods: {},
	});
</script>

<style>
.images-wrapper {
  display: flex;
}

.image {
  height: 300px;
  width: 300px;
  display: block;
  background-color: red;
}
</style>
