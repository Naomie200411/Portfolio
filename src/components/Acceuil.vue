<template>
  <div class="flex flex-col min-h-screen bg-white p-5">
    <!-- Barre de navigation -->
    <div class="flex flex-col sm:flex-row justify-between animate-fadeInDown" v-show="isVisible" :style="{ animationDelay: '1s' }">
  <span class="text-black-700 text-xl font-rounded p-2">Naomie</span>
  <div class="flex flex-col sm:flex-row sm:space-x-5 mt-4 sm:mt-0">
    <a @click="openModal('apropos')" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">À propos</a>
    <a @click="openModal('contact')" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">Contact</a>
    <a @click="openModal('skills')" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">Compétences</a>
  </div>
</div>


    <!-- Contenu principal -->
   <div class="flex mt-16 sm:mt-32 w-full animate-fadeInDown" v-show="isVisible" :style="{ animationDelay: '1s' }">
        <div class="flex flex-col items-start">
        <span class="text-black-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">I'm Naomie <br> KOTIN.</span>
        <p class="mt-5 sm:mt-10 text-black-700 text-lg sm:text-xl md:text-2xl font-rounded">
          I design products with purpose and meticulous <br class="hidden sm:block"> attention to detail. Available for work.
        </p>
   </div>

      <!-- Section des projets sélectionnés -->
     <div class="flex flex-col sm:flex-col md:flex-row lg:flex-col items-start sm:ml-0 md:ml-20 lg:ml-80">
  <span class="text-black-700 text-lg font-rounded opacity-50 hover:opacity-75">SELECTED PROJECTS</span>
  <div class="mt-5 flex flex-col">
    <!-- Projet 1 -->
    <div class="relative mb-6" @mouseover="animateLine(0)">
      <label class="text-black-700 text-lg font-rounded hover:opacity-60">StartGlobal</label>
      <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 0}"></div>
    </div>
    <!-- Projet 2 -->
    <div class="relative mb-6" @mouseover="animateLine(1)">
      <button class="text-black-700 text-lg font-rounded hover:opacity-60">Project2</button>
      <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 1}"></div>
    </div>
    <!-- Projet 3 -->
    <div class="relative mb-6" @mouseover="animateLine(2)">
      <button class="text-black-700 text-lg font-rounded hover:opacity-60">Project3</button>
      <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 2}"></div>
    </div>
    <!-- Projet 4 -->
    <div class="relative mb-6" @mouseover="animateLine(3)">
      <button class="text-black-700 text-lg font-rounded hover:opacity-60">Project4</button>
      <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 3}"></div>
    </div>
    <!-- Projet 5 -->
    <div class="relative mb-6" @mouseover="animateLine(4)">
      <button class="text-black-700 text-lg font-rounded hover:opacity-60">Project5</button>
      <div :class="{'absolute bottom-line left-0 w-350p border-t-line border-line-gray transition-none': true, 'animate-fadeOutAndSlideIn': activeIndex === 4}"></div>
    </div>
  </div>
</div>

    </div>

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
    };
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
  },
};
</script>

<style scoped>




</style>