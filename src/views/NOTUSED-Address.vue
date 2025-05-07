<template>
  <div class="address-container">
    <div class="card">
      <div class="card-body">
        <h1><MapPinHouse class="marker-icon" /> Morada</h1>

        <div class="address-item">
          <AddressCard
            title="Parque Desportivo de Gens"
            address="R. do Parque de Jogos, sn"
            zip="4515-666 Gens (Foz do Sousa)"
            mapsQuery="R. do Parque de Jogos, Gens, 4515-666"
          />
        </div>

        <div class="address-item">
          <AddressCard
            title="Sede - Gens SC"
            address="R. Damião de Sousa 92"
            zip="4515-123 Gens (Foz do Sousa)"
            mapsQuery="R. Damião de Sousa 92, Gens, 4515-123"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinHouse } from 'lucide-vue-next';
import AddressCard from './mini/AddressCard.vue';
</script>

<style scoped>
.address-container {
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

.address-item {
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.marker-icon {
  width: 24px;
  height: 24px;
}
</style>
