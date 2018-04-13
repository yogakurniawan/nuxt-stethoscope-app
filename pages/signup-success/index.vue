<template>
  <div class="container-fluid">
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-6">
        <div class="auth-container">
          <div class="upper-box">
            <div class="success-info">
              <span class="logo"><img src="https://storage.googleapis.com/cerebral/checked.svg" /></span>
              <span class="title"><h2>SUCCESS!</h2></span>
            </div>
            <div class="redirect-notification">
              <p>In 5 seconds you will be redirected to log in to your new account.</p>
            </div>
            <app-Button :link="true" :to="direction">Signin Now</app-Button>
          </div>
          <div class="bottom-box">
            <p>By now you should have received an email with your login details.</p>
            <p>If you do not receive this email, please Contact Us.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "~/components/Button";

export default {
  layout: "auth",
  created() {
    setTimeout(() => {
      this.$router.push('/signin')
    }, 5000)
  },
  components: {
    AppButton
  },
  data() {
    return {
      direction: "signin"
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin-top: 1rem;
}

.redirect-notification {
  padding: 0.5rem;
  width: 80%;
  margin: 0 auto 1.5rem auto;
  border-radius: $border-radius;
  background-color: $secondary;
}

.success-info {
  img {
    width: 2rem;
  }
  span {
    display: inline-block;
    &.logo {
      margin-right: 0.4rem;
    }
    &.title {
      color: $primary;
      vertical-align: middle;
    }
  }
}

.auth-container {
  margin: 2rem 1rem;
  border: 2px solid $secondary;
  border-radius: $border-radius;
  box-shadow: 0 1px 6px rgb(179, 244, 208);
}

.bottom-box {
  height: 8rem;
  position: relative;
  background-color: $secondary;
  padding: 1rem;
  margin-top: 1.5rem;
}
</style>