<template>
  <section class="card" id="contactos">
    <h2>Contacta-nos</h2>

    <div class="contact-info">
      <div class="contact-group">
        <span class="contact-label">Geral</span>
        <a
          href="mailto:geral@genssc.pt"
          class="contact-item"
          aria-label="Email geral: geral@genssc.pt"
          title="geral@genssc.pt"
        >
          <MailPlus aria-hidden="true" />
        </a>
      </div>

      <div class="contact-group">
        <span class="contact-label">Formação</span>
        <a
          href="mailto:formacao@genssc.pt"
          class="contact-item"
          aria-label="Email da formação: formacao@genssc.pt"
          title="formacao@genssc.pt"
        >
          <MailPlus aria-hidden="true" />
        </a>
      </div>

      <div class="contact-group">
        <span class="contact-label">Direção</span>
        <a
          href="mailto:direcao@genssc.pt"
          class="contact-item"
          aria-label="Email da direção: direcao@genssc.pt"
          title="direcao@genssc.pt"
        >
          <MailPlus aria-hidden="true" />
        </a>
      </div>

      <div class="contact-group">
        <span class="contact-label">Telefone</span>
        <a
          href="tel:+351224541250"
          class="contact-item"
          aria-label="Telefone: 224 541 250"
          title="224 541 250"
        >
          <PhoneForwarded aria-hidden="true" />
        </a>
      </div>
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
.card h2 {
  margin-bottom: 1rem;
}
.contact-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  margin-top: 1rem;
}
.contact-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
  margin-bottom: 0.4rem;
}
.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: var(--green);
  background: var(--white);
  text-decoration: none;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.contact-item svg {
  width: 24px;
  height: 24px;
}

.contact-item:hover {
  transform: scale(1.1);
}
</style>
