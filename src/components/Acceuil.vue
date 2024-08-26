<template>
  <div class="flex flex-col min-h-screen bg-white p-5">
    <!-- Barre de navigation -->
    <div class="flex justify-between fade-in-down" v-show="isVisible" :style="{ animationDelay: '1s' }">
      <span class="text-black-700 text-xl font-rounded p-2">Naomie</span>
      <div class="flex space-x-5">
        <!-- Lien avec gestion du clic pour ouvrir le modal -->
        <a @click="openModal" class="cursor-pointer text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">À propos</a>
        <router-link to="/contact" class="text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">Contact</router-link>
        <router-link to="/projets" class="text-black-700 text-xl font-rounded hover:bg-black hover:text-white rounded-full p-2 transition">Projets</router-link>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="flex mt-32 w-full fade-in-down" v-show="isVisible" :style="{ animationDelay: '1s' }">
      <div class="flex flex-col items-start">
        <span class="text-black-700 text-8xl font-bold">I'm Naomie <br> KOTIN.</span>
        <p class="mt-10 text-black-700 text-2xl font-rounded">
          I design products with purpose and meticulous <br> attention to detail. Available for work.
        </p>
      </div>

      <!-- Section des projets sélectionnés -->
      <div class="flex flex-col items-start ml-80 fade-in-down" v-show="isVisible" :style="{ animationDelay: '1.5s' }">
        <span class="text-black-700 text-lg font-rounded opacity-50 hover:opacity-75">SELECTED PROJECTS</span>
        <div class="mt-5 flex flex-col">
          <!-- Projet 1 -->
          <div class="relative mb-6 fade-in-down" v-show="isVisible" :style="{ animationDelay: '2s' }" @click="animateLine(0)">
            <span class="text-black-700 text-lg font-rounded hover:opacity-80">StartGlobal</span>
            <div :class="{'line': true, 'animate': activeIndex === 0}"></div>
          </div>
          <!-- Projet 2 -->
          <div class="relative mb-6 fade-in-down" v-show="isVisible" :style="{ animationDelay: '2.2s' }" @click="animateLine(1)">
            <span class="text-black-700 text-lg font-rounded hover:opacity-80">Project2</span>
            <div :class="{'line': true, 'animate': activeIndex === 1}"></div>
          </div>
          <!-- Projet 3 -->
          <div class="relative mb-6 fade-in-down" v-show="isVisible" :style="{ animationDelay: '2.4s' }" @click="animateLine(2)">
            <span class="text-black-700 text-lg font-rounded hover:opacity-80">Project3</span>
            <div :class="{'line': true, 'animate': activeIndex === 2}"></div>
          </div>
          <!-- Projet 4 -->
          <div class="relative mb-6 fade-in-down" v-show="isVisible" :style="{ animationDelay: '2.6s' }" @click="animateLine(3)">
            <span class="text-black-700 text-lg font-rounded hover:opacity-80">Project4</span>
            <div :class="{'line': true, 'animate': activeIndex === 3}"></div>
          </div>
          <!-- Projet 5 -->
          <div class="relative mb-6 fade-in-down" v-show="isVisible" :style="{ animationDelay: '2.8s' }" @click="animateLine(4)">
            <span class="text-black-700 text-lg font-rounded hover:opacity-80">Project5</span>
            <div :class="{'line': true, 'animate': activeIndex === 4}"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal À propos -->
    <transition name="slide-right">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex bg-black bg-opacity-50">
        <Apropos @close="closeModal" class="bg-white w-2/3 lg:w-1/3 h-full p-8 ml-auto" />
      </div>
    </transition>
  </div>
</template>

<script>
import Apropos from './Apropos.vue';

export default {
  name: 'Acceuil',
  components: {
    Apropos,
  },
  data() {
    return {
      isVisible: false,
      activeIndex: null,
      isModalOpen: false,
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
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Animation de défilement du haut vers le bas */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Appliquer l'animation aux éléments */
.fade-in-down {
  animation: fadeInDown 1.5s ease forwards;
}

.line {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 450%;
  border-top: 2px solid gray;
  transition: none; /* Désactiver la transition par défaut */
}

.animate {
  border-color: transparent;
  animation: fadeOutAndSlideIn 1.5s ease forwards;
}

@keyframes fadeOutAndSlideIn {
  0% {
    border-color: transparent;
    width: 450%;
  }
  50% {
    width: 0;
    border-color: transparent;
  }
  100% {
    width: 450%;
    border-color: gray;
  }
}

/* Animation pour faire glisser le modal depuis la droite */
.slide-right-enter-active {
  transition: transform 1s ease;
}
.slide-right-leave-active {
  transition: transform 1s ease;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100%); /* Déplacer de la droite */
}
</style>
