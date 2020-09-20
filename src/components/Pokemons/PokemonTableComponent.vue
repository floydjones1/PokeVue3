<template>
  <h1>List of Pokemon</h1>
  <div class="container mt-5">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pokemon</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pokemon, index) in pokemonList" :key="index">
          <th>{{ index }}</th>
          <td>{{ pokemon.name }}</td>
          <td><router-link :to="`/${index+1}`" ><button class="btn btn-primary">View More</button></router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import usePokemon from '../../store/pokemon.js'

export default {
  name: 'PokemonTable',
  setup () {
    const { pokemonList, getAllPokemon } = usePokemon()
    getAllPokemon()

    return {
      pokemonList
    }
  }
}
</script>

<style>

</style>