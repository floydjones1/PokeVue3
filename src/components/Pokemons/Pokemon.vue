<template>
  <div class="container mt-5">
    <div v-if="pokemonMap[id]" class="card text-center">
      <div class="card-header">
        {{ pokemonMap[id].name }}
      </div>
      <div class="card-body">
        <img width=300 height=300 :src="`https://pokeres.bastionbot.org/images/pokemon/${this.$route.params.id}.png`" />
        <br />
        <PokemonTypePill v-for="type in (pokemonMap[id].types)" :key="type.slot" :type="type.type.name" />
        <h2 class="pt-5">Moves</h2>
        <p class="card-text" v-for="(move, index) in (pokemonMap[id].moves.slice(0, 5))" :key="index">{{ move.move.name }}</p>
        
      </div>
      <div class="card-footer text-muted">
        <router-link to="/" class="btn btn-primary">Go Back</router-link>
      </div>
    </div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<script>
import usePokemon from '../../store/pokemon.js'
import PokemonTypePill from './PokemonTypePill.vue'
import { useRoute } from 'vue-router'

export default { 
  name: 'Pokemon',
  components: {
    PokemonTypePill
  },
  setup () {
    const { pokemonMap, getPokemon } = usePokemon()
    const { params: { id } } = useRoute()
    getPokemon(id)
    
    return { pokemonMap, id }
  }
}
</script>

<style>

</style>