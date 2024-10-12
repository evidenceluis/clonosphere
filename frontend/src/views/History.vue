<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Historial de Chats
    </h2>
    <div class="w-full max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <div v-if="chatHistory.length" class="space-y-4">
        <div
          v-for="(chat, index) in chatHistory"
          :key="index"
          @click="viewChat(chat)"
          class="p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transform transition duration-300 shadow-md border border-gray-600 hover:border-cyan-400 group"
        >
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
              {{ chat.cloneName }}
            </h3>
            <span class="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {{ chat.lastMessageTime }}
            </span>
          </div>
          <p class="text-sm text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
            {{ chat.lastMessage }}
          </p>
        </div>
      </div>
      <div v-else class="text-center text-gray-400">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <p class="text-lg">No tienes chats anteriores</p>
        <p class="text-sm mt-2">Comienza una conversación con un clon para ver tu historial aquí.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const chatHistory = ref([
  {
    cloneName: 'Albert Einstein',
    lastMessage: '¡Gracias por la charla sobre relatividad!',
    lastMessageTime: 'Hace 2 días',
  },
  {
    cloneName: 'Marie Curie',
    lastMessage: 'Muy interesante la explicación sobre radiactividad.',
    lastMessageTime: 'Hace 1 semana',
  },
  {
    cloneName: 'Nikola Tesla',
    lastMessage: 'La energía inalámbrica revolucionará el mundo.',
    lastMessageTime: 'Hace 3 días',
  },
  {
    cloneName: 'Ada Lovelace',
    lastMessage: 'Los algoritmos son la base de la computación moderna.',
    lastMessageTime: 'Hace 5 días',
  },
])

const viewChat = (chat) => {
  // Redirigir al usuario al chat específico
  router.push({ name: 'Chat', params: { cloneName: chat.cloneName } })
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