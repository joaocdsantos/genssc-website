<template>
  <section class="location-section">
    <h1>Localização</h1>

    <!-- INSERIR AS LOCALIZAÇõES-->
    <div class="slogan">
      <span>Gens Sport Clube</span>
      <span>O Gens que nos une.</span>
    </div>

    <div class="triple-separator">
      <div class="line green"></div>
      <div class="line white"></div>
      <div class="line red"></div>
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
.triple-separator {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2rem 0;
}

.line {
  height: 3px;
  width: 100%;
}

.green {
  background-color: green;
}

.white {
  background-color: white;
}

.red {
  background-color: red;
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
