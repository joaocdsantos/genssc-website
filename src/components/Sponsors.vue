<template>
  <div class="container-sponsors">
    <div class="sponsor-logos" v-for="sponsor in sponsors" :key="sponsor">
      <img :src="sponsor" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sponsors = ref([]);

const loadSponsors = async () => {
  try {
    // Obtém todas as imagens na pasta sponsors
    const imagesContext = import.meta.glob('../assets/sponsors/*.{png,jpg,jpeg,svg}');

    // Precisamos carregar os arquivos chamando as funções de importação
    const paths = await Promise.all(
      Object.keys(imagesContext).map(async path => {
        const module = await imagesContext[path](); // Carrega a imagem
        return module.default; // Pega a URL da imagem
      })
    );

    sponsors.value = paths;
    console.log('Imagens carregadas:', sponsors.value);
  } catch (error) {
    console.error('Erro ao carregar Patrocinadores', error);
  }
};

onMounted(loadSponsors);
</script>

<style scoped>
.container-sponsors {
  margin: 20px 0 40px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.sponsor-logos img {
  width: auto;
  height: 75px;
  margin: 5px;
}
</style>
