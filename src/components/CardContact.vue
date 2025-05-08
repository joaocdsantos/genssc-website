<template>
  <section class="card" id="contacts">
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
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
  max-width: 320px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  background-color: var(--white);
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  margin-top: 0.8rem;
  transition: background 0.2s ease;
  gap: 0.7rem;
}

.contact-item svg {
  width: 24px;
  height: 24px;
  justify-self: start;
}

.contact-item span {
  justify-self: center;
  text-align: center;
  width: 100%;
}
</style>
