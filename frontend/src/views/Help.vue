<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Ayuda y Preguntas Frecuentes
    </h2>
    <div class="w-full max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
        <h3
          @click="toggleFaq(index)"
          class="text-xl font-semibold text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300 flex items-center justify-between"
        >
          {{ faq.question }}
          <svg
            class="w-6 h-6 transform transition-transform duration-300"
            :class="{ 'rotate-180': faq.open }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </h3>
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <p v-if="faq.open" class="mt-2 text-gray-300">
            {{ faq.answer }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: '¿Cómo puedo crear un clon IA?',
    answer: 'Para crear un clon IA, dirígete a la sección "Crear Clon" en tu perfil y sigue los pasos proporcionados.',
    open: false
  },
  {
    question: '¿Cómo puedo personalizar mi experiencia de chat?',
    answer: 'En la sección de "Configuraciones", puedes ajustar tus preferencias de chat y activar o desactivar las notificaciones.',
    open: false
  },
  {
    question: '¿Puedo borrar un clon IA?',
    answer: 'Sí, puedes eliminar un clon IA desde la sección "Perfil", seleccionando el clon y haciendo clic en "Eliminar".',
    open: false
  },
  {
    question: '¿Cuántos clones puedo crear?',
    answer: 'El número de clones que puedes crear depende de tu plan de suscripción. Los usuarios gratuitos pueden crear un clon, mientras que los suscriptores premium pueden crear hasta cinco clones.',
    open: false
  },
  {
    question: '¿Cómo funciona el entrenamiento del clon?',
    answer: 'El entrenamiento del clon se realiza a través de conversaciones y proporcionando información específica. Cuanto más interactúes con tu clon, más aprenderá y se adaptará a tu estilo de comunicación.',
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
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