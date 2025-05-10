<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logos/genssc_logo.png" alt="Logotipo Gens Sport Clube" />
      <img src="../assets/logos/logo100anos_LR.png" alt="Logotipo Centenário Gens Sport Clube" />
    </div>
    <div class="menu" @click="toggleMenu">
      <Menu v-if="!menuOpen" class="menu-icon" aria-label="Abrir menu" />
      <X v-else class="menu-icon" aria-label="Fechar menu" />
    </div>

    <!-- Fundo escurecido -->
    <div v-if="menuOpen" class="menu-overlay" @click="toggleMenu"></div>

    <!-- Off-canvas -->
    <nav :class="['menu-offcanvas', { open: menuOpen }]">
      <!-- <div class="menu-logo">
        <img src="../assets/logos/genssc_logo.png" alt="Gens SC" />
      </div> -->

      <X class="menu-close-icon" @click="toggleMenu" />
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <!-- Router links -->
          <RouterLink v-if="item.link.startsWith('/')" :to="item.link" @click.native="toggleMenu">
            <component :is="item.icon" class="menu-item-icon" />
            <span>{{ item.name }}</span>
          </RouterLink>

          <!-- Âncoras (scroll suave programático) -->
          <a v-else-if="item.anchor" href="javascript:void(0)" @click="navigateToAnchor(item.link)">
            <component :is="item.icon" class="menu-item-icon" />
            <span>{{ item.name }}</span>
          </a>

          <!-- Links externos -->
          <a
            v-else
            :href="item.link"
            @click="toggleMenu"
            :target="item.link.startsWith('http') ? '_blank' : null"
            rel="noopener noreferrer"
          >
            <component :is="item.icon" class="menu-item-icon" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Menu, X, BookOpen, Users, MapPin, Phone, Share2, HomeIcon, FileText } from 'lucide-vue-next';

const menuOpen = ref(false);
const router = useRouter();

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const navigateToAnchor = async hash => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  } else {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  toggleMenu();
};

const menuItems = ref([
  { name: 'Início', link: '#inicio', icon: HomeIcon, anchor: true },
  { name: 'O Gens SC', link: '/clube', icon: BookOpen },
  {
    name: 'Novos Sócios',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeoVgk-QcUSXEopzezLnNHDZ0PqujrQcXld3gIdDmHNFflm6A/viewform',
    icon: Users,
  },
  { name: 'Localização', link: '/localizacao', icon: MapPin },
  { name: 'Contacto', link: '#contactos', icon: Phone, anchor: true },
  { name: 'Redes Sociais', link: '#redes-sociais', icon: Share2, anchor: true },
  { name: 'Outras Informações', link: '/institucional', icon: FileText },
]);
</script>

<style scoped>
/* HEADER */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: var(--green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 1000;
}

/* LOGOS */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  margin-top: 50px;
  width: 80px;
  height: auto;
}

/* MENU ICON */
.menu {
  display: flex;
  align-items: center;
}

.menu-icon {
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-icon:hover {
  transform: scale(1.3);
}

/* OVERLAY ESCURECIDO */
.menu-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}

/* OFF-CANVAS MENU */
.menu-offcanvas {
  position: fixed;
  top: 0;
  right: -300px;
  width: 250px;
  height: 100vh;
  background: var(--green);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  transition: right 0.3s ease-in-out;
  z-index: 1001;
  padding: 7rem 1rem 2rem 1rem;
}

.menu-offcanvas.open {
  right: 0;
}

.menu-offcanvas ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-offcanvas li {
  margin-bottom: 1rem;
}

.menu-offcanvas a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s ease;
  padding: 0.5rem;
  border-radius: 6px;
}

.menu-offcanvas a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
}

.menu-item-icon {
  width: 20px;
  height: 20px;
  color: var(--white); /* ícones brancos */
}

.menu-close-icon {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  font-size: 1.8rem;
  color: var(--white);
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 1002;
}
.menu-close-icon:hover {
  transform: scale(1.2);
}
</style>
