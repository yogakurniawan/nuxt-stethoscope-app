<template>
  <div>
    <h1>Patients Page</h1>
    <div class="menu">
      <nuxt-link to="/patients/demographic">Demographic</nuxt-link>
      <nuxt-link to="/patients/account">Account</nuxt-link>
      <nuxt-link to="/patients/dashboard">Dashboard</nuxt-link>
      <nuxt-link to="/patients/clinical">Clinical</nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  .menu > a {
    margin-right: 10px;
  }
</style>