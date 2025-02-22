<template>
  <div class="call-action">
    <p>Siga-nos nas redes sociais:</p>
    <div class="social-links">
      <a :href="facebookLink" target="_blank">Facebook</a>
      <a :href="instagramLink" target="_blank">Instagram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallAction",
  data() {
    return {
      facebookLink: "https://www.facebook.com/seuclube",
      instagramLink: "https://www.instagram.com/seuclube",
    }

  }
};
</script>

<style scoped>

</style>
