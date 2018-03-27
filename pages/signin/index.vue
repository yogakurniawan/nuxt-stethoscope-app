<template>
  <auth-form type="signin">
  </auth-form>
</template>

<script>
import AuthForm from '~/components/Auth/Form'

export default {
  layout: 'auth',
  middleware: 'log',
  components: {
    AuthForm
  }
};
</script>

<style lang="scss" scoped>

</style>