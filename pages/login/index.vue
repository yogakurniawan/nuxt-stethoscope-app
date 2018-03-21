<template>
  <div>
    <logo-bar></logo-bar>
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-5">
        <div class="login-container">
          <div>
            <h1>Sign In</h1>
          </div>
          <div class="login-box">
            <form>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 login-field">
                  <app-input type="text" name="username" placeholder="Username" />
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 login-field">
                  <app-input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7">
                  <app-button class="login-button button push-right">Login</app-button>
                </div>
              </div>
            </form>
          </div>
          <div class="signup-box">
            <div class="row center-xs">
              <div class="col-xs-9 col-sm-6 col-md-4 col-lg-5 signup-text">Don't have an Account?</div>
              <div class="col-xs-3 col-sm-3 col-md-2 col-lg-2">
                <app-button class="button push-right">Sign Up</app-button>
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
import LogoBar from '~/components/Login/LogoBar'
import AppButton from '~/components/Button'
import AppFooter from '~/components/Footer'
import AppInput from '~/components/Forms/Input'

export default {
  layout: "login",
  components: {
    LogoBar,
    AppButton,
    AppInput,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  margin: 2rem 1rem;
  border: 2px solid $secondary;
  border-radius: $border-radius;
}

.login-field,
.login-button {
  margin: 0.5rem auto;
}

.button {
  width: 6rem;
}

.box {
  width: 50%;
  margin: 0 auto;
}

.login-box {
  padding: 0 1rem;
  height: 10rem;
}

.signup-box {
  height: 8rem;
  position: relative;
  background-color: $secondary;
  padding: 1rem;
  margin-top: 0.5rem;
}

.signup-text {
  line-height: 2.5;
  text-align: left;
}
</style>