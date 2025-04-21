<template>
  <div class="background-container">
    <!-- Imagem de fundo com zoom -->
    <div
      class="background-image"
      v-if="images.length"
      :style="{
        backgroundImage: `url(${images[currentIndex]})`,
        transform: zoomIn ? 'scale(1.05)' : 'scale(1)',
      }"
    ></div>

    <!-- Overlay para contraste -->
    <div class="overlay"></div>

    <!-- Conteúdo -->
    <div class="content">
      <h1 class="title">Gens Sport Clube<br /><small>Página Oficial</small></h1>
    </div>

    <!-- Hashtags no rodapé -->
    <div class="hashtags">
      <p class="hashtag">#O GENS QUE NOS UNE</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = ref([]);
const currentIndex = ref(0);
const zoomIn = ref(true);
let intervalId = null;

const loadImages = async () => {
  const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg}');
  const loadedImages = [];

  for (const path in imageModules) {
    const mod = await imageModules[path]();
    loadedImages.push(mod.default);
  }

  images.value = loadedImages;
};

onMounted(async () => {
  await loadImages();
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    zoomIn.value = !zoomIn.value;
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
  height: 70dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  box-sizing: border-box;
}

.background-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 5s ease-in-out, background-image 1s ease-in-out;
  z-index: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: fadeInSlide 1.5s ease-out both;
}

.title {
  font-size: 1.8rem;
  color: white;
  font-weight: 300;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

/* Hashtags posicionadas no final do container */
.hashtags {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: auto;
}

.hashtag {
  font-size: 1.4rem;
  font-weight: bold;
  color: gold;
  font-family: 'Hind', sans-serif;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  margin: 0.3rem 0;
  animation: fadeInSlideReverse 1.5s ease-out both;
}

/* Responsivo */
@media (max-width: 768px) {
  .title {
    font-size: 1.4rem;
  }

  .hashtag {
    font-size: 1.2rem;
  }
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInSlideReverse {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
