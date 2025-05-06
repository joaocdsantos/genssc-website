<template>
  <section class="card">
    <h1>Contacta-nos</h1>
    <p>telefone</p>
    <p>email</p>
    <button class="btn">Entrar em Contacto</button>
  </section>
</template>

<style scoped>
.card {
  min-height: 30vh;
  width: 100%;
  color: var(--white);
  background: var(--green);
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
.btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
}
</style>
