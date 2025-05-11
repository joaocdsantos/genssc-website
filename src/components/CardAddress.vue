<template>
  <div class="card" :style="cardStyle">
    <img :src="imageSrc" alt="Foto" class="card-image" />
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ address }}</p>
      <small>{{ zip }}</small>

      <a :href="mapLink" target="_blank" rel="noopener noreferrer" class="btn-link"
        ><MapPinHouse class="marker-icon" /> Google Maps
      </a>
    </div>
  </div>
</template>

<script setup>
import { Pointer, MapPinHouse } from 'lucide-vue-next';
import { computed, defineProps } from 'vue';

const props = defineProps({
  title: String,
  address: String,
  zip: String,
  mapsQuery: String,
  color: String,
  backgroundColor: String,
  imageSrc: String,
});

const mapLink = computed(() => `https://www.google.com/maps?q=${encodeURIComponent(props.mapsQuery)}`);

const cardStyle = computed(() => ({
  color: props.color,
  backgroundColor: props.backgroundColor,
}));
</script>

<style scoped>
.card {
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.card-image {
  width: 300px;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1.2rem;
}
.card h2 {
  font-size: 1.3rem;
  text-align: center;
}

.card a {
  text-decoration: none;
}

.inline-icon {
  vertical-align: middle;
  display: inline-flex;
  margin-left: 4px;
  width: 1em;
  height: 1em;
}

.marker-icon {
  width: 1.2em;
  height: 1.2em;
  margin-right: 6px;
  vertical-align: middle;
}
</style>
