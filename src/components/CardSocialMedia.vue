<template>
  <section class="card">
    <h1>Segue-nos nas Redes Sociais</h1>
    <p>Fica a par dos jogos, eventos e novidades do nosso clube!</p>
    <div class="icons">
      <a href="https://facebook.com/genssc/#" target="_blank" aria-label="Facebook">
        <img src="../assets/logos/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://instagram.com/gens_sport_clube/#" target="_blank" aria-label="Instagram">
        <img src="../assets/logos/instagram.svg" alt="Instagram" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.card {
  min-height: 50vh;
  width: 100%;
  background-color: #073b22; /* verde escuro refinado */
  color: #fefefe;
  text-align: center;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card h1 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}
.card p {
  font-size: 1.1rem;
  max-width: 480px;
  margin: 0 auto;
}
.icons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}
.icons img {
  width: 56px;
  height: 56px;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: brightness(1);
}
.icons a:hover img {
  transform: scale(1.1);
  filter: brightness(1.3);
}
</style>
