<template>
  <section class="location-section">
    <h1>Localização</h1>
    <div class="red-bar"></div>
    <div class="address-cards">
      <CardAddress
        title="Parque Desportivo de Gens"
        address="R. do Parque de Jogos, sn"
        zip="4515-666 Gens - Foz do Sousa"
        mapsQuery="41.119293707958306,-8.483172701985984"
        color="var(--green)"
        backgroundColor="var(--white)"
        :mobileSource="estadioMobile"
        :desktopSource="estadioDesktop"
        :fallbackImage="estadioFallback"
      />
      <div class="red-bar row-separator"></div>
      <CardAddress
        title="Sede Social"
        address="R. Damião de Sousa 92"
        zip="4515-123 Gens - Foz do Sousa"
        mapsQuery="41.11488870881417,-8.485025038543432"
        color="var(--white)"
        backgroundColor="var(--green)"
        :mobileSource="sedeMobile"
        :desktopSource="sedeDesktop"
        :fallbackImage="sedeFallback"
      />
      <div class="red-bar row-separator"></div>
      <CardMap :markers="mapMarkers" />
    </div>
    <div class="red-bar"></div>

    <RouterLink to="/" class="back-link">Voltar à Página Inicial</RouterLink>
  </section>
</template>

<script setup>
import CardAddress from '../components/CardAddress.vue';
import CardMap from '../components/CardMap.vue';

import estadioMobile from '../assets/cards/address/parque-desportivo-mobile.webp';
import estadioDesktop from '../assets/cards/address/parque-desportivo.webp';
import estadioFallback from '../assets/cards/address/parque-desportivo.jpg';
import sedeMobile from '../assets/cards/address/sede-social-mobile.webp';
import sedeDesktop from '../assets/cards/address/sede-social.webp';
import sedeFallback from '../assets/cards/address/sede-social.jpg';

const mapMarkers = [
  { lat: 41.119293707958306, lng: -8.483172701985984, color: 'var(--red)', label: 'Parque Desportivo de Gens' },
  { lat: 41.11488870881417, lng: -8.485025038543432, color: 'var(--green)', label: 'Sede Social' },
];
</script>

<style scoped>
.location-section {
  margin-top: 110px;
  width: 100%;
  color: var(--green);
}

.address-cards {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  align-items: stretch;
}

@media (min-width: 900px) {
  .address-cards {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 10px minmax(0, 1fr) 10px minmax(0, 1fr);
    align-items: stretch;
  }
  .address-cards > * {
    min-width: 0;
  }
  .address-cards > .row-separator {
    width: auto;
    height: auto;
    min-height: 0;
  }
  .address-cards > .card {
    min-height: 420px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.back-link {
  display: block;
  max-width: 850px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  text-align: center;
  color: var(--link);
  font-weight: 500;
  text-decoration: none;
}
</style>
