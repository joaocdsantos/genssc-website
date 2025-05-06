<template>
  <section class="card">
    <div class="sponsor-logos" v-for="sponsor in sponsors" :key="sponsor">
      <img :src="sponsor" />
    </div>
  </section>
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
.card {
  min-height: 10vh;
  width: 100%;
  background: var(--white);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.sponsor-logos img {
  border-radius: 0;
  width: auto;
  height: 60px;
  margin: 5px;
}
</style>
