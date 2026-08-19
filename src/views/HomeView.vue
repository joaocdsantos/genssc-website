<template>
  <Hero />
  <DividerBar />
  <div class="home-cards-row">
    <CardHistory />
    <CardMembership />
    <CardLocation />
  </div>
  <DividerBar />
  <CardContact />
  <DividerBar />
  <CardSponsors />
  <DividerBar />
</template>

<style scoped>
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
    align-items: stretch;
  }
  .home-cards-row > * {
    flex: 1 1 0;
    max-width: 400px;
    min-width: 300px;
    min-height: 420px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
}
</style>

<script setup>
import DividerBar from '../components/DividerBar.vue';
import Hero from '../components/Hero.vue';
import CardHistory from '../components/CardHistory.vue';
import CardMembership from '../components/CardMembership.vue';
import CardLocation from '../components/CardLocation.vue';
import CardContact from '../components/CardContact.vue';
import CardSponsors from '../components/CardSponsors.vue';
</script>
