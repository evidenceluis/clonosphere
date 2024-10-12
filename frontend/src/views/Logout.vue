<template>
  <div class="min-h-screen bg-gray-900 p-6 flex flex-col items-center justify-center">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Cerrando sesión...
      </h2>
      <p class="text-xl text-gray-400 mb-8">Serás redirigido en un momento.</p>
    </div>
    <div class="relative">
      <div class="absolute inset-0 bg-cyan-400 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
      <router-link
        to="/login"
        class="relative bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out inline-block"
      >
        Ir al Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const logoutUser = () => {
  // Simular el cierre de sesión
  setTimeout(() => {
    // Aquí puedes eliminar el token, limpiar la sesión, etc.
    localStorage.removeItem('userToken'); // Ejemplo de eliminación de token

    // Redirigir al login
    router.push({ name: 'Login' });
  }, 2000); // Simula un retraso de 2 segundos
}

onMounted(() => {
  logoutUser();
})
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