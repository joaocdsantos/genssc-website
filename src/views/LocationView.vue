<template>
  <section class="location-section">
    <h1>Localização</h1>
    <CardAddress
      title="Parque Desportivo de Gens"
      address="R. do Parque de Jogos, sn"
      zip="4515-666 Gens - Foz do Sousa"
      mapsQuery="41.119293707958306,-8.483172701985984"
      color="var(--white)"
      background-color="var(--green)"
      :imageSrc="estadioImg"
    />
    <CardAddress
      title="Sede Social"
      address="R. Damião de Sousa 92"
      zip="4515-123 Gens - Foz do Sousa"
      mapsQuery="41.11488870881417,-8.485025038543432"
      color="var(--green)"
      backgroundColor="var(--white)"
      :imageSrc="sedeImg"
    />

    <div class="slogan">
      <span>Gens Sport Clube.</span>
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
import CardAddress from '../components/CardAddress.vue';

import estadioImg from '../assets/gallery/estadio.jpg';
import sedeImg from '../assets/gallery/gsc_test2.jpg';
</script>

<style scoped>
.location-section {
  margin-top: 110px;
  width: 100%;
  color: var(--green);
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
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
  background-color: green;
}

.white {
  background-color: white;
}

.red {
  background-color: red;
}
.slogan {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
