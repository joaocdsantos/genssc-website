<template>
  <div class="footer-container">
    <p>Gens Sport Clube © {{ currentYear }}</p>
    <p>Todos os direitos reservados</p>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container {
  background-color: #fefefe;
  color: #073b22;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
}

.footer-container p {
  font-size: smaller;
  font-weight: bolder;
}
</style>
