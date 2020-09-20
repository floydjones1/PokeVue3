<template>
  <div class="container" style="height: 100vh">
    <div class="row justify-content-center align-items-center" style="height: 100%">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h1 class="h3 mb-3 font-weight-normal">Login</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input v-model="email" id="inputEmail" class="form-control my-3" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="password" id="inputPassword" class="form-control my-3" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" @click="triggerLogin()">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '../router'
import useAuth from '../store/auth'

export default {
  name: 'Login',
  setup () {
    const { login } = useAuth()
    const email = ref('')
    const password = ref('')

    const triggerLogin = () => {
      login(email.value, password.value) && router.push('/')
    }

    return {
      email,
      password,
      triggerLogin
    }
  }
}
</script>