<template>
  <Header />
  <main>
    <Hero />
    <CardHistory />
    <CardMembership />
    <CardLocation />
    <CardContact />
    <CardGallery />
    <CardSocialMedia />
    <!-- <Image /> -->
  </main>
  <footer>
    <FooterInfo />
  </footer>
</template>

<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import CardMembership from './components/CardMembership.vue';
import CardHistory from './components/CardHistory.vue';
import CardLocation from './components/CardLocation.vue';
import CardContact from './components/CardContact.vue';
import CardGallery from './components/CardGallery.vue';
import CardSocialMedia from './components/CardSocialMedia.vue';

// import Navbar from './components/Navbar.vue';
// import Image from './components/Image.vue';
import FooterInfo from './components/Footer.vue';
</script>
