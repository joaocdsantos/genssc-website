<template>
  <section class="card">
    <h1>A nossa história</h1>
    <img src="../assets/gallery/history.png" alt="equipa antiga" />
    <p>Uma breve descrição da história do clube.</p>
    <button class="btn">Saber mais</button>
  </section>
</template>

<style scoped>
.card {
  min-height: 50vh;
  width: 100%;
  background: var(--beije);
  text-align: center;
  padding: 2rem 1rem;
}
.card h1 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}
.card img {
  opacity: 0.8;
}
.btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
}
</style>
