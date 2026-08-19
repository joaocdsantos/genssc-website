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

:deep(.home-card) {
  padding: 2rem 1.5rem 2.5rem;
}

:deep(.home-card picture) {
  width: min(100%, 260px);
  height: 180px;
  max-width: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.home-card picture img) {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}

:deep(.home-card .card-content) {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

:deep(.home-card .card-content p) {
  margin: 1rem 0 0;
  min-height: 4.5rem;
}

:deep(.home-card .card-content .slogan) {
  min-height: auto;
}

@media (max-width: 899px) {
  :deep(.home-card) {
    padding-inline: 1rem;
  }

  :deep(.home-card picture) {
    height: 200px;
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
