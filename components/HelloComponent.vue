<template>
  <div>
    <h1>Sub Component {{ $attrs.propB }}</h1>
    <button @click="foo">Sub Component Button</button>
  </div>
</template>

<script>
  export default {
    methods: {
      foo() {
        console.log('heyho')
      }
    },
  }
</script>

<style scoped>

</style>