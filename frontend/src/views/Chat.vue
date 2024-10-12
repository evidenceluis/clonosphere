<template>
  <div class="flex flex-col items-center justify-between min-h-screen bg-gray-900 p-6">
    <div class="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-xl overflow-auto mb-6 chat-box border border-gray-700">
      <div v-for="(message, index) in messages" :key="index" class="mb-6">
        <div v-if="message.sender === 'user'" class="flex justify-end">
          <div class="bg-cyan-500 text-gray-900 py-3 px-5 rounded-lg max-w-xs text-right shadow-lg transform hover:scale-105 transition duration-300">
            {{ message.text }}
          </div>
        </div>
        <div v-else class="flex justify-start">
          <div class="bg-gray-700 text-gray-100 py-3 px-5 rounded-lg max-w-xs shadow-lg transform hover:scale-105 transition duration-300">
            {{ message.text }}
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="w-full max-w-2xl flex items-center space-x-4">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Escribe un mensaje..."
        class="w-full px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-700 text-gray-100 placeholder-gray-400"
        required
      />
      <button
        type="submit"
        class="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center"
      >
        <span>Enviar</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
  { sender: 'clone', text: '¡Hola! ¿En qué puedo ayudarte hoy?' }
])

const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    // Añadir el mensaje del usuario al array de mensajes
    messages.value.push({ sender: 'user', text: newMessage.value })

    // Simular una respuesta del clon
    setTimeout(() => {
      messages.value.push({
        sender: 'clone',
        text: 'Esta es una respuesta automática del clon. ¡Estoy aquí para ayudarte!'
      })
    }, 1000)

    // Limpiar el campo de entrada
    newMessage.value = ''
  }
}
</script>

<style scoped>
.chat-box {
  height: 60vh;
  overflow-y: auto;
}

.chat-box::-webkit-scrollbar {
  width: 8px;
}

.chat-box::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 4px;
}

.chat-box::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 4px;
}

.chat-box::-webkit-scrollbar-thumb:hover {
  background-color: #6B7280;
}
</style>