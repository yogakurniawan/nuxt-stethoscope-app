<template>
  <div>
    <h1>Product ID : {{ $route.params.pid }}</h1>
    <button @click="$router.push('/products')">Products</button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>