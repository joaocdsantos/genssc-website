<template>
  <div class="footer-container">
    <span>Gens Sport Clube © {{ currentYear }}</span>
    <span>Todos os direitos reservados</span>
    <p>Desevolvido por: <a href="https://www.linkedin.com/in/joaocdsantos/" target="_blank">João Santos</a></p>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  text-align: center;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  border-top: 2px solid #f9f9f9; /* 🟢 Borda branca */
}

a {
  color: #f9f9f9;
  font-weight: bold;
  text-decoration: none;
}
</style>
