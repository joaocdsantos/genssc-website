<template>
  <section class="card" id="contacts">
    <h1>Contacta-nos</h1>
    <a href="mailto:geral@genssc.pt" class="contact-item">
      <MailPlus />
      <span> geral@genssc.pt</span>
    </a>
    <a href="tel:+351224541250" class="contact-item">
      <PhoneForwarded />
      <span> 224 541 250</span>
    </a>

    <!-- <a href="mailto:geral@genssc.pt"><p>geral@genssc.pt</p></a>
    <a href="tel:+351224541250"><p>224 541 250</p></a>
    <button class="btn">Envia mensagem</button> -->
  </section>
</template>
<script setup>
import { PhoneForwarded, MailPlus } from 'lucide-vue-next';
</script>
<style scoped>
section {
  scroll-margin-top: 80px;
}
.card {
  min-height: 30vh;
  width: 100%;
  color: var(--white);
  background: var(--green);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}
.card h1 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}
.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  background-color: var(--white);
  padding: 0.75rem 1.2rem;
  border-radius: 8px;
  margin-top: 0.8rem;
  transition: background 0.2s ease;
}

.contact-item:hover {
  background-color: var(--green-light, #3a7d5e);
}

.contact-item svg {
  width: 20px;
  height: 20px;
}
</style>
