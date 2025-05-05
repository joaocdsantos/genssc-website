<template>
  <section class="card">
    <h1>Localização</h1>
    <img src="../assets/gallery/location.png" alt="mapa cartoon" />
    <p>Verifica aqui como chegar às nossas instalações.</p>
    <button class="btn">Como chegar</button>
  </section>
</template>

<style scoped>
.card {
  min-height: 50vh;
  width: 100%;
  background: var(--beije);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
.btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
}
</style>
