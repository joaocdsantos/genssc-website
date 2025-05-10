<template>
  <section class="institutional-section">
    <h1>Outras Informações</h1>

    <CardPrivacyPolicy />
    <CardStatutes />
    <CardManagement />

    <div class="slogan">
      <span>O Gens que nos une.</span>
    </div>

    <div class="triple-separator">
      <div class="line green"></div>
      <div class="line white"></div>
      <div class="line red"></div>
    </div>
    <RouterLink to="/" class="back-link">Voltar à Página Inicial</RouterLink>
  </section>
</template>

<script setup>
import CardManagement from '../components/CardManagement.vue';
import CardPrivacyPolicy from '../components/CardPrivacyPolicy.vue';
import CardStatutes from '../components/CardStatutes.vue';
</script>

<style scoped>
.institutional-section {
  margin-top: 110px;
  width: 100%;
  color: var(--green);
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
}

.slogan {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.back-link {
  display: block;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--link);
  font-weight: 500;
  text-decoration: none;
}
.triple-separator {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2rem 0;
}
.line {
  height: 3px;
  width: 100%;
}
.green {
  background-color: var(--green);
}
.white {
  background-color: var(--white);
}
.red {
  background-color: red;
}
</style>
