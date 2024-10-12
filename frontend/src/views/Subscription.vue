<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
      Gestión de Suscripciones
    </h2>

    <div class="w-full max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
      <!-- Plan actual -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-cyan-400 mb-4">Plan Actual</h3>
        <div class="bg-gray-700 p-6 rounded-lg text-white border border-cyan-500">
          <h4 class="text-xl font-bold text-cyan-300">{{ currentPlan.name }}</h4>
          <p class="text-gray-300 mt-2">{{ currentPlan.description }}</p>
          <p class="mt-4 font-semibold text-cyan-400">Precio: {{ currentPlan.price }}</p>
        </div>
      </div>

      <!-- Cambiar de plan -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-cyan-400 mb-6">Cambiar de Plan</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(plan, index) in availablePlans"
            :key="index"
            class="bg-gray-700 p-6 rounded-lg text-white cursor-pointer hover:bg-gray-600 hover:scale-105 transform transition duration-300 border border-gray-600 hover:border-cyan-400"
            @click="changePlan(plan)"
          >
            <h4 class="text-xl font-bold text-cyan-300">{{ plan.name }}</h4>
            <p class="text-gray-300 mt-2">{{ plan.description }}</p>
            <p class="mt-4 font-semibold text-cyan-400">Precio: {{ plan.price }}</p>
          </div>
        </div>
      </div>

      <!-- Historial de pagos -->
      <div>
        <h3 class="text-2xl font-semibold text-cyan-400 mb-6">Historial de Pagos</h3>
        <ul class="space-y-4">
          <li v-for="(payment, index) in paymentHistory" :key="index" class="bg-gray-700 p-4 rounded-lg text-white hover:bg-gray-600 transition duration-300">
            <p class="font-bold text-cyan-300">Fecha: {{ payment.date }}</p>
            <p class="text-gray-300">Monto: {{ payment.amount }}</p>
            <p class="text-gray-400">Método: {{ payment.method }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPlan = ref({
  name: 'Plan Premium',
  description: 'Accede a todas las funcionalidades sin limitaciones.',
  price: '$9.99/mes',
})

const availablePlans = ref([
  {
    name: 'Plan Básico',
    description: 'Funcionalidades limitadas.',
    price: '$0/mes',
  },
  {
    name: 'Plan Pro',
    description: 'Acceso a funcionalidades avanzadas.',
    price: '$4.99/mes',
  },
  {
    name: 'Plan Premium',
    description: 'Acceso total sin limitaciones.',
    price: '$9.99/mes',
  },
])

const paymentHistory = ref([
  {
    date: '10/10/2024',
    amount: '$9.99',
    method: 'Tarjeta de Crédito',
  },
  {
    date: '10/09/2024',
    amount: '$9.99',
    method: 'Tarjeta de Crédito',
  },
  {
    date: '10/08/2024',
    amount: '$9.99',
    method: 'PayPal',
  },
])

const changePlan = (plan) => {
  // Lógica para cambiar el plan
  alert(`Has cambiado al ${plan.name}`)
  // Aquí podrías implementar la lógica real para cambiar el plan
  // Por ejemplo, hacer una llamada a una API y actualizar el estado
  currentPlan.value = { ...plan }
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