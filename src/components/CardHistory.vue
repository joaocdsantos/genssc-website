<template>
  <section class="card" id="history">
    <h1>A nossa história</h1>
    <img src="../assets/cards/history-card.png" alt="equipa antiga" />
    <p>
      O Gens Sport Clube, fundado a 1 de Janeiro de 1925, é uma instituição desportiva com uma rica história e um papel
      significativo ...
    </p>
    <RouterLink to="/history"> <button class="btn">Saber mais</button> </RouterLink>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
}
.card {
  min-height: 50vh;
  width: 100%;
  background: var(--beije);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}
.card h1 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}
.card img {
  max-width: 250px;
  opacity: 0.8;
}
.card p {
  max-width: 320px;
  text-align: justify;
  margin-top: 0.5rem;
}
</style>
