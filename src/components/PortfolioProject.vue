<template>
  <div class="font-white">
    <!-- Titre principal -->
    <h1 class="text-4xl font-bold font-rounded text-cyan-100 mt-5">TailwidCSS Design</h1>

    <!-- Présentation du projet -->
    <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Présentation du projet</h2>
    <p class="text-justify hover:text-center hover:text-cyan-400 mt-2 hover:cursor-pointer">
      Il s'agit ici de quelques designs faits avec TailwidCSS
    </p>


    <!-- Aperçu du projet -->
    <h2 class="mt-4 text-2xl font-rounded text-cyan-100">Aperçu des designs</h2>
    
  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 space-x-4">
      <img 
        src="../assets/images/tailwind/tailwind1.jpeg" 
        alt="Aperçu du portfolio 1" 
        class="rounded-lg h-[300px] w-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
      <img 
        src="../assets/images/tailwind/tailwind2.jpeg" 
        alt="Aperçu du portfolio 2" 
        class="rounded-lg h-[300px] w-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
      
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioProject",
};
</script>

<style scoped>
/* Ajoutez des styles spécifiques ici si nécessaire */
</style>
