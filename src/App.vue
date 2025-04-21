<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Image />
    <Home />
  </main>
  <footer>
    <FooterInfo />
  </footer>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Image from './components/Image.vue';
import Home from './components/Home.vue';
import FooterInfo from './components/Footer.vue';
</script>

<style>
html,
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
  overscroll-behavior-y: none;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

main {
  flex: 1;
  width: 100%;
  background-color: #fefefe;
  color: #fefefe;
  padding-top: 90px;
}

footer {
  background: #c43a22;
  color: #fefefe;
}
</style>
