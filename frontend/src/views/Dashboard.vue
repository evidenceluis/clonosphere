<template>
  <div class="flex h-screen bg-gray-900 text-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1 p-8 overflow-y-auto">
      <header class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-light">Clonosphere <span class="text-cyan-400 font-bold">Dashboard</span></h1>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar clones..."
              class="bg-gray-800 text-gray-100 px-4 py-2 pr-10 rounded-full focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center cursor-pointer">
            <UserIcon class="w-6 h-6 text-white" />
          </div>
        </div>
      </header>

      <!-- Últimos chats -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-cyan-400">Tus últimos chats</h2>
        <Carousel :items-to-show="3" :wrap-around="true">
          <Slide v-for="movie in recentChats" :key="movie.id">
            <CloneCard v-bind="movie" />
          </Slide>
        </Carousel>
      </section>

      <!-- Clones más usados -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-cyan-400">Tus clones más usados</h2>
        <Carousel :items-to-show="3" :wrap-around="true">
          <Slide v-for="movie in mostUsedClones" :key="movie.id">
            <CloneCard v-bind="movie" />
          </Slide>
        </Carousel>
      </section>

      <!-- Clones más recientes -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-cyan-400">Tus clones más recientes</h2>
        <Carousel :items-to-show="3" :wrap-around="true">
          <Slide v-for="movie in recentClones" :key="movie.id">
            <CloneCard v-bind="movie" />
          </Slide>
        </Carousel>
      </section>

      <!-- Recomendaciones -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-cyan-400">Recomendaciones para ti</h2>
        <Carousel :items-to-show="3" :wrap-around="true">
          <Slide v-for="movie in recommendations" :key="movie.id">
            <CloneCard v-bind="movie" />
          </Slide>
        </Carousel>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import CloneCard from '../components/CloneCard.vue'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const router = useRouter()
const searchQuery = ref('')

// Datos de ejemplo adaptados para CloneCard
const recentChats = ref([
  { id: 1, title: 'Einstein: A Life in Science', director: 'Walter Isaacson', rating: 4.8, genres: ['Biography', 'Science'], imageUrl: '/einstein-avatar.jpg' },
  { id: 2, title: 'Shakespeare in Love', director: 'John Madden', rating: 4.5, genres: ['Romance', 'Drama'], imageUrl: '/shakespeare-avatar.jpg' },
  { id: 3, title: 'Radioactive', director: 'Marjane Satrapi', rating: 4.2, genres: ['Biography', 'Drama'], imageUrl: '/curie-avatar.jpg' },
])

const mostUsedClones = ref([
  { id: 4, title: 'The Trial of Socrates', director: 'I.F. Stone', rating: 4.6, genres: ['Philosophy', 'History'], imageUrl: '/socrates-avatar.jpg' },
  { id: 5, title: 'Leonardo', director: 'Martin Kemp', rating: 4.7, genres: ['Art', 'Biography'], imageUrl: '/davinci-avatar.jpg' },
  { id: 6, title: 'Frida', director: 'Julie Taymor', rating: 4.4, genres: ['Biography', 'Drama'], imageUrl: '/kahlo-avatar.jpg' },
])

const recentClones = ref([
  { id: 7, title: 'Tesla: Inventor of the Electrical Age', director: 'W. Bernard Carlson', rating: 4.3, genres: ['Biography', 'Science'], imageUrl: '/tesla-avatar.jpg' },
  { id: 8, title: 'Adas Algorithm', director: 'James Essinger', rating: 4.1, genres: ['Biography', 'Technology'], imageUrl: '/lovelace-avatar.jpg' },
  { id: 9, title: 'A Brief History of Time', director: 'Errol Morris', rating: 4.9, genres: ['Documentary', 'Science'], imageUrl: '/hawking-avatar.jpg' },
])

const recommendations = ref([
  { id: 1, title: 'Newton: The Last Sorcerer', director: 'Michael White', rating: 4.5, genres: ['Biography', 'Science'], imageUrl: '/newton-avatar.jpg' },
  { id: 2, title: 'AI: Artificial Intelligence', director: 'Steven Spielberg', rating: 4.2, genres: ['Sci-Fi', 'Drama'], imageUrl: '/ai-movie.jpg' },
  { id: 3, title: 'The Imitation Game', director: 'Morten Tyldum', rating: 4.6, genres: ['Biography', 'Drama'], imageUrl: '/turing-movie.jpg' },
])

const navigateToChat = (cloneId) => {
  router.push({ name: 'Chat', params: { id: cloneId } })
}
</script>