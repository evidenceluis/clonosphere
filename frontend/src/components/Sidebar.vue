<template>
  <nav
    class="bg-gray-800 flex flex-col items-center py-8 transition-all duration-300 ease-in-out"
    :class="{ 'w-16': !isExpanded, 'w-64': isExpanded }"
  >
    <button
      @click="toggleSidebar"
      class="mb-8 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
    >
      <Bars3Icon v-if="!isExpanded" class="w-6 h-6 text-gray-300" />
      <XMarkIcon v-else class="w-6 h-6 text-gray-300" />
    </button>
    <div v-for="(item, index) in navItems" :key="index"
      class="w-full flex items-center justify-start px-4 py-3 mb-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
      @click="navigateTo(item.route)"
    >
      <component :is="item.icon" class="w-6 h-6 text-gray-300" />
      <span v-if="isExpanded" class="ml-4 text-gray-300 whitespace-nowrap">{{ item.name }}</span>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  HomeIcon, UserIcon, ChatBubbleLeftRightIcon, ClockIcon,
  ChartBarIcon, CreditCardIcon, Cog6ToothIcon, QuestionMarkCircleIcon,
  Bars3Icon, XMarkIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()
const isExpanded = ref(false)

const navItems = [
  { icon: HomeIcon, name: 'Dashboard', route: 'Dashboard' },
  { icon: UserIcon, name: 'Perfil', route: 'Profile' },
  { icon: ChatBubbleLeftRightIcon, name: 'Chat', route: 'Chat' },
  { icon: ClockIcon, name: 'Historial', route: 'History' },
  { icon: ChartBarIcon, name: 'Gamificación', route: 'Gamification' },
  { icon: UserIcon, name: 'Entrenamiento', route: 'Training' },
  { icon: CreditCardIcon, name: 'Suscripción', route: 'Subscription' },
  { icon: Cog6ToothIcon, name: 'Configuración', route: 'Settings' },
  { icon: QuestionMarkCircleIcon, name: 'Ayuda', route: 'Help' }
]

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}

const navigateTo = (routeName) => {
  router.push({ name: routeName })
}
</script>