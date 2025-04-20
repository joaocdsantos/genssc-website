<template>
  <div class="background-container">
    <div class="content">
      <h1 class="title">Bem vindo à página oficial do Gens Sport Clube</h1>
      <p class="hashtag">#ORGULHO EM SER GENS</p>
      <p class="hashtag">#O GENS QUE NOS UNE</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Container principal com a imagem de fundo */
.background-container {
  width: 100%;
  height: 90dvh; /* Ocupa toda a altura da tela */
  background-image: url('../assets/gallery/gsc_test2.jpg'); /* Caminho para a sua imagem */
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilos de texto */
.title {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 40px;
}

.hashtag {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: gold;
}
</style>
