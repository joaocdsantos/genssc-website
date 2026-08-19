<template>
  <header class="header">
    <button
      type="button"
      class="menu"
      @click="toggleMenu"
      :aria-expanded="menuOpen"
      aria-controls="main-menu"
      :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
    >
      <Menu v-if="!menuOpen" class="menu-icon" aria-hidden="true" />
      <X v-else class="menu-icon" aria-hidden="true" />
    </button>
    <div class="logo">
      <img src="../assets/logos/genssc_logo.webp" alt="Logotipo Gens Sport Clube" loading="lazy" />
      <img src="../assets/logos/logo100anos_LR.webp" alt="Logotipo Centenário Gens Sport Clube" loading="lazy" />
    </div>

    <button
      type="button"
      class="hino-toggle"
      @click="toggleHino"
      :aria-pressed="isPlaying"
      :aria-label="isPlaying ? 'Parar hino' : 'Ouvir hino'"
    >
      <component :is="isPlaying ? VolumeX : Volume2" class="menu-icon" aria-hidden="true" />
    </button>

    <Transition name="fade">
      <div v-if="menuOpen" class="menu-overlay" @click="toggleMenu"></div>
    </Transition>

    <nav id="main-menu" aria-label="Menu principal" :class="['menu-offcanvas', { open: menuOpen }]">
      <div class="menu-top">
        <div class="menu-header">
          <img src="../assets/logos/genssc_logo.webp" alt="" class="menu-header-logo" />
          <span class="menu-header-title">Gens Sport Clube</span>
        </div>
        <button type="button" class="menu-close-icon" @click="toggleMenu" aria-label="Fechar menu">
          <X aria-hidden="true" />
        </button>
      </div>
      <hr class="menu-separator" />
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <RouterLink
            v-if="item.link.startsWith('/')"
            :to="item.link"
            :class="{ active: route.path === item.link }"
            @click.native="toggleMenu"
          >
            <span class="icon-badge">
              <component :is="item.icon" class="menu-item-icon" />
            </span>
            <span>{{ item.name }}</span>
          </RouterLink>

          <a v-else-if="item.anchor" href="javascript:void(0)" @click="navigateToAnchor(item.link)">
            <span class="icon-badge">
              <component :is="item.icon" class="menu-item-icon" />
            </span>
            <span>{{ item.name }}</span>
          </a>

          <a
            v-else
            :href="item.link"
            :class="{ cta: item.cta }"
            @click="toggleMenu"
            :target="item.link.startsWith('http') ? '_blank' : null"
            rel="noopener noreferrer"
          >
            <span class="icon-badge">
              <component :is="item.icon" class="menu-item-icon" />
            </span>
            <span>{{ item.name }}</span>
            <ChevronRight v-if="item.cta" class="cta-arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <div class="menu-footer">
        <a href="https://facebook.com/genssc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="../assets/logos/facebook.svg" alt="" loading="lazy" />
        </a>
        <a
          href="https://instagram.com/gens_sport_clube"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img src="../assets/logos/instagram.svg" alt="" loading="lazy" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  Menu,
  X,
  BookOpen,
  Users,
  MapPin,
  Phone,
  HomeIcon,
  ChevronRight,
  Volume2,
  VolumeX,
} from 'lucide-vue-next';
import { useAnthem } from '../composables/useAnthem';

const menuOpen = ref(false);
const router = useRouter();
const route = useRoute();
const { isPlaying, toggleHino } = useAnthem();

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeOnEscape = e => {
  if (e.key === 'Escape') toggleMenu();
};

let lockedScrollY = 0;

const lockBodyScroll = () => {
  lockedScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.width = '100%';
};

const unlockBodyScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, lockedScrollY);
};

watch(menuOpen, isOpen => {
  if (isOpen) {
    lockBodyScroll();
    window.addEventListener('keydown', closeOnEscape);
  } else {
    unlockBodyScroll();
    window.removeEventListener('keydown', closeOnEscape);
  }
});

onBeforeUnmount(() => {
  if (menuOpen.value) unlockBodyScroll();
  window.removeEventListener('keydown', closeOnEscape);
});

const navigateToAnchor = async hash => {
  toggleMenu();
  if (router.currentRoute.value.path === '/' && router.currentRoute.value.hash === hash) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  await router.push({ path: '/', hash });
};

const menuItems = ref([
  { name: 'Início', link: '#inicio', icon: HomeIcon, anchor: true },
  { name: 'O Gens SC', link: '/clube', icon: BookOpen },
  {
    name: 'Área de Sócios',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeoVgk-QcUSXEopzezLnNHDZ0PqujrQcXld3gIdDmHNFflm6A/viewform',
    icon: Users,
    cta: true,
  },
  { name: 'Localização', link: '/localizacao', icon: MapPin },
  { name: 'Contacto', link: '#contactos', icon: Phone, anchor: true },
]);
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: var(--green);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  z-index: 1000;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  margin-top: 50px;
  width: 80px;
  height: auto;
}

.menu {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
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

.hino-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.menu-offcanvas {
  position: fixed;
  top: 0;
  left: -300px;
  width: 250px;
  height: 100vh;
  height: 100svh;
  background: var(--green);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  transition: left 0.3s ease-in-out;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.menu-offcanvas.open {
  left: 0;
}

.menu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.menu-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
}

.menu-header-logo {
  width: 32px;
  height: 32px;
  border-radius: 0;
  flex-shrink: 0;
}

.menu-header-title {
  color: var(--white);
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-separator {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 1.2rem 0;
}

.menu-offcanvas ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.menu-footer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.menu-footer img {
  width: 26px;
  height: 26px;
  border-radius: 0;
  transition: transform 0.2s ease;
}

.menu-footer a:hover img {
  transform: scale(1.15);
}

.menu-offcanvas li {
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateX(-16px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.menu-offcanvas.open li {
  opacity: 1;
  transform: translateX(0);
}

.menu-offcanvas.open li:nth-child(1) {
  transition-delay: 0.1s;
}
.menu-offcanvas.open li:nth-child(2) {
  transition-delay: 0.15s;
}
.menu-offcanvas.open li:nth-child(3) {
  transition-delay: 0.2s;
}
.menu-offcanvas.open li:nth-child(4) {
  transition-delay: 0.25s;
}
.menu-offcanvas.open li:nth-child(5) {
  transition-delay: 0.3s;
}
.menu-offcanvas.open li:nth-child(6) {
  transition-delay: 0.35s;
}
.menu-offcanvas.open li:nth-child(7) {
  transition-delay: 0.4s;
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
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  border-left: 4px solid transparent;
}

.menu-offcanvas a:hover {
  background-color: var(--red);
  color: var(--white);
}

.menu-offcanvas a:hover .icon-badge {
  background: rgba(255, 255, 255, 0.2);
}

.menu-offcanvas a.active {
  background-color: rgba(255, 255, 255, 0.15);
  font-weight: 700;
  border-left-color: var(--red);
}

.icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
  transition: background 0.2s ease;
}

.menu-offcanvas a.active .icon-badge {
  background: rgba(255, 255, 255, 0.2);
}

.menu-offcanvas a.cta {
  background: #f4c430;
  color: var(--green);
  font-weight: 700;
  margin: 0.4rem 0;
  box-shadow: 0 2px 10px rgba(244, 196, 48, 0.45);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.menu-offcanvas a.cta:hover {
  background: var(--red);
  color: var(--white);
  box-shadow: 0 2px 12px rgba(214, 40, 40, 0.5);
  border-radius: 6px;
}

.cta-arrow {
  width: 18px;
  height: 18px;
  margin-left: auto;
  flex-shrink: 0;
}

.menu-offcanvas a.cta .icon-badge {
  background: rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease;
}

.menu-offcanvas a.cta:hover .icon-badge {
  background: rgba(255, 255, 255, 0.25);
}

.menu-offcanvas a.cta .menu-item-icon {
  color: var(--green);
  transition: color 0.2s ease;
}

.menu-offcanvas a.cta:hover .menu-item-icon {
  color: var(--white);
}

.menu-item-icon {
  width: 18px;
  height: 18px;
  color: var(--white);
}

.menu-close-icon {
  background: none;
  border: none;
  padding: 0;
  color: var(--white);
  cursor: pointer;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.menu-close-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
.menu-close-icon:hover {
  transform: scale(1.2);
}
</style>
