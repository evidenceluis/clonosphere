<template>
  <div class="min-h-screen bg-gray-900 p-6 flex flex-col items-center justify-center">
    <div class="text-center">
      <h1 class="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
        404
      </h1>
      <p class="text-2xl text-gray-400 mb-8">La página que buscas no existe.</p>
      <div class="relative group">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <router-link
          to="/dashboard"
          class="relative px-7 py-4 bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600"
        >
          <span class="flex items-center space-x-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-400 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="pr-6 text-gray-100">Volver al Dashboard</span>
          </span>
          <span class="pl-6 text-cyan-400 group-hover:text-gray-100 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </router-link>
      </div>
    </div>
    <div class="mt-16">
      <p class="text-gray-500 text-sm">¿Necesitas ayuda? <a href="/help" class="text-cyan-400 hover:text-cyan-300 transition duration-200">Visita nuestra página de ayuda</a></p>
    </div>
  </div>
</template>

<script setup>
// No se necesita lógica adicional para esta página
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