<template>
  <div class="logo-bar">
    <div class="logo">
      <img src="~/assets/stethoscope.png" alt="logo" />
    </div>    
  </div>
</template>

<script>
export default {
  name: 'LogoBar',
  layout: 'login'
}
</script>

<style lang="scss" scoped>
.logo-bar {
  padding: 1.2rem;
  border-bottom: 1px solid #e4e4e4;
}

.logo {
  text-align: center;
  &> img {
    width: 20rem;
  }
}
</style>