<template>
  <section class="location-section">
    <h1>Localização</h1>
    <RouterLink to="/" class="back-link">Voltar à Página Inicial</RouterLink>
    <div class="slogan">
      <span>Gens Sport Clube</span>
      <span>O Gens que nos une.</span>
    </div>
    <RouterLink to="/" class="back-link">Voltar à Página Inicial</RouterLink>
  </section>
</template>

<style scoped>
.location-section {
  margin-top: 110px;
  padding: 0 1.5rem;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  text-align: center;
  margin-bottom: 0.5rem;
}

.back-link {
  display: block;
  text-align: center;
  margin-bottom: 2rem;
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
}

.slogan {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #14532d;
}
</style>
