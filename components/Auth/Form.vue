<template>
  <div>
    <logo-bar></logo-bar>
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-5">
        <div class="auth-container">
          <div>
            <h1>{{ title }}</h1>
          </div>
          <div class="upper-box">
            <form @submit.prevent="onSubmit">
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 field">
                  <app-input v-model="email" type="text" name="email" placeholder="Email" />
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 field">
                  <app-input v-model="password" type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7">
                  <app-button class="upper-button button push-right">{{ title }}</app-button>
                </div>
              </div>
            </form>
          </div>
          <div class="bottom-box">
            <div class="row center-xs">
              <div class="col-xs-9 col-sm-6 col-md-4 col-lg-5 bottom-text">{{ bottomText }}</div>
              <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                <app-button :link="true" :to="direction" class="button push-right">
                  {{ navButtonText }}
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppButton from '~/components/Button'
import AppFooter from '~/components/Footer'
import AppInput from '~/components/Forms/Input'
import LogoBar from './LogoBar'

export default {
  props: {
    name: 'AuthForm',
    type: {
      type: String,
      default: 'signin'
    },
  },
  components: {
    LogoBar,
    AppButton,
    AppInput,
    AppFooter
  },
  data() {
    return {
      email: '',
      password: '',
      title: this.type === 'signin' ? 'Sign In' : 'Sign Up',
      navButtonText: this.type === 'signin' ? 'Sign Up' : 'Sign In',
      direction: this.type === 'signin' ? 'signup' : 'signin',
      bottomText: this.type === 'signin' ? 'Already have an Account?' : 'Don\'t have an Account?'
    }
  },
  methods: {
    async signin() {
      await this.$store.dispatch("SIGN_IN", {
        email: this.email,
        password: this.password
      })
      this.$router.push('/patients')
    },
    async signup() {
      await this.$store.dispatch("SIGN_UP", {
        email: this.email,
        password: this.password
      })
      this.$router.push('/patients')
    },
    onSubmit() {
      if (this.type === 'signin') {
        this.signin()
      } else {
        this.signup()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-container {
  margin: 2rem 1rem;
  border: 2px solid $secondary;
  border-radius: $border-radius;
}

.field,
.upper-button {
  margin: 0.5rem auto;
}

.button {
  width: 6rem;
}

.box {
  width: 50%;
  margin: 0 auto;
}

.upper-box {
  padding: 0 1rem;
  height: 10rem;
}

.bottom-box {
  height: 8rem;
  position: relative;
  background-color: $secondary;
  padding: 1rem;
  margin-top: 0.5rem;
}

.bottom-text {
  line-height: 2.5;
  text-align: left;
}
</style>