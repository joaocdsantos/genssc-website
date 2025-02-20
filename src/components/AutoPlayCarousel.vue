<script>
export default {
  name: "AutoPlayCarousel",
  mounted() {
    this.loadImagesFromAssets();
  },
  data() {
    return {
      images: [] // Initialize an empty array to store the image paths
    }
  },
  methods: {
    loadImagesFromAssets() {
      // Dynamically load images from the assets folder
      const imagesContext = require.context('@/assets/partners', false, /\.(png|jpe?g|svg)$/);
      imagesContext.keys().forEach(key => {
        const imagePath = imagesContext(key);
        this.images.push(imagePath);
      });
    }
  }
}
</script>

<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7))
  }
}

/* Styling */
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;

  /* White gradient */
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

.slider::before,
.slider::after {
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: fit-content;
  gap: 10px; /* Adjust spacing between slides */
}

.slide {
  height: 100px;
  width: 250px;
}

.slide img {
  /* Ensure images maintain their aspect ratio */
  width: 100%;
  height: 100%;
  object-fit: contain; /* or object-fit: contain; */
}
</style>