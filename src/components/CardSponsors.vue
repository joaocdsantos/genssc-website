<template>
	<section class="card">
		<h2>Parceiros e Patrocinadores</h2>
		<div class="sponsor-logos">
			<img
				v-for="sponsor in sponsors"
				:key="sponsor.src"
				:src="sponsor.src"
				:alt="sponsor.alt"
				loading="lazy" />
		</div>
	</section>
</template>

<script setup>
	import { ref, onMounted } from "vue";

	const sponsors = ref([]);

	const sponsorNames = {
		"1afp_logo": "Associação de Futebol do Porto",
		"2fpf_logo": "Federação Portuguesa de Futebol",
		"3jffoz-do-sousa-e-covelo_logo": "Junta de Freguesia de Foz do Sousa e Covelo",
		"4cmgondomar_logo": "Câmara Municipal de Gondomar",
	};

	const loadSponsors = async () => {
		try {
			const imagesContext = import.meta.glob("../assets/sponsors/*.webp");

			sponsors.value = await Promise.all(
				Object.keys(imagesContext).map(async (path) => {
					const module = await imagesContext[path]();
					const key = path.split("/").pop().replace(/\.[^/.]+$/, "");
					return { src: module.default, alt: sponsorNames[key] ?? "Patrocinador" };
				})
			);
		} catch (error) {
			console.error("Erro ao carregar Patrocinadores", error);
		}
	};

	onMounted(loadSponsors);
</script>

<style scoped>
	.card {
		width: 100%;
		background: var(--white);
		text-align: center;
		padding: 2rem 1rem;
	}

	.card h2 {
		color: var(--green);
		font-size: 1.3rem;
		margin-bottom: 1.5rem;
	}

	.sponsor-logos {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}

	.sponsor-logos img {
		border-radius: 0;
		width: auto;
		height: 60px;
		max-width: 160px;
		object-fit: contain;
		transition: transform 0.2s ease;
	}

	.sponsor-logos img:hover {
		transform: scale(1.08);
	}
</style>
