<template>
  <section class="card" id="clube">
    <h1>A nossa história</h1>
    <img src="../assets/cards/history-card.png" alt="equipa antiga" />
    <p>
      O Gens Sport Clube, fundado a 1 de Janeiro de 1925, é uma instituição desportiva com uma rica história e um papel
      significativo ...
    </p>
    <RouterLink to="/clube" class="btn-link">Saber mais</RouterLink>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
}
.card {
  width: 100%;
  color: var(--green);
  background: var(--white);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}
.card h1 {
  margin-bottom: 1rem;
}
.card p {
  margin-top: 1rem;
  max-width: 850px;
  text-align: justify;
}
.card img {
  display: block;
  margin: 0 auto;
  max-width: 250px;
  opacity: 0.8;
}
</style>
