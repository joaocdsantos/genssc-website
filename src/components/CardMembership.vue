<template>
  <section class="card">
    <h1>Novos Sócios</h1>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeoVgk-QcUSXEopzezLnNHDZ0PqujrQcXld3gIdDmHNFflm6A/viewform"
      target="_blank"
      aria-label="Formulário de adesão de sócio"
    >
      <img src="../assets/gallery/membership-card.svg" alt="mapa" />
      <p>Cada sócio é uma parte essencial da nossa história e do nosso futuro.</p>
      <p class="slogan">Apoia o Gens Sport Clube!</p>
      <button class="btn">Faz-te já Sócio</button>
    </a>
  </section>
</template>

<style scoped>
.card {
  min-height: 50vh;
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
  margin-bottom: 2rem;
}
.card p {
  max-width: 320px;
  text-align: justify;
}
.card img {
  display: block;
  margin: 0 auto;
  max-width: 200px;
  transform: rotate(-15deg);
  margin-bottom: 2rem;
}
.btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
}

p.slogan {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;
  color: var(--white);
  font-weight: bold;
}
</style>
