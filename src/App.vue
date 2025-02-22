<template>
  <div class="landing-container">
    <header>
      <Logo></Logo>
    </header>
    <main>
      
      <Club></Club>
      <h2 @click="toggleTeams">Equipas</h2>
      <Teams v-if="showTeams"></Teams>
      <h2 @click="toggleInfrastructures">Infraestrutura</h2>
      <Infrastructures v-if="showInfrastructures"></Infrastructures>
      <h2 @click="toggleLocation">Localização e Contato</h2>
      <LocationContacts v-if="showLocation"></LocationContacts>
      <CallAction></CallAction>
      <!--<auto-play-carousel></auto-play-carousel>-->
    </main>
    <footer>
      <Footer></Footer>
    </footer>
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

<style scoped>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Ocupar toda a tela no #app */
#app {
  min-height: 100vh; /* 100% da altura da viewport */
  display: flex;
  flex-direction: column;
}

.landing-container {
  background-color: #54983d;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa toda a tela */
  padding: 25px;
}
header{
  background-color: #fefefe;
}
main {
  flex: 1; /* Faz o conteúdo crescer e ocupar o espaço disponível */
  background-color: #fefefe;
  }
</style>
