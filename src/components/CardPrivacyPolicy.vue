<template>
  <section class="card">
    <h2>Política de Privacidade</h2>
    <p>
      Este <em>website</em> não recolhe nem processa quaisquer dados pessoais dos utilizadores. Não utilizamos
      <em>cookies</em> nem ferramentas de rastreamento. Para contacto institucional, utilize o email:
    </p>
    <a href="mailto:geral@genssc.pt" class="contact-item" aria-label="contacto eletrónico">
      <MailPlus />
      <span> geral@genssc.pt</span>
    </a>
  </section>
</template>

<script setup>
import { MailPlus } from 'lucide-vue-next';
</script>

<style scoped>
.card {
  width: 100%;
  color: var(--white);
  background: var(--green);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}
.card h2 {
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 2rem;
}
.card p {
  max-width: 850px;
  text-align: justify;
  margin-bottom: 1rem;
}
.contact-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
  max-width: 260px;
  font-weight: 600;
  color: var(--green);
  background-color: var(--white);
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
