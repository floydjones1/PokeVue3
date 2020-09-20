import { reactive, readonly, toRefs } from 'vue'

const state = reactive({
    username: '',
    isAuthenticated: false
})

export default function useAuth() {
  const login = (username, password) => {
    if(password !== 'Secret123') {
      return false
    }
    state.username = username;
    state.isAuthenticated = true;
    return true
  }

  const logout = () => {
    state.username = ''
    state.isAuthenticated = false
    console.log('is hit ', state)
  }

  return { ...toRefs(readonly(state)), login, logout }
}