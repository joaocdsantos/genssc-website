<template>
  <div class="social-media-container">
    <div class="card">
      <div class="card-body">
        <h3>Acompanha o nosso dia a dia<br />nas Redes Sociais</h3>

        <div class="social-buttons">
          <a :href="facebookLink" target="_blank">
            <Facebook :size="48" />
          </a>
          <a :href="instagramLink" target="_blank">
            <Instagram :size="48" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Facebook, Instagram } from 'lucide-vue-next';

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
  color: #f9f9f9;
  background-color: #54983d;
}

.social-buttons a {
  margin: 10px;
  align-items: center;
  color: #f9f9f9;
  text-decoration: none;
}
</style>
