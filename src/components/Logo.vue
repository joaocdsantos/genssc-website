<template>
  <div>
    <img class="logo" alt="GSC_logotype" src="../assets/genssc_logo.png" @click="moveLogo">
    <h3>Orgulho em ser Gens Gens Gens!</h3>
  </div>
</template>

<script>
export default {
  name: "LogoGSC",
  methods: {
    moveLogo() {
      const logo = document.querySelector('.logo');
      // Adiciona uma classe para ativar a animação
      setTimeout(() => {
        logo.classList.add('jumpAnimation');
      }, 10); // Ajuste conforme necessário para garantir que a animação seja aplicada após a próxima renderização
      // Remove a classe após a animação ser concluída
      setTimeout(() => {
        logo.classList.remove('jumpAnimation');
      }, 1000); // Ajuste conforme necessário para coincidir com a duração da animação CSS
    }
  }
}
</script>


<style>
.logo {
  width: 250px;
  height: 250px;
  transition: transform 0.3s ease;
}

.jumpAnimation {
  animation: jump 1s; /* Define a animação de salto */
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0); /* Começa e termina na posição original */
  }
  50% {
    transform: translateY(-50px); /* Pula para cima */
  }
}
</style>