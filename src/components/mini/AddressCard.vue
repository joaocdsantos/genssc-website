<template>
  <div class="address-card">
    <p>
      <strong>{{ title }}</strong>
    </p>
    <p>
      <a :href="mapLink" target="_blank"> {{ address }} <Pointer class="inline-icon" /></a>
    </p>
    <!-- <small>{{ zip }}</small> -->
  </div>
</template>

<script setup>
import { Pointer } from 'lucide-vue-next';
import { computed, defineProps } from 'vue';

const props = defineProps({
  title: String,
  address: String,
  zip: String,
  mapsQuery: String, // Ex: "R. Damião de Sousa 92, Gens"
});

const mapLink = computed(() => `https://www.google.com/maps?q=${encodeURIComponent(props.mapsQuery)}`);
</script>

<style scoped>
.inline-icon {
  vertical-align: middle;
  display: inline-flex;
  margin-right: 4px;
  width: 1em;
  height: 1em;
}

.address-card {
  text-align: center;
  margin-bottom: 10px;
}
.address-card a {
  text-decoration: none;
  color: inherit;
}
</style>
