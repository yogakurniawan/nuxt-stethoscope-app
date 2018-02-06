<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
export default {
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  }
  // head () {
    // Set Meta Tags for this Page
  // }
}
</script>

<style>
.red {
  color: red;
}
</style>