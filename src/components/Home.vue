<template>
  <section class="nav-buttons" id="home">
    <button @click="openExternal(newAssociatesForm)"><UserPlus class="icon" /> Faz-te sócio!</button>

    <!-- <button @click="scrollTo('#gens-sc')"><Info class="icon" /> O Gens Sport Clube</button> -->

    <button @click="scrollTo('#gallery')"><Image class="icon" /> Galeria</button>

    <button @click="scrollTo('#partners')"><Handshake class="icon" /> Parceiros</button>

    <button @click="scrollTo('#map')"><Map class="icon" /> Mapa</button>

    <button @click="scrollTo('#address')"><MapPin class="icon" /> Moradas</button>

    <!-- <button @click="scrollTo('#contacts')"><Phone class="icon" /> Contacto</button> -->

    <button @click="scrollTo('#social-networks')"><Share2 class="icon" /> Redes Sociais</button>
  </section>

  <section id="gallery"><Carousel /></section>
  <section id="partners"><Sponsors /></section>
  <section id="map"><MapComponent /></section>
  <section id="address"><Address /></section>

  <!-- FOR IMPLEMENT: Contact form
  <section>
    <Contact/>
  </section>
  -->
  <section id="social-networks">
    <SocialNetworks :facebookLink="facebookLink" :instagramLink="instagramLink" />
  </section>
</template>

<script setup>
import Carousel from './Carousel.vue';
import Sponsors from './Sponsors.vue';
import MapComponent from './Map.vue';
import Address from './Address.vue';
import SocialNetworks from './SocialNetworks.vue';

import { UserPlus, Info, Image, Handshake, Map, MapPin, Phone, Share2 } from 'lucide-vue-next';

const facebookLink = 'https://www.facebook.com/genssc/#';
const instagramLink = 'https://www.instagram.com/gens_sport_clube/#';
const newAssociatesForm =
  'https://docs.google.com/forms/d/e/1FAIpQLSeoVgk-QcUSXEopzezLnNHDZ0PqujrQcXld3gIdDmHNFflm6A/viewform';

function scrollTo(target) {
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function openExternal(url) {
  window.open(url, '_blank');
}
</script>

<style scoped>
#home,
#gallery,
#partners,
#map {
  scroll-margin-top: 100px; /* altura exata da navbar fixa */
}

section {
  margin-top: 0;
  padding-top: 0;
}
.nav-buttons {
  margin: 0; /* Remove espaço acima do header */
  padding: 24px 16px 32px; /* Top | Horizontal | Bottom */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px;
}

button {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 70%;
  background-color: #54983d;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

button:hover {
  background-color: #41772f;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
