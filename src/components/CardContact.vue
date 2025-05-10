<template>
  <section class="card" id="contactos">
    <h1>Contacta-nos</h1>

    <div class="contact-info">
      <a href="mailto:geral@genssc.pt" class="contact-item" aria-label="contacto eletrónico">
        <MailPlus />
        <span> geral@genssc.pt</span>
      </a>
      <a href="mailto:formacao@genssc.pt" class="contact-item" aria-label="contacto eletrónico">
        <MailPlus />
        <span> formacao@genssc.pt</span>
      </a>
      <a href="mailto:direcao@genssc.pt" class="contact-item" aria-label="contacto eletrónico">
        <MailPlus />
        <span> direcao@genssc.pt</span>
      </a>

      <a href="tel:+351224541250" class="contact-item" aria-label="contacto telefónico">
        <PhoneForwarded />
        <span> 224 541 250 </span>
      </a>
    </div>
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
  color: var(--white);
  background: var(--green);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}
.card h1 {
  margin-bottom: 1rem;
}
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.contact-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
  max-width: 260px;
  font-weight: 600;
  color: var(--green);
  background: var(--white);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
  gap: 0.5rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: scale(1.1);
}
</style>
