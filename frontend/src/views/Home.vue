<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-6">
    <div class="w-32 h-32 mb-10 relative">
      <img src="@/assets/logo.svg" alt="Clonosphere Logo" class="w-full h-full">
      <div class="absolute inset-0 bg-cyan-400 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
    </div>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Bienvenido a Clonosphere
    </h1>
    <p class="text-base md:text-lg lg:text-xl mb-10 text-center max-w-xl text-gray-300">
      Crea tu clon digital y comienza a interactuar de una manera única y personalizada.
    </p>
    <div class="flex flex-col md:flex-row md:justify-center md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-xs md:max-w-md">
      <router-link to="/login" class="w-full md:w-auto">
        <button class="w-full md:w-auto bg-cyan-500 text-gray-900 hover:bg-cyan-400 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          Iniciar Sesión
        </button>
      </router-link>
      <router-link to="/register" class="w-full md:w-auto">
        <button class="w-full md:w-auto bg-gray-800 text-gray-100 hover:bg-gray-700 font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border border-cyan-500">
          Registrarse
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No se necesita lógica adicional en este componente
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