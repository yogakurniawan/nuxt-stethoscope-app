<template>
  <div>
    <h1>Sub Component {{ propB }}</h1>
    <button @click="foo">Sub Component Button</button>
  </div>
</template>

<script>
  export default {
    props: {
      propB: {
        type: String,
        default: ''
      }
    },
    methods: {
      foo() {
        console.log('heyho')
      }
    },
  }
</script>

<style scoped>

</style>