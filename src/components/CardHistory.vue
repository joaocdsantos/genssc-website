<template>
	<section class="card" id="clube">
		<h1>A nossa história</h1>
		<picture>
			<source
				srcset="../assets/cards/history/history-card-mobile.webp"
				type="image/webp"
				media="(max-width: 600px)" />
			<source
				srcset="../assets/cards/history/history-card.webp"
				type="image/webp"
				media="(min-width: 601px)" />
			<img
				src="../assets/cards/history/history-card.png"
				alt="equipa antiga do Gens SC"
				loading="lazy" />
		</picture>
		<p>
			O Gens Sport Clube, fundado a 1 de Janeiro de 1925, é uma instituição
			desportiva com uma rica história e um papel significativo ...
		</p>
		<RouterLink to="/clube" class="btn-link">Saber mais</RouterLink>
	</section>
</template>

<style scoped>
	/* needed on scroll to top*/
	section {
		scroll-margin-top: 80px;
	}
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
