<template>
  <span :class="classObject">{{ type }}</span>
</template>

<script>
export default {
  name: 'PokemonTypePill',
  props: ['type'],
  data() {
    return {
      classObject: {
        badge: true,
        'badge-pill': true,
        'badge-primary': this.type === 'water',
        'badge-success': this.type === 'grass',
        'badge-danger': this.type === 'fire',
        'badge-warning': this.type === 'poison',
        'badge-dark': this.type === 'dark',
        'badge-light': this.type === 'normal'
      }
    }
  }

}
</script>

<style>

</style>