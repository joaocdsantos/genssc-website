<template>
  <div class="footer-container">
    <span>Gens Sport Clube © {{ currentYear }}</span>
    <span>Todos os direitos reservados</span>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  border-top: 2px solid #fefefe; /* 🟢 Borda branca */
}
</style>
