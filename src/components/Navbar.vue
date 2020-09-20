<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <img class="mr-2" width=40 height=40 src="https://icons-for-free.com/iconfiles/png/512/pokemon-131979013310232399.png">
      Pokemon
    </router-link>

    <div class="ml-auto">
      <router-link to="/login"  v-if="!isAuthenticated" class="btn btn-outline-primary my-2 my-sm-0">Login</router-link>
      <button v-else class="btn btn-outline-primary my-2 my-sm-0" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import useAuth from '../store/auth'

export default {
  name: 'Navbar',
  setup() {
    const { isAuthenticated, logout } = useAuth()

    return {
      isAuthenticated,
      logout
    }
  }
}
</script>

<style>

</style>