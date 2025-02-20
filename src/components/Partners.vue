<template>
  <div class="carousel">
    <swiper :options="swiper_options">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Imagem do carrossel">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: "PartnersMKT",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      images: [],
      swiper_options: {
        autoplay: {
          delay: 5000, // milliseconds
          disableOnInteraction: false // continue autoplay even when user interacts with the slider
        },
        loop: true, // loop the carousel
        effect: 'slide', // use the slide effect
        direction: 'horizontal', // slide from left to right
        speed: 1000, // slide transition speed in milliseconds
        // Responsive breakpoints for different screen sizes
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
          // Add more breakpoints as needed
        }
      }
    }
  },
  mounted() {
    this.loadImagesFromFolder()
  },
  methods: {
    loadImagesFromFolder() {
      const imagesContext = require.context('@/assets/partners', false, /\.(png|jpe?g|svg)$/)
      this.images = imagesContext.keys().map(key => imagesContext(key))
    }
  }
}
</script>

<style scoped>
/* Estilos opcionais para o carrossel */
.carousel {
  width: 100%;
}
</style>
