<template>
	<section class="card" id="localizacao">
		<h1>Localização</h1>

		<picture>
			<source
				srcset="../assets/cards/location/location-card-mobile.webp"
				type="image/webp"
				media="(max-width: 600px)" />
			<source
				srcset="../assets/cards/location/location-card.webp"
				type="image/webp"
				media="(min-width: 601px)" />
			<img
				src="../assets/cards/location/location-card.png"
				alt="mapa cartoon"
				loading="lazy" />
		</picture>
		<p>Consulta aqui como podes chegar às nossas instalações.</p>
		<RouterLink to="/localizacao" class="btn-link">Obter direções</RouterLink>
	</section>
</template>

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
		padding-bottom: 40px;
	}
	.card h1 {
		margin-bottom: 1rem;
	}
	.card p {
		margin-top: 1rem;
		max-width: 850px;
		text-align: justify;
	}
	picture {
		display: block;
		margin: 0 auto;
		max-width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 8px;
		opacity: 0.8;
	}
	@media (min-width: 601px) {
		picture {
			max-width: 700px;
		}
	}
</style>
