<template>
  <div class="social-media-container">
    <div class="card">
      <div class="card-body">
        <h3>Acompanha o nosso dia a dia<br />nas Redes Sociais</h3>

        <div class="social-buttons">
          <a :href="facebookLink" target="_blank">
             <img :src="FACEBOOK_LOGO"></img>
          </a>
          <a :href="instagramLink" target="_blank">
                <img :src="INSTAGRAM_LOGO"></img>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Facebook, Instagram } from 'lucide-vue-next';


import FACEBOOK_LOGO from "../assets/logos/facebook.svg";
import INSTAGRAM_LOGO from "../assets/logos/instagram.svg";

//Pros
defineProps(['facebookLink', 'instagramLink']);
</script>

<style scoped>
.social-media-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.card {
  border-radius: 15px;
  width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fefefe;
  background-color: #54983d;
}

img {
  margin: 50px 30px;
  width: 48px;
  height: 48px;
}
</style>
