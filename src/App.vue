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

#app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  width: 100%;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

main {
  flex: 1;
  width: 100%;
  background-color: #f9f9f9;
  color: #fefefe;
}

footer {
  background: #c43a22;
  color: #fefefe;
}
</style>
