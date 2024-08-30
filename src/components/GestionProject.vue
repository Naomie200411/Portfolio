<template>
  <div class="font-white">
    <h1 class="text-4xl font-bold font-rounded text-cyan-100 mt-5">Gestion de Projet</h1>
    <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Présentation du projet</h2>
    <p class="text-justify hover:text-center hover:text-cyan-400 mt-2 hover:cursor-pointer">
      Ce projet a été  réalisé dans le cadre de mon stage à MA-INFO 
      Le projet consistait à collaborer  avec un collègue sur le développement du côté back-end du projet en utilisant le framework laravel.
      C'est une application  de gestion de projets . Il permet la création et la gestion des tâches d'un projet, l'affectation d'utilisateurs spécifiques et le marquage de la fin des tâches. 
    </p>

     <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Technologie utilisée</h2>
    <p class="text-justify  hover:text-cyan-400 mt-2 hover:cursor-pointer">
      Cette application a été développée en utilisant <span class="text-cyan-400 hover:text-stone-50">Laravel et TailwidCSS</span>.
    </p>

    <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Aperçu du projet</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-5 md-2">
      <img 
        v-for="(image, index) in images" 
        :key="index" 
        :src="image.src" 
        :alt="image.alt"
        class="mt-4 rounded-lg h-[250px] w-[450px] transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</template>


<script>
import image1 from '../assets/images/projets/projet1.png';
import image2 from '../assets/images/projets/projet2.png';
import image3 from '../assets/images/projets/projet3.png';
import image4 from '../assets/images/projets/projet4.png';
export default {
  name: "GestionProject",
   data() {
    return {
      images: [
        { src: image1, alt: "Aperçu de l'application 1" },
        { src: image2, alt: "Aperçu de l'application 2" },
        { src: image3, alt: "Aperçu de l'application 3" },
        { src: image4, alt: "Aperçu de l'application 4" }
      ],
      
    };
  },

};
</script>

<style scoped>
/* Ajoutez des styles spécifiques ici */
</style>
