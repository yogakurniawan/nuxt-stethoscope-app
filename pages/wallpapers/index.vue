<template>
  <div>
    <ul>
      <li v-for="wallpaper in wallpapers" :key="wallpaper.id">{{ wallpaper.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      wallpapers() {
        return this.$store.getters.wallpapers 
      }
    },
  }
</script>

<style scoped>

</style>