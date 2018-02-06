<template>
  <div>
    <h1>Users Page</h1>
    <span>Message: {{ msg }}</span>
    <nuxt-child />
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: "Hello World I am parent"
    }
  }
}
</script>
