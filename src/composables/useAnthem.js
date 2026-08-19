import { ref } from 'vue';

const audioEl = ref(null);
const isPlaying = ref(false);

const setAudioEl = el => {
  audioEl.value = el;
};

const toggleHino = () => {
  const audio = audioEl.value;
  if (!audio) return;
  if (audio.paused) {
    audio
      .play()
      .then(() => (isPlaying.value = true))
      .catch(() => (isPlaying.value = false));
  } else {
    audio.pause();
    isPlaying.value = false;
  }
};

const onHinoEnded = () => {
  isPlaying.value = false;
};

export function useAnthem() {
  return { isPlaying, toggleHino, setAudioEl, onHinoEnded };
}
