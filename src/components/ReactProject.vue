<template>
  <div class="font-white">
    <h1 class="text-4xl font-bold font-rounded text-cyan-100 mt-5">React Design</h1>
    <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Présentation du projet</h2>
    <p class="text-justify hover:text-center hover:text-cyan-400 mt-2 hover:cursor-pointer">
      Ce projet a été développé dans le cadre d'un travail pratique (TP) de cours en utilisant <span class="text-cyan-400 hover:text-stone-50">React</span> pour renforcer nos compétences en front-end en utilisant React
      Il s'agit d'un site web conçu à partir d'une maquette que nous avons préalablement reçue de notre professeur.
    </p>

     <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Technologie utilisée</h2>
    <p class="text-justify  hover:text-cyan-400 mt-2 hover:cursor-pointer">
      Ce site a été développé en utilisant <span class="text-cyan-400 hover:text-stone-50">React et TailwindCSS</span>.
    </p>

    <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Aperçu du projet</h2>
    <p class="text-justify hover:text-cyan-400 mt-2 hover:cursor-pointer">
      Étant donné que c'était un travail de groupe, je vous présente les différentes pages sur lesquelles j'ai travaillé.
    </p>
    
    <!-- Réduire l'agrandissement de l'image -->
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
import image1 from '../assets/images/react/react2.png';
import image2 from '../assets/images/react/react3.png';
import image3 from '../assets/images/react/react4.png';
import image4 from '../assets/images/react/react6.png';
export default {
  name: "ReactProject",
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
