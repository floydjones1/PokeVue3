import { createRouter, createWebHistory } from 'vue-router'
import useAuth from './store/auth'

import PokemonTable from './components/Pokemons/PokemonTableComponent.vue'
import Pokemon from './components/Pokemons/Pokemon.vue'
import Login from './components/LoginComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PokemonTable,
      name: 'Home'
    },
    {
      path: '/:id',
      component: Pokemon,
      name: 'Pokemon'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()
  if(to.name === 'Login' && isAuthenticated.value) next({name: 'Home'})
  else next()
})

export default router;