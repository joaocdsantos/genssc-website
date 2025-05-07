<template>
  <div class="map-container" id="address">
    <div id="maps"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'maps',
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    center: [-8.484013, 41.113915],
    zoom: 13.5,
  });

  // Criando marcadores personalizados com cores iguais ao layout
  new maplibregl.Marker({ color: 'red' }) // Estádio
    .setLngLat([-8.483031976292551, 41.11856137027572])
    .addTo(map)
    .setPopup(new maplibregl.Popup().setHTML('<h3>Estádio</h3><p>Local da realização das partidas!</p>'));

  new maplibregl.Marker({ color: 'green' }) // Sede
    .setLngLat([-8.484990182425541, 41.114817243620216])
    .addTo(map)
    .setPopup(
      new maplibregl.Popup().setHTML('<h3>Sede</h3><p>Local de convivência entre associados e amigos do Gens SC.</p>')
    );
});
</script>

<style scoped>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

#maps {
  width: 90%;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
