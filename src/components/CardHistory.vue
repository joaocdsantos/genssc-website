<template>
  <section class="card" id="clube">
    <h2>A nossa história</h2>
    <picture>
      <source srcset="../assets/cards/history/history-card-mobile.webp" type="image/webp" media="(max-width: 600px)" />
      <source srcset="../assets/cards/history/history-card.webp" type="image/webp" media="(min-width: 601px)" />
      <img src="../assets/cards/history/history-card.jpg" alt="equipa antiga do Gens SC" loading="lazy" />
    </picture>
    <p>
      O Gens Sport Clube é uma instituição de utilidade pública com uma rica história e um papel significativo na
      comunidade de Gens, sendo uma referência desportiva no concelho de Gondomar.
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
.card h2 {
  margin-bottom: 1rem;
}
.card p {
  margin-top: 1rem;
  max-width: 850px;
  text-align: justify;
}
.btn-link {
  margin-top: 1.5rem;
}
picture {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.8;
}
@media (min-width: 601px) {
  picture {
    max-width: 400px;
  }
}
@media (min-width: 900px) {
  .btn-link {
    margin-top: auto;
  }
}
</style>
