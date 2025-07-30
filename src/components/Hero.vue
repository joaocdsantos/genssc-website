<template>
  <section class="card" id="inicio">
    <div
        v-for="(img, i) in imagesToShow"
        :key="i"
        class="card-bg"
        :class="{ active: i === currentIndex, previous: i === previousIndex }"
        :style="{ backgroundImage: `url(${img})` }"
    ></div>

    <div class="overlay">
      <div class="text">
        <h1>O GENS QUE NOS UNE</h1>
        <h4>DESDE 1925</h4>
      </div>
      <button @click="toggleHino" class="hino-button">
        <component :is="isPlaying ? VolumeX : Volume2" class="icon" />
        {{ isPlaying ? 'Parar Hino' : 'Ouvir Hino' }}
      </button>
      <audio ref="hinoAudio" src="/media/anthem.mp3" @ended="isPlaying = false"></audio>
    </div>
  </section>
</template>

<script setup>
import { VolumeX, Volume2 } from 'lucide-vue-next';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import defaultHeroImage from '../assets/IMG_1.png';

const hinoAudio = ref(null);
const isPlaying = ref(false);

const toggleHino = () => {
  const audio = hinoAudio.value;
  if (!audio) return;
  if (audio.paused) {
    audio.play().then(() => isPlaying.value = true).catch(() => isPlaying.value = false);
  } else {
    audio.pause();
    isPlaying.value = false;
  }
};

const images = ref([]);
const currentIndex = ref(0);
const previousIndex = ref(null);
let intervalId = null;

const loadImages = async () => {
  const imageModules = import.meta.glob('../assets/hero/*.{png,jpg,jpeg}');
  const loadedImages = [];
  for (const path in imageModules) {
    const mod = await imageModules[path]();
    loadedImages.push(mod.default);
  }
  images.value = [defaultHeroImage, ...loadedImages];
};

const imagesToShow = computed(() => (images.value.length ? images.value : [defaultHeroImage]));

onMounted(async () => {
  await loadImages();
  if (images.value.length > 1) {
    intervalId = setInterval(() => {
      previousIndex.value = currentIndex.value;
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
      // limpa a referência anterior após o fade (para não deixar camadas visíveis acumuladas)
      setTimeout(() => {
        previousIndex.value = null;
      }, 1000); // precisa ser igual ao tempo do transition no CSS
    }, 5000);
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
.card {
  position: relative;
  height: 80vh;
  overflow: hidden;
}

.card-bg {
  margin-top: 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  transition: opacity 1s ease-in-out;
}

.card-bg.active {
  opacity: 1;
  z-index: 1;
}

.card-bg.previous {
  opacity: 0;
  z-index: 1;
}

.overlay {
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.text {
  margin-bottom: 150px;
}

.hino-button {
  position: absolute;
  bottom: 2rem;
  background: transparent;
  color: var(--white);
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  opacity: 0.5;
}

.hino-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.2);
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
