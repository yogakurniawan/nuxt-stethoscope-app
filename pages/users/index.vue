<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="onLoadUsers">Submit</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUsers() {
      this.$router.push(`/users/${this.userId}`)
    }
  },
}
</script>