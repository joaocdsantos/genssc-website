<template>
  <section class="card home-card" id="localizacao">
    <h2>Localização</h2>

    <picture>
      <source
        srcset="../assets/cards/location/location-card-mobile.webp"
        type="image/webp"
        media="(max-width: 600px)"
      />
      <source srcset="../assets/cards/location/location-card.webp" type="image/webp" media="(min-width: 601px)" />
      <img src="../assets/cards/location/location-card.jpg" alt="mapa cartoon" loading="lazy" />
    </picture>
    <div class="card-content">
      <p>Consulta aqui como podes chegar às nossas instalações.</p>
    </div>
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
    margin-top: 1rem;
  }
}
</style>
