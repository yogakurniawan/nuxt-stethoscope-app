<template>
  <section class="container-main">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-app
      </h1>
      <app-button @click="sayHello">Hello</app-button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import AppLogo from '~/components/AppLogo.vue'
import ButtonTest from '~/components/ButtonTest.vue'
import AppButton from '~/components/Button'

export default {
  components: {
    AppLogo,
    AppButton,
    ButtonTest
  },
  methods: {
    sayHello() {
      console.log('hello from parent')
    }
  },
}
</script>

<style lang="scss" scoped>
/* ~/assets/variables.scss is injected automatically here */
.main {
  background: $main;
  padding: 10px;
}
</style>

<style>
.container-main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
