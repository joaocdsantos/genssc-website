<template>
  <section class="card">
    <h1>Novos Sócios</h1>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeoVgk-QcUSXEopzezLnNHDZ0PqujrQcXld3gIdDmHNFflm6A/viewform"
      target="_blank"
      aria-label="Formulário de adesão de sócio"
    >
      <img src="../assets/cards/membership-card.svg" alt="cartão de sócio" />
      <p>Cada sócio é uma parte essencial da nossa história e do nosso futuro.</p>
      <p class="slogan">Apoia o Gens Sport Clube!</p>
      <button class="btn-link">Faz-te já Sócio</button>
    </a>
  </section>
</template>

<style scoped>
.card {
  width: 100%;
  color: var(--white);
  background: var(--green);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}
.card h1 {
  margin-bottom: 2.5rem;
}
.card p {
  margin-top: 1rem;
  max-width: 850px;
  text-align: justify;
}
.card img {
  display: block;
  margin: 0 auto;
  max-width: 210px;
  transform: rotate(-15deg);
  margin-bottom: 2rem;
}

p.slogan {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;
  color: var(--white);
  font-weight: bold;
}
</style>
