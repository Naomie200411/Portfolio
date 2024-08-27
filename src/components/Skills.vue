<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Compétences</h2>
    <p class="text-lg text-gray-700">
      Ceci est le contenu du modal 'Compétences'. 
    </p>
    <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition">
      Fermer
    </button>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
