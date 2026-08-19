<template>
	<div class="card" :style="cardStyle">
		<h2>{{ title }}</h2>
		<picture>
			<source :srcset="mobileSource" type="image/webp" media="(max-width: 600px)" />
			<source :srcset="desktopSource" type="image/webp" media="(min-width: 601px)" />
			<img :src="fallbackImage" :alt="title" class="card-image" loading="lazy" />
		</picture>

		<div class="card-content">
			<p>{{ address }}</p>
			<small>{{ zip }}</small>

			<a
				:href="mapLink"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-link"
				><MapPinHouse class="marker-icon" /> Google Maps
			</a>
		</div>
	</div>
</template>

<script setup>
	import { MapPinHouse } from "lucide-vue-next";
	import { computed } from "vue";

	const props = defineProps({
		title: String,
		address: String,
		zip: String,
		mapsQuery: String,
		color: String,
		backgroundColor: String,
		mobileSource: String,
		desktopSource: String,
		fallbackImage: String,
	});

	const mapLink = computed(
		() => `https://www.google.com/maps?q=${encodeURIComponent(props.mapsQuery)}`
	);

	const cardStyle = computed(() => ({
		color: props.color,
		backgroundColor: props.backgroundColor,
	}));
</script>

<style scoped>
	.card {
		width: 100%;
		text-align: center;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card-content {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.6rem;
	}
	.card-image {
		width: 100%;
		max-width: 300px;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 12px;
		margin-bottom: 1.2rem;
	}
	.card h2 {
		font-size: 1.3rem;
		text-align: center;
		margin-bottom: 1.2rem;
	}

	.card a {
		text-decoration: none;
	}

	.btn-link {
		margin-top: 1.5rem;
	}

	@media (min-width: 900px) {
		.btn-link {
			margin-top: auto;
		}
	}

	.inline-icon {
		vertical-align: middle;
		display: inline-flex;
		margin-left: 4px;
		width: 1em;
		height: 1em;
	}

	.marker-icon {
		width: 1.2em;
		height: 1.2em;
		margin-right: 6px;
		vertical-align: middle;
	}
</style>
