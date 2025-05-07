<template>
  <Header />
  <main>
    <Hero />
    <CardHistory />
    <CardMembership />
    <CardLocation />
    <CardContact />
    <CardSponsors />
    <CardSocialMedia />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import CardHistory from './components/CardHistory.vue';
import CardMembership from './components/CardMembership.vue';
import CardLocation from './components/CardLocation.vue';
import CardContact from './components/CardContact.vue';
import CardSponsors from './components/CardSponsors.vue';
import CardSocialMedia from './components/CardSocialMedia.vue';
import Footer from './components/Footer.vue';
</script>
