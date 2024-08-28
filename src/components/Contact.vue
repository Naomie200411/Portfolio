<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div class="contact-modal bg-white w-3/4 lg:w-1/3 p-8 rounded shadow-lg relative">
      <button @click="$emit('close')" class="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-500 rounded-full px-4 py-2">
        Fermer
      </button>
      <h2 class="text-xl font-bold mb-4 mt-6">Contactez-moi</h2>
      <p>Email: syntichekotin@gmail.com</p>
      <p>Téléphone: +22990829540 / +22941632564</p>
      <p>Connectez-vous avec moi sur <a href="https://www.linkedin.com/in/syntiche-kotin-4288872a4/" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>.</p>    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style scoped>
.contact-modal {
  max-width: 500px;
  position: relative; 
}
</style>
