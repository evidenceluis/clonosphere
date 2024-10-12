<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Entrenamiento del Clon
    </h2>
    <div class="w-full max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <!-- Sección de categorías de entrenamiento -->
      <div v-if="categories.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="p-6 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transform transition duration-300 shadow-md border border-gray-600 hover:border-cyan-400 group"
          @click="startModule(category)"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              {{ category.name }}
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {{ category.description }}
          </p>
        </div>
      </div>
      <div v-else class="text-center text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        <p class="text-lg">No hay categorías de entrenamiento disponibles</p>
        <p class="text-sm mt-2">Vuelve más tarde para ver nuevas categorías de entrenamiento.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ref([
  {
    name: 'Entrenamiento Personal',
    description: 'Mejora la interacción del clon en áreas personales como hobbies, familia y entretenimiento.',
  },
  {
    name: 'Entrenamiento Profesional',
    description: 'Entrena a tu clon en temas relacionados con trabajo, proyectos y relaciones laborales.',
  },
  {
    name: 'Entrenamiento Académico',
    description: 'Desarrolla habilidades del clon en áreas académicas como matemáticas, ciencia y literatura.',
  },
  {
    name: 'Entrenamiento Social',
    description: 'Mejora las habilidades de comunicación y empatía del clon para interacciones sociales más naturales.',
  },
])

const startModule = (category) => {
  // Lógica para iniciar el módulo de entrenamiento
  router.push({ name: 'ModuleDetail', params: { category: category.name } })
}
</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>