<template>
  <section class="card" id="localizacao">
    <h1>Localização</h1>
    <img src="../assets/cards/location-card.png" alt="mapa cartoon" />
    <p>Consulta aqui como podes chegar às nossas instalações.</p>
    <RouterLink to="/localizacao" class="btn-link">Obter direções</RouterLink>
  </section>
</template>

<style scoped>
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
}
</style>
