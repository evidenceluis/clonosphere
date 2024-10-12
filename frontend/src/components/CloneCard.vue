<template>
    <div class="relative w-64 h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      <img :src="imageUrl" :alt="title" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h2 class="text-2xl font-bold text-cyan-400 mb-1">{{ title }}</h2>
        <p class="text-sm text-gray-300 mb-2">Directed by {{ director }}</p>
        <div class="flex items-center mb-2">
          <span class="ml-1 text-gray-300">{{ rating }}/5</span>
        </div>
        <div v-if="genres && genres.length > 0" class="flex flex-wrap gap-2">
          <span
            v-for="(genre, index) in genres"
            :key="index"
            class="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
          >
            {{ genre }}
          </span>
        </div>
      </div>
    </div>
  </template>

  <script setup>

  defineProps({
    title: {
      type: String,
      default: 'Avatar: The Way of Water'
    },
    director: {
      type: String,
      default: 'James Cameron'
    },
    rating: {
      type: Number,
      default: 4.5
    },
    genres: {
      type: Array,
      default: () => ['Fantasy', 'Mystery']
    },
    imageUrl: {
      type: String,
      default: '/placeholder.svg?height=400&width=300'
    }
  })
  </script>