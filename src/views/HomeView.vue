<template>
	<Hero />
	<div class="red-bar"></div>
	<div class="home-cards-row">
		<CardHistory />
		<CardMembership />
		<CardLocation />
	</div>
	<div class="red-bar"></div>

	<CardContact />
	<div class="red-bar"></div>

	<CardSponsors />
	<div class="red-bar"></div>

	<CardSocialMedia />
</template>

<style scoped>
	.red-bar {
		width: 100%;
		height: 20px;
		background: var(--red);
		margin: 0;
		border-radius: 4px;
	}
	.home-cards-row {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
		align-items: stretch;
	}

	@media (min-width: 900px) {
		.home-cards-row {
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
		}
		.home-cards-row > * {
			flex: 1 1 0;
			max-width: 400px;
			min-width: 300px;
			min-height: 420px;
			height: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}
	}
</style>

<script setup>
	import Hero from "../components/Hero.vue";
	import CardHistory from "../components/CardHistory.vue";
	import CardMembership from "../components/CardMembership.vue";
	import CardLocation from "../components/CardLocation.vue";
	import CardContact from "../components/CardContact.vue";
	import CardSponsors from "../components/CardSponsors.vue";
	import CardSocialMedia from "../components/CardSocialMedia.vue";
</script>
