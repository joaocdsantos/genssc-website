<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
</script>
