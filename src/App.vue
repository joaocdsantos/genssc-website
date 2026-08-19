<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
  <audio ref="audioRef" src="/media/anthem.mp3" @ended="onHinoEnded"></audio>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
import { useAnthem } from './composables/useAnthem';

const audioRef = ref(null);
const { setAudioEl, onHinoEnded } = useAnthem();

onMounted(() => {
  setAudioEl(audioRef.value);
});
</script>
