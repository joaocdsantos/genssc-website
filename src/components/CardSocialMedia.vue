<template>
  <section class="card" id="redes-sociais">
    <h1>Segue-nos nas Redes Sociais</h1>
    <p>Fica a par de todos os jogos, eventos e novidades do nosso clube!</p>
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
  width: 100%;
  background-color: var(--green);
  color: var(--white);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}
.card h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-bottom: 1rem;
}
.card p {
  margin-top: 1rem;
  max-width: 850px;
  text-align: justify;
}
.icons {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}
.icons img {
  width: 56px;
  height: 56px;
  transition: transform 0.3s ease;
}
.icons a:hover img {
  transform: scale(1.2);
}
</style>
