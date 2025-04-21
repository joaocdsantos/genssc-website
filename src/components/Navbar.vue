<template>
  <div class="navbar-main-container">
    
    <div class="menu" @click="toggleMenu">
      <Menu v-if="!menuOpen" class="menu-icon"/>
      <X v-else class="menu-icon" />
    </div>


    <div class="logos">
      <img :src="gensLogo"></img>
      <img :src="centenaryLogo"></img>
    </div>
    <div v-if="menuOpen" class="menu-dropdown">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
        <a :href="item.link" @click="toggleMenu">{{ item.name }}</a>
        </li>
      </ul>
     </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu, X } from 'lucide-vue-next';

import gensLogo from "../assets/logos/genssc_logo.png";
import centenaryLogo from "../assets/logos/logo100anos_LR.png";

const menuOpen = ref(false);


const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};


const menuItems = ref([
  { name: "Início", link: "#home" },
  { name: "Mapa", link: "#map" },
  { name: "Moradas", link: "#address" },
  { name: "Contacto", link: "#contacts" },
  { name: "Redes Sociais", link: "#social-networks" }
]);

</script>

<style scoped>

.navbar-main-container {
  position: fixed;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
 /* background-color: rgba(84, 152, 61, 0.8); verde */
  background-color: rgba(196, 58, 34, 0.9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid #54983d; /* 🟢 Borda branca */
  backdrop-filter: blur(8px);                /* efeito vidro */
  -webkit-backdrop-filter: blur(8px);
}

.logos {
  margin-top: 5%;
  margin-right: 5%;
  display: flex;
  align-items: center;
}

.logos img {
  width: 100px;
  height: auto;
}

/* Estilização do Menu */
.menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.menu-icon {
  width: 24px;
  height: 24px;
  color: white;
  transition: transform 0.2s ease-in-out;
}

.menu:hover .menu-icon {
  transform: scale(1.2);
}

.menu-dropdown {
  position: absolute;
  top: 70px; /* abaixo da navbar */
  left: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 15px 25px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 200;
  animation: fadeIn 0.5s ease-in-out;
}

.menu-dropdown ul {
  list-style:square;
  padding: 0;
  margin: 0;
}

.menu-dropdown li {
  margin: 12px 0;
}

.menu-dropdown a {
  color: #751234;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>