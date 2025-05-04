<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logos/genssc_logo.png" aria-label="Abrir menu" />
    </div>
    <button class="menu-button" @click="toggleMenu" aria-label="Abrir menu">☰</button>
  </header>
</template>

<script setup>
const toggleMenu = () => {
  console.log('Abrir menu');
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: var(--green);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;
}

.logo {
  width: 80px;
  height: auto;
}

.menu-button {
  font-size: 2rem;
  color: #fefefe;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.menu-button:hover {
  transform: scale(1.2);
}
</style>
