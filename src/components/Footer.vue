<template>
  <div class="footer-container">
    <div class="footer-social">
      <a href="https://facebook.com/genssc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img src="../assets/logos/facebook.svg" alt="" loading="lazy" />
      </a>
      <a href="https://instagram.com/gens_sport_clube" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img src="../assets/logos/instagram.svg" alt="" loading="lazy" />
      </a>
    </div>

    <p>Gens Sport Clube © {{ currentYear }}</p>
    <p>Todos os direitos reservados</p>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-container {
  background-color: var(--red);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem;
  text-align: center;
}

.footer-social {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.25rem;
}

.footer-social img {
  width: 40px;
  height: 40px;
  border-radius: 0;
  transition: transform 0.2s ease;
}

.footer-social a:hover img {
  transform: scale(1.15);
}

.footer-container p {
  font-size: smaller;
  font-weight: bolder;
}
</style>
