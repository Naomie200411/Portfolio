<template>
  <div class="flex flex-col  bg-white p-5">
    <!-- Barre de navigation -->
    <div class="flex flex-col sm:flex-row justify-between animate-fadeInDown" v-show="isVisible" :style="{ animationDelay: '0.2s' }">
      <span class="text-black-700 text-xl font-rounded p-2 font-bold">Développeur web</span>
      <div class="flex flex-col sm:flex-row sm:space-x-5 mt-4 sm:mt-0">
        <a @click="openModal('apropos')" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">À propos</a>
        <a @click="openModal('contact')" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">Contact</a>
        <a @click="openModal('skills')" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">Compétences</a>
      </div>
    </div>


    <!-- Contenu principal -->
   <div class="flex mt-16 sm:mt-32  animate-fadeInDown" v-show="isVisible" :style="{ animationDelay: '0.2s' }">
        <div class="flex flex-col items-start">
        <span class="text-black-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">I'm Naomie <br> KOTIN.</span>
        <p class="mt-5 sm:mt-10 text-black-700 text-xs sm:text-xl md:text-2xl font-rounded">
          Je conçois avec détermination et un souci <br class="hidden sm:block">minutieux du détail. Disponible pour travailler.
        </p>
   </div>

      <!-- Section des projets sélectionnés -->
    <div class="flex flex-col sm:flex-col md:flex-row lg:flex-col items-start sm:ml-0 md:ml-20 lg:ml-80 modal-container">
      <span class="text-black-700 text-lg font-rounded  hover:opacity-60">PROJETS RÉALISÉS</span>
      <div class="mt-5 flex flex-col">
        <!-- Projet 1 -->
        <div class="relative mb-6" @mouseover="animateLine(0)" >
          <label class="text-black-700 text-lg font-rounded hover:opacity-60" @click="showProject(0)">HairHub</label>
          <div :class="{'absolute bottom-line left-0 w-full sm:w-350p lg:w-200p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 0}"></div>
        </div>
        <!-- Projet 2 -->
        <div class="relative mb-6" @mouseover="animateLine(1)" @click="showProject(1)">
          <button class="text-black-700 text-lg font-rounded hover:opacity-60">Portfolio</button>
          <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 1}"></div>
        </div>
        <!-- Projet 3 -->
        <div class="relative mb-6" @mouseover="animateLine(2)" @click="showProject(2)">
          <button class="text-black-700 text-lg font-rounded hover:opacity-60">ReactDesign</button>
          <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 2}"></div>
        </div>
        <!-- Projet 4 -->
        <div class="relative mb-6" @mouseover="animateLine(3)" @click="showProject(3)">
          <button class="text-black-700 text-lg font-rounded hover:opacity-60">Reconnaissance de texte dans image</button>
          <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 3}"></div>
        </div>
        <!-- Projet 5 -->
        <div class="relative mb-6" @mouseover="animateLine(4)" @click="showProject(4)">
          <button class="text-black-700 text-lg font-rounded hover:opacity-60">Gestion de Projet</button>
          <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 4}"></div>
        </div>
      </div>
    </div>
    </div>

     <!-- Section pour afficher le projet sélectionné -->
   <transition name="slide-fade">
  <div v-if="selectedProject !== null" class="fixed inset-0 z-50 bg-slate-950 text-white flex items-center justify-center opacity-90">
    <div class="w-full h-full p-20 relative">
      <button class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition absolute top-0 right-4" @click="closeProject">Fermer</button>
      <component :is="projectComponent"></component>
    </div>
  </div>
</transition>


    <!-- Modal À propos -->
    <transition enter-active-class="animate-slide-right-enter" leave-active-class="animate-slide-right-leave">
      <div v-if="isModalOpen && activeModal === 'apropos'" class="fixed inset-0 z-50 flex bg-black bg-opacity-50">
        <Apropos @close="closeModal" class="bg-white w-full sm:w-2/3 lg:w-1/3 h-full p-8 ml-auto" />
      </div>
    </transition>

    <!-- Modal Contact -->
    <transition enter-active-class="animate-slide-down-enter" leave-active-class="animate-slide-down-leave">
      <div v-if="isModalOpen && activeModal === 'contact'" class="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 pt-10">
        <Contact @close="closeModal" />
      </div>
    </transition>

     <!-- Modal Skills -->
    <transition enter-active-class="animate-slide-right-enter" leave-active-class="animate-slide-right-leave">
      <div v-if="isModalOpen && activeModal === 'skills'" class="fixed inset-0 z-50 flex bg-black bg-opacity-50">
        <Skills @close="closeModal" class="bg-white w-full sm:w-2/3 lg:w-1/3 h-full p-8 ml-auto" />
      </div>
    </transition>

  </div>
</template>

<script>
import Apropos from './Apropos.vue';
import Contact from './Contact.vue';
import Skills from './Skills.vue';
import HairhubProject from './HairhubProject.vue';
import ReactProject from './ReactProject.vue';
import FlutterProject from './FlutterProject.vue';
import PortfolioProject from './PortfolioProject.vue';
import GestionProject from './GestionProject.vue';




export default {
  name: 'Acceuil',
  components: {
    Apropos,
    Contact,
    Skills
  },
  data() {
    return {
      isVisible: false,
      activeIndex: null,
      isModalOpen: false,
      activeModal: null,
      selectedProject: null,
      projectVisible: false,
      projectComponents: [HairhubProject,PortfolioProject,ReactProject,FlutterProject,GestionProject],
    };
  },
   computed: {
    projectComponent() {
      return this.selectedProject !== null ? this.projectComponents[this.selectedProject] : null;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);

  },
  methods: {
    animateLine(index) {
      this.activeIndex = null;
      setTimeout(() => {
        this.activeIndex = index;
      }, 50);
    },
    openModal(modal) {
      this.activeModal = modal;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.activeModal = null;
    },

     showProject(index) {
    this.selectedProject = index;
    this.projectVisible = true;
    },
    closeProject() {
      this.projectVisible = false;
      setTimeout(() => {
        this.selectedProject = null;
      }, 100); // Durée de l'animation de fermeture
    },
    beforeEnter(el) {
      el.style.transform = 'translateY(100%)';
      el.style.opacity = '0';
      el.style.transition = 'transform 1s ease-in-out, opacity 2s ease-in-out';
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transform = 'translateY(0)';
      el.style.opacity = '1';
      done();
    },
    leave(el, done) {
      el.style.transform = 'translateY(100%)';
      el.style.opacity = '0';
      el.style.transition = 'transform 1s ease-in-out, opacity 2s ease-in-out';
      done();
    },

  },
};
</script>

<style scoped>
/* Animation d'apparition */
@keyframes slide-in {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animation de disparition */
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}

.slide-fade-enter-active {
  animation: slide-in 0.7s ease-in-out;
}

.slide-fade-leave-active {
  animation: slide-out 1s ease-in-out;
}
body {
  overflow-x: hidden;
}
/* Exemple de modal */
.modal-container {
  max-width: 100%;
  overflow-x: hidden;
}




</style>