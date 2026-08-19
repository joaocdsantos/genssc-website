<template>
  <section class="card home-card">
    <h2>Área de Sócios</h2>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeoVgk-QcUSXEopzezLnNHDZ0PqujrQcXld3gIdDmHNFflm6A/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <picture>
        <source
          srcset="../assets/cards/membership/membership-card-mobile.webp"
          type="image/webp"
          media="(max-width: 600px)"
        />
        <source srcset="../assets/cards/membership/membership-card.webp" type="image/webp" media="(min-width: 601px)" />

        <img src="../assets/cards/membership/membership-card.jpg" alt="cartão de sócio" loading="lazy" />
      </picture>
      <div class="card-content">
        <p>Cada sócio é uma parte essencial da nossa história e do nosso futuro.</p>
        <p class="slogan">Apoia o Gens Sport Clube!</p>
      </div>
      <span class="btn-link">Faz-te já Sócio</span>
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
.card h2 {
  margin-bottom: 1rem;
}
.card > a {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
}
.btn-link {
  display: inline-block;
  margin-top: 1.5rem;
}
.card p {
  margin-top: 1rem;
  max-width: 850px;
  text-align: justify;
}
.card img,
picture {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

p.slogan {
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--white);
  font-weight: bold;
}

@media (min-width: 601px) {
  picture {
    max-width: 400px;
  }
}

@media (min-width: 900px) {
  .btn-link {
    margin-top: 1rem;
  }
}
</style>
