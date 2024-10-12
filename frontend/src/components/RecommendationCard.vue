<template>
  <div
    class="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-cyan-400 group"
    @click="handleClick"
  >
    <div class="flex items-center space-x-4">
      <div class="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
        <component :is="getIcon" class="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 class="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">{{ recommendation.name }}</h3>
        <p class="text-sm text-gray-400">{{ recommendation.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import { UserIcon, SparklesIcon, TrophyIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  recommendation: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const getIcon = computed(() => {
  if (!props.recommendation) return UserIcon
  switch (props.recommendation.type) {
    case 'clone':
      return UserIcon
    case 'feature':
      return SparklesIcon
    case 'challenge':
      return TrophyIcon
    default:
      return UserIcon
  }
})

const handleClick = () => {
  if (!props.recommendation) return
  switch (props.recommendation.type) {
    case 'clone':
      router.push({ name: 'Chat', params: { id: props.recommendation.id } })
      break
    case 'feature':
      router.push({ name: 'Training' })
      break
    case 'challenge':
      router.push({ name: 'Gamification' })
      break
  }
}
</script>