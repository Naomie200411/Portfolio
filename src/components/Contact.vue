<template>
  <div class="contact-modal bg-white w-2/3 lg:w-1/3 p-8 mx-auto rounded shadow-lg">
    <h2 class="text-xl font-bold mb-4">Contactez-moi</h2>
    <p>Email: syntichekotin@gmail.com</p>
    <p>Téléphone: +22990829540</p>
    <!-- Autres informations de contact -->
    <button @click="$emit('close')" class="mt-4 text-white bg-black rounded-full px-4 py-2">Fermer</button>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
/* Styles spécifiques pour le modal */
.contact-modal {
  max-width: 500px;
  margin-top: 100px;
}
</style>
