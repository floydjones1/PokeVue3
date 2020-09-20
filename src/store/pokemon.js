import { reactive, readonly, toRefs } from 'vue'
import axios from 'axios'

const state = reactive({
    pokemonMap: {},
    pokemonList: []
})

export default function usePokemon() {

  const getPokemon = async (id) => {
    
    if (!state.pokemonMap[id]) {
      console.log('new api call')
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      state.pokemonMap[id] = resp.data
    }
    state.pokemon = state.pokemonMap[id]
  }

  const getAllPokemon = async () => {
    if (!state.pokemonList.length) {
      console.log('new api call')
      const resp = await axios.get('https://pokeapi.co/api/v2/pokemon')
      state.pokemonList = resp.data.results
    }
  }

  return { ...toRefs(readonly(state)), getPokemon, getAllPokemon }
}