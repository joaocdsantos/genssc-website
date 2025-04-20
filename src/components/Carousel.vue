<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div v-for="(image, index) in images" :key="index" class="carousel-item">
        <img :src="image" class="carousel-image" />
        <p class="carousel-text">Imagem {{ index + 1 }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

const loadImages = async () => {
  const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg}');
  const loadedImages = [];

  for (const path in imageModules) {
    const mod = await imageModules[path]();
    loadedImages.push(mod.default);
  }

  images.value = loadedImages;
};

onMounted(loadImages);
</script>

<style scoped>
.carousel-wrapper {
  margin: 0 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.carousel {
  display: flex;
  gap: 16px;
  padding: 20px;
}

.carousel-item {
  flex: 0 0 97%;
  scroll-snap-align: center;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #54983d;
}

.carousel-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-text {
  font-weight: bold;
  margin-top: 5px;
}

/* Opcional: esconder scrollbars em navegadores modernos */
.carousel-wrapper::-webkit-scrollbar {
  display: none;
}
.carousel-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
