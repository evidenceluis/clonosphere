<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Perfil del Usuario
    </h2>
    <form @submit.prevent="handleUpdateProfile" class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700">
      <div class="mb-6">
        <label class="block text-gray-300 text-sm md:text-base font-semibold mb-2" for="name">Nombre</label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-300 text-sm md:text-base font-semibold mb-2" for="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full px-4 py-3 rounded-md bg-gray-600 text-gray-300 focus:outline-none cursor-not-allowed"
          disabled
        />
      </div>
      <div class="mb-8">
        <label class="block text-gray-300 text-sm md:text-base font-semibold mb-2" for="clone-info">Información del Clon</label>
        <textarea
          id="clone-info"
          v-model="cloneInfo"
          class="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          rows="4"
        ></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Actualizar Perfil
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Nombre del Usuario')
const email = ref('usuario@ejemplo.com')
const cloneInfo = ref('Descripción breve del clon del usuario')

const handleUpdateProfile = () => {
  // Aquí puedes agregar la lógica para actualizar el perfil del usuario
  console.log("Perfil actualizado:", {
    name: name.value,
    email: email.value,
    cloneInfo: cloneInfo.value
  });
  alert("Perfil actualizado con éxito.");
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