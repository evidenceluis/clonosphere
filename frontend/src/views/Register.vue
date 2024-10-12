<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-6">
    <div class="w-28 h-28 mb-10 relative">
      <img src="@/assets/logo.svg" alt="Clonosphere Logo" class="w-full h-full">
      <div class="absolute inset-0 bg-cyan-400 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
    </div>
    <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Registrarse
    </h2>
    <form @submit.prevent="handleRegister" class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700">
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
          class="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
      </div>
      <div class="mb-8">
        <label class="block text-gray-300 text-sm md:text-base font-semibold mb-2" for="password">Contraseña</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Registrarse
        </button>
      </div>
    </form>
    <p class="mt-8 text-gray-400 text-center">
      ¿Ya tienes una cuenta?
      <router-link to="/login" class="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out">
        Inicia sesión aquí
      </router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  // Aquí iría la lógica para registrar al usuario
  console.log('Registro con:', { name: name.value, email: email.value, password: password.value })
  // Después de un registro exitoso, podrías redirigir al usuario
  // router.push('/dashboard')
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