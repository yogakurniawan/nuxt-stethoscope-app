<template>
  <section class="container-main">
    <div>
      <app-button @click="modifyLion">Modify Lion</app-button>
      <app-button @click="modifyTiger">Modify Tiger</app-button>
      {{ zoo() }}
      {{ lion }}
    </div>
  </section>
</template>

<script>
import AppButton from '~/components/Button'

export default {
  data() {
    return {
      tiger: 'tiger',
      lion: 'lion'
    }
  },
  components: {
    AppButton
  },
  computed: {
    cTiger() {
      console.log('cTiger called')
      return 'hello ' + this.tiger
    }
  },
  methods: {
    modifyTiger() {
      console.log('you')
      this.tiger = 'I am tiger'
    },
    zoo() {
      console.log('badass')
    },
    modifyLion() {
      this.lion = this.lion + 'I am Lion'
      console.log('update message will trigger all method to call in template')
    }
  }
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
