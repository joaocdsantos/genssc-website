<template>
	<div class="card">
		<h2>Mapa</h2>
		<div ref="mapContainer" class="map-container"></div>
	</div>
</template>

<script setup>
	import { onMounted, onBeforeUnmount, ref } from "vue";
	import maplibregl from "maplibre-gl";
	import "maplibre-gl/dist/maplibre-gl.css";

	const props = defineProps({
		markers: {
			type: Array,
			required: true,
		},
	});

	const mapContainer = ref(null);
	let map;

	onMounted(() => {
		map = new maplibregl.Map({
			container: mapContainer.value,
			style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
			center: [props.markers[0].lng, props.markers[0].lat],
			zoom: 14,
		});

		const bounds = new maplibregl.LngLatBounds();

		props.markers.forEach(marker => {
			new maplibregl.Marker({ color: marker.color })
				.setLngLat([marker.lng, marker.lat])
				.setPopup(new maplibregl.Popup().setHTML(`<strong>${marker.label}</strong>`))
				.addTo(map);
			bounds.extend([marker.lng, marker.lat]);
		});

		map.fitBounds(bounds, { padding: 80, maxZoom: 14 });
	});

	onBeforeUnmount(() => {
		map?.remove();
	});
</script>

<style scoped>
	.card {
		width: 100%;
		color: var(--green);
		background: var(--white);
		text-align: center;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card h2 {
		font-size: 1.3rem;
		margin-bottom: 1.2rem;
	}
	.map-container {
		width: 100%;
		flex: 1;
		min-height: 260px;
		border-radius: 12px;
		overflow: hidden;
	}
</style>
