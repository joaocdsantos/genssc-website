<template>
  <div id="app">
    <div class="content">
      <Logo></Logo>
      <h2 @click="toggleClub">Gens SC</h2>
      <Club v-if="showClub"></Club>

      <h2 @click="toggleTeams">Equipas</h2>
      <Teams v-if="showTeams"></Teams>

      <h2 @click="toggleInfrastructures">Infraestrutura</h2>
      <Infrastructures v-if="showInfrastructures"></Infrastructures>

      <h2 @click="toggleLocation">Localização e Contato</h2>
      <LocationContacts v-if="showLocation"></LocationContacts>

      <CallAction></CallAction>

      <auto-play-carousel></auto-play-carousel>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Club from "./components/Club.vue";
import Teams from "./components/Teams.vue";
import Infrastructures from "./components/Infrastructures.vue";
import CallAction from "./components/CallAction.vue";
import LocationContacts from "./components/LocationContacts.vue";
import Footer from "./components/Footer.vue";
import AutoPlayCarousel from "./components/AutoPlayCarousel.vue";


export default {
  name: 'App',
  components: {
    Logo,
    Club,
    Teams,
    Infrastructures,
    CallAction,
    LocationContacts,
    Footer,
    AutoPlayCarousel,
  },
  data() {
    return {
      showClub: false,
      showTeams: false,
      showInfrastructures: false,
      showLocation: false
    }
  },
  methods: {
    toggleClub() {
      this.showClub = !this.showClub;
    },
    toggleTeams() {
      this.showTeams = !this.showTeams;
    },
    toggleInfrastructures() {
      this.showInfrastructures = !this.showInfrastructures;
    },
    toggleLocation() {
      this.showLocation = !this.showLocation;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  min-height: 100vh; /* Garante que o conteúdo ocupe pelo menos toda a altura da viewport */
}
</style>
