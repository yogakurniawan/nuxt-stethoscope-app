<template>
  <div class="container-fluid page">
    <div class="row center-xs">
      <div class="col-xs-6">
        <div class="success-logo"><img src="https://storage.googleapis.com/cerebral/checked.svg" /></div>
        <div class="">
          <span><h1>Registration Successful!</h1></span>
          <span><p>Please check your email and follow the activation link to get started.</p></span>
          <div>
            <app-button>
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              Back to Login
            </app-button>
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
  components: {
    AppButton
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin-top: 1rem;
}

.success-logo {
  > img {
    width: 20%;
  }
}
</style>