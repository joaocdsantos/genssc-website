<template>
  <section class="card" id="hero">
    <div
      v-for="(img, i) in imagesToShow"
      :key="i"
      class="card-bg"
      :style="{ backgroundImage: `url(${img})`, opacity: i === currentIndex ? 1 : 0 }"
    ></div>
    <div class="overlay">
      <h1>O GENS QUE NOS UNE</h1>
      <h4>DESDE 1925</h4>
      <button @click="toggleHino" class="hino-button">
        <component :is="isPlaying ? VolumeX : Volume2" class="icon" />
        {{ isPlaying ? 'Parar' : 'Ouvir' }}
      </button>
      <audio ref="hinoAudio" src="/media/anthem.mp3" @ended="isPlaying = false"></audio>
    </div>
  </section>
</template>

<script setup>
import { VolumeX, Volume2 } from 'lucide-vue-next';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import estadioImage from '../assets/gallery/gsc_test2.jpg';

const hinoAudio = ref(null);
const isPlaying = ref(false);

const toggleHino = () => {
  const audio = hinoAudio.value;
  if (!audio) return;

  if (audio.paused) {
    audio
      .play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch(() => {
        isPlaying.value = false;
      });
  } else {
    audio.pause();
    isPlaying.value = false;
  }
};

const images = ref([]);
const currentIndex = ref(0);
let intervalId = null;

const loadImages = async () => {
  const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg}');
  const loadedImages = [];

  for (const path in imageModules) {
    const mod = await imageModules[path]();
    loadedImages.push(mod.default);
  }

  images.value = [estadioImage, ...loadedImages];
};

onMounted(async () => {
  await loadImages();
  if (images.value.length > 1) {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }, 5000);
  }
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

// imagens com fallback incluído
const imagesToShow = computed(() => (images.value.length ? images.value : [estadioImage]));

const backgroundStyle = computed(() => {
  const imageUrl = imagesToShow.value[currentIndex.value];
  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 1s ease-in-out',
  };
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
  transition: opacity 3s ease-out;
  z-index: 0;
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

.hino-button {
  position: absolute;
  bottom: 2rem;
  background: transparent;
  color: var(--white);
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease, color 0.3s ease;
  opacity: 0.5;
}

.hino-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
