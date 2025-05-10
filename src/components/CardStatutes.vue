<template>
  <section class="card">
    <h2>Estatutos do Clube</h2>
    <p>
      Os estatutos do Gens Sport Clube definem os princípios de funcionamento e organização da associação. Estão
      disponíveis para consulta através do link abaixo.
    </p>
    <RouterLink to="/estatutos/Estatutos_GensSC_2023.pdf" target="_blank" class="btn-link"
      >Ver Estatutos (PDF)
    </RouterLink>
  </section>
</template>

<style scoped>
.card {
  min-height: 20vh;
  width: 100%;
  color: var(--green);
  background: var(--white);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card h2 {
  font-size: 1.3rem;

  text-align: center;
  margin-bottom: 2rem;
}
.card p {
  max-width: 850px;
  text-align: justify;
  margin-bottom: 1rem;
}
</style>
