<template>
  <section class="card">
    <h1>A nossa história</h1>
    <img src="../assets/gallery/history.png" alt="equipa antiga" />
    <p>
      O Gens Sport Clube, fundado a 1 de Janeiro de 1925, é uma instituição desportiva com uma rica história e um papel
      significativo na comunidade de Gens, no concelho de Gondomar. Ao longo dos anos ...
    </p>
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
  opacity: 0.8;
}
.card p {
  margin-top: 0.5rem;
}
.btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
}
</style>
