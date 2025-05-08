<template>
  <section class="card" id="location">
    <h1>Localização</h1>
    <img src="../assets/cards/location-card.png" alt="mapa cartoon" />
    <p>Consulta aqui como podes chegar às nossas instalações.</p>
    <RouterLink to="/location"
      ><button class="btn"><spap>Obter direções</spap></button></RouterLink
    >
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
}
.card {
  min-height: 30vh;
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
}
.card p {
  margin-top: 0.5rem;
  max-width: 250px;
  text-align: justify;
}
</style>
