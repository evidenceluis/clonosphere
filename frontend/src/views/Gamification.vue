<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Gamificación
    </h2>

    <div class="w-full max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <!-- Barra de progreso -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-cyan-400 mb-4">Progreso Actual</h3>
        <div class="relative pt-1">
          <div class="overflow-hidden h-6 mb-4 text-xs flex rounded bg-gray-700">
            <div
              :style="{ width: `${progress}%` }"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-in-out"
            >
              {{ progress }}%
            </div>
          </div>
        </div>
      </div>

      <!-- Insignias obtenidas -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-cyan-400 mb-6">Insignias Obtenidas</h3>
        <div class="grid grid-cols-3 gap-6">
          <div v-for="(badge, index) in badges" :key="index" class="text-center group">
            <div class="relative w-24 h-24 mx-auto mb-4 transform transition duration-300 ease-in-out group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              <img :src="badge.image" :alt="badge.name" class="relative w-full h-full object-cover rounded-full border-2 border-gray-600 group-hover:border-cyan-400 transition-colors duration-300"/>
            </div>
            <p class="text-sm font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">{{ badge.name }}</p>
          </div>
        </div>
      </div>

      <!-- Desafíos pendientes -->
      <div>
        <h3 class="text-2xl font-semibold text-cyan-400 mb-6">Desafíos Pendientes</h3>
        <ul class="space-y-4">
          <li v-for="(challenge, index) in challenges" :key="index" class="bg-gray-700 p-4 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 group">
            <h4 class="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{{ challenge.name }}</h4>
            <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{{ challenge.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const progress = ref(60)

const badges = ref([
  {
    name: 'Aprendiz',
    image: '/placeholder.svg?height=100&width=100&text=Aprendiz'
  },
  {
    name: 'Intermedio',
    image: '/placeholder.svg?height=100&width=100&text=Intermedio'
  },
  {
    name: 'Experto',
    image: '/placeholder.svg?height=100&width=100&text=Experto'
  },
])

const challenges = ref([
  {
    name: 'Completar 5 interacciones más',
    description: 'Gana 20 puntos por completar 5 interacciones con tu clon.'
  },
  {
    name: 'Desbloquear un nuevo módulo de entrenamiento',
    description: 'Gana 50 puntos por desbloquear un módulo nuevo.'
  },
])
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