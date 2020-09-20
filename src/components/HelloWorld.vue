<template>
  <div class="hello">
    Counter: {{ counter }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: Number
  },
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
