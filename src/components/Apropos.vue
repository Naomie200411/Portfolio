<template>
  <div>
    <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition absolute top-4 right-4">
      Fermer
    </button>
    <div class="mt-9">
       <h2 class="text-2xl font-bold mb-4">À propos</h2>
      <p class="text-sm text-black-700 text-justify">
       Je m'appelle Olamidé Naomie Syntiche KOTIN et je suis une développeuse web passionnée, récemment diplômée d'une licence en informatique. J'ai effectué trois années d'études à l'École Supérieure de Gestion, d'Informatique et des Sciences (ESGIS). 
      </p><br>
     <h2 class="text-2xl font-bold mb-4 ">Expériences</h2>
     <p class="text-sm text-black-700 text-justify">J'ai eu l'opportunité de travailler dans deux entreprises (Ma-INFO,TEC-SARL) où j'ai acquis une expérience précieuse en développement web. 
      Ces expériences m'ont également permis de m'habituer à travailler en équipe et de développer ma capacité à gérer la pression efficacement.</p><br>

      <h2 class="text-2xl font-bold mb-4 ">Objectif</h2>
      <p class="text-sm text-black-700 text-justify">
       Je suis à la recherche de nouveaux défis qui me permettront de repousser mes limites, de continuer à évoluer
       professionnellement, et de mettre pleinement à profit mes compétences pour apporter le meilleur de moi-même 
       à chaque projet. </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Apropos',
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
