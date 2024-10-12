<template>
    <div
      class="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-cyan-400 group"
      @click="navigateTo(route)"
    >
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">{{ title }}</h2>
        <component :is="icon" class="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
      </div>
      <p class="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{{ description }}</p>
      <div class="mt-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
  </template>

  <script setup>
  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'

  const props = defineProps({
    title: String,
    description: String,
    icon: Object,
    route: String,
    progress: Number
  })

  const router = useRouter()

  const navigateTo = (routeName) => {
    router.push({ name: routeName })
  }
  </script>