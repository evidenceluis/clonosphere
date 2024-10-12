<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Configuraciones
    </h2>
    <form class="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <!-- Tema -->
      <div class="mb-6">
        <label class="block text-cyan-400 text-sm font-semibold mb-2">Tema</label>
        <div class="flex items-center space-x-4">
          <label class="flex items-center cursor-pointer">
            <input type="radio" v-model="theme" value="light" class="form-radio text-cyan-500 focus:ring-cyan-400 focus:ring-offset-gray-800" />
            <span class="ml-2 text-gray-300">Claro</span>
          </label>
          <label class="flex items-center cursor-pointer">
            <input type="radio" v-model="theme" value="dark" class="form-radio text-cyan-500 focus:ring-cyan-400 focus:ring-offset-gray-800" />
            <span class="ml-2 text-gray-300">Oscuro</span>
          </label>
        </div>
      </div>

      <!-- Notificaciones -->
      <div class="mb-6">
        <label class="block text-cyan-400 text-sm font-semibold mb-2">Notificaciones</label>
        <div class="flex items-center space-x-4">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" v-model="notifications" class="form-checkbox text-cyan-500 rounded focus:ring-cyan-400 focus:ring-offset-gray-800" />
            <span class="ml-2 text-gray-300">Activar notificaciones</span>
          </label>
        </div>
      </div>

      <!-- Preferencias del chat -->
      <div class="mb-6">
        <label class="block text-cyan-400 text-sm font-semibold mb-2">Preferencias del Chat</label>
        <select
          v-model="chatPreference"
          class="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        >
          <option value="default">Estilo predeterminado</option>
          <option value="compact">Estilo compacto</option>
          <option value="expanded">Estilo expandido</option>
        </select>
      </div>

      <!-- Guardar cambios -->
      <div class="flex items-center justify-center">
        <button
          @click.prevent="saveSettings"
          class="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center"
        >
          <span>Guardar Cambios</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')
const notifications = ref(false)
const chatPreference = ref('default')

const saveSettings = () => {
  // Aquí puedes manejar el guardado de las configuraciones
  alert('Configuraciones guardadas con éxito')
  // En una aplicación real, aquí harías una llamada a una API o actualizarías el estado global
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

/* Estilos personalizados para los radio buttons y checkboxes */
.form-radio, .form-checkbox {
  color: #22D3EE;
  border-color: #4B5563;
}

.form-radio:checked, .form-checkbox:checked {
  background-color: #22D3EE;
  border-color: #22D3EE;
}

.form-radio:focus, .form-checkbox:focus {
  box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.5);
}
</style>