<template>
  <div class="container-fluid">
    <logo-bar></logo-bar>
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-6">
        <div class="auth-container">
          <div>
            <h1>{{ title }}</h1>
          </div>
          <div class="upper-box">
            <form @submit.prevent="onSubmit">
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 field">
                  <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
                  <span v-show="errors.has('email')" class="push-left invalid-feedback">{{ errors.first('email') }}</span>
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 field">
                  <app-input :invalid="errors.has('password')" v-validate="'required|strong_password'" v-model="password" type="password" name="password" placeholder="Password" />
                  <span v-show="errors.has('password')" class="push-left invalid-feedback">{{ errors.first('password') }}</span>
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7">
                  <app-button class="upper-button button push-right">
                    <span v-if="!loggingIn">{{ title }}</span>
                    <spinner size="1.4rem" :loading="loggingIn"></spinner>
                  </app-button>
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
import { Validator } from 'vee-validate';
import AppButton from '~/components/Button'
import AppFooter from '~/components/Footer'
import Spinner from '~/components/Spinner'
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
    Spinner,
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
  computed: {
    loggingIn() {
      return this.$store.getters.isLoggingIn
    }
  },
  created() {
    Validator.extend('strong_password', {
      getMessage: field => `The ${field} must be 6 characters long or more.`,
      validate: value => {
        console.log(value)
        return value && value.length >= 6
      }
    })
  },
  methods: {
    signin() {
      return this.$store.dispatch("SIGN_IN", {
        email: this.email,
        password: this.password
      })
    },
    signup() {
      return this.$store.dispatch("SIGN_UP", {
        email: this.email,
        password: this.password
      })
    },
    async onSubmit() {
      const result = await this.$validator.validateAll()
      if (result) {
        if (this.type === 'signin') {
          await this.signin()
        } else {
          await this.signup()
        }
        const error = this.$store.getters.isAuthError
        const authenticated = this.$store.getters.isAuthenticated
        if (!error && authenticated) {
          this.$router.push('/patients')
        }
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
  min-height: 10rem;
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