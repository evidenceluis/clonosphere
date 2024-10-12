import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Training from '../views/Training.vue'
import Chat from '../views/Chat.vue'
import History from '../views/History.vue'
import Gamification from '../views/Gamification.vue'
import Subscription from '../views/Subscription.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'
import Logout from '../views/Logout.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // meta: { requiresAuth: true }
  },
  {
    path: '/training',
    name: 'Training',
    component: Training,
    // meta: { requiresAuth: true }
  },
  {
    path: '/chat/:cloneId?',
    name: 'Chat',
    component: Chat,
    // meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    // meta: { requiresAuth: true }
  },
  {
    path: '/gamification',
    name: 'Gamification',
    component: Gamification,
    // meta: { requiresAuth: true }
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription,
    // meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    // meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    // meta: { requiresAuth: true }
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    // meta: { requiresAuth: true }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    // meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navegación guard para rutas que requieren autenticación
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // Verificar si el usuario está autenticado
//     if (!isAuthenticated()) {
//       next({ name: 'Login' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

// Función para verificar si el usuario está autenticado
// function isAuthenticated() {
//   // Implementa tu lógica de autenticación aquí
//   // Por ejemplo, verificar si existe un token en localStorage
//   return localStorage.getItem('userToken') !== null
// }

export default router