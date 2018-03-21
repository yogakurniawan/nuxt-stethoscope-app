<template>
  <div>
    <logo-bar></logo-bar>
    <div class="container-fluid">
      <div class="row center-xs">
        <div class="col-xs-5">
          <div class="login-container">
            <div><h1>LOGIN</h1></div>
            <div class="login-box">
              <form action="">
                <div class="login-field">
                  <app-input type="text" name="username" placeholder="username" />
                </div>
                <div class="login-field">
                  <app-input type="password" name="password" placeholder="password" />
                </div>
                <div class="login-button">
                  <app-button>Login</app-button>
                </div>
              </form>
            </div>
            <div class="signup-box">
              hello
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoBar from '~/components/Login/LogoBar'
import AppButton from '~/components/Button'
import AppInput from '~/components/Forms/Input'

export default {
  layout: "login",
  components: {
    LogoBar,
    AppButton,
    AppInput,
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  margin: 1rem;
  border: 2px solid $primary;
  border-radius: $border-radius;
}

.login-field {
  margin: 1rem auto;
}

.login-button {
  text-align: right;
}

.login-box {
  height: 10rem;
  width: 50%;
  margin: 0 auto;
}

.signup-box {
  position: relative;
  background-color: $primary;
  min-height: 10rem;
}
</style>