<template>
  <section class="card" id="inicio">
    <div
      v-for="(img, i) in imagesToShow"
      :key="i"
      class="card-bg"
      :class="[`kb-dir-${i % 4}`, { active: i === currentIndex, previous: i === previousIndex }]"
      :style="{
        backgroundImage: `url(${img.src})`,
        backgroundPosition: img.position,
        '--fade-duration': `${i === currentIndex ? FADE_IN_MS : FADE_OUT_MS}ms`,
      }"
    ></div>
    <div class="overlay">
      <div class="dots" v-if="imagesToShow.length > 1">
        <button
          v-for="(img, i) in imagesToShow"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          :aria-label="`Ir para imagem ${i + 1}`"
          @click="goToSlide(i)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import defaultHeroImage from '../assets/IMG_1.webp';

// Duração do fade in / fade out e intervalo entre imagens. Ajustar estes valores
// controla todo o timing do slideshow (CSS e JS ficam sincronizados automaticamente).
const FADE_IN_MS = 1000;
const FADE_OUT_MS = 1000;
const SLIDE_INTERVAL_MS = 5000;

// Ponto focal por imagem (background-position), para o "cover" não cortar o
// assunto principal em fotos onde não está centrado. Ajustar conforme necessário,
// ex: 'center 20%' para aproximar do topo.
const focalPoints = {
  'IMG_1.webp': 'center',
  'IMG_2.webp': 'center',
  'IMG_3.webp': 'center',
  'IMG_4.webp': 'center',
  'IMG_5.webp': 'center',
  'IMG_6.webp': 'center',
  'IMG_8.webp': 'center',
  'IMG_9.webp': 'center',
  'IMG_10.webp': 'center',
};

const images = ref([]);
const currentIndex = ref(0);
const previousIndex = ref(null);
let intervalId = null;

const loadImages = async () => {
  const imageModules = import.meta.glob('../assets/hero/*.webp');
  const entries = await Promise.all(
    Object.entries(imageModules).map(async ([path, load]) => {
      const mod = await load();
      const filename = path.split('/').pop();
      return { src: mod.default, position: focalPoints[filename] || 'center' };
    })
  );
  images.value = [{ src: defaultHeroImage, position: 'center' }, ...entries];
};

const imagesToShow = computed(() =>
  images.value.length ? images.value : [{ src: defaultHeroImage, position: 'center' }]
);

const startSlideshow = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    previousIndex.value = currentIndex.value;
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    setTimeout(() => {
      previousIndex.value = null;
    }, FADE_OUT_MS);
  }, SLIDE_INTERVAL_MS);
};

const goToSlide = i => {
  if (i === currentIndex.value) return;
  previousIndex.value = currentIndex.value;
  currentIndex.value = i;
  setTimeout(() => {
    previousIndex.value = null;
  }, FADE_OUT_MS);
  startSlideshow();
};

onMounted(async () => {
  await loadImages();
  if (images.value.length > 1) {
    startSlideshow();
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

@media (max-width: 768px) {
  .card {
    height: 65vh;
  }
}

.card-bg {
  margin-top: 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 0;
  transform: scale(1);
  transition: opacity var(--fade-duration, 1s) ease-in-out;
}

.card-bg.active {
  opacity: 1;
  z-index: 1;
  will-change: transform;
  animation-duration: 6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

.card-bg.active.kb-dir-0 {
  animation-name: ken-burns-tl;
}
.card-bg.active.kb-dir-1 {
  animation-name: ken-burns-tr;
}
.card-bg.active.kb-dir-2 {
  animation-name: ken-burns-bl;
}
.card-bg.active.kb-dir-3 {
  animation-name: ken-burns-br;
}

.card-bg.previous {
  opacity: 0;
  z-index: 1;
}

@keyframes ken-burns-tl {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.12) translate(-1.5%, -1.5%);
  }
}

@keyframes ken-burns-tr {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.12) translate(1.5%, -1.5%);
  }
}

@keyframes ken-burns-bl {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.12) translate(-1.5%, 1.5%);
  }
}

@keyframes ken-burns-br {
  from {
    transform: scale(1) translate(0, 0);
  }
  to {
    transform: scale(1.12) translate(1.5%, 1.5%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card-bg.active {
    animation: none;
  }
}

.overlay {
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
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

.dots {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.3);
  padding: 0;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
}

.dot.active {
  background: #fff;
  transform: scale(1.2);
}
</style>
