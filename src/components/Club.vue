<template>
  <v-card class="custom-card" @click="toggleClub">
    <v-card-title class="custom-title">Gens SC</v-card-title>

    <v-card-text v-if="showClub" class="custom-text">
      <p>Informações sobre o clube, sua história, missão, valores, etc.</p>
      <p>Fotos do clube e de eventos importantes.</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const showClub = ref(false);

const toggleClub = () => {
  showClub.value = !showClub.value;
};
</script>

<style scoped>
</style>
