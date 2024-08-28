<template>
  <div>
    <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition absolute top-4 right-4">
      Fermer
    </button>
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Compétences</h2>
      <div v-for="(skill, index) in skills" :key="index" class="mb-4">
        <div class="flex justify-between items-center mb-1 mt-5">
          <span class="text-lg font-medium">{{ skill.name }}</span>
          <!-- <span class="text-sm">{{ skill.level }}%</span> -->
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div :style="{ width: skill.level + '%' }" class="bg-blue-600 h-full rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { name: 'Laravel/PHP', level: 50 },
        { name: 'Vue.js', level: 40 },
        { name: 'Tailwind CSS', level: 50 },
        { name: 'React', level: 30 },
        { name: 'Dart/Flutter', level: 30 },
        { name: 'MySQL', level: 50 }

      ]
    };
  }
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
