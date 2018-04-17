<template>
  <div class="container-fluid">
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-6">
        <div class="auth-container">
          <div class="title">
            <h2>WELCOME</h2>
            <h3>We need initital information from you</h3>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
            </div>
          </div>
          <app-Button :link="true" :to="direction">Signin Now</app-Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "~/components/Multiselect/Multiselect.vue";
import AppInput from "~/components/Forms/Input";
import AppButton from "~/components/Button";

export default {
  layout: "auth",
  components: {
    AppButton,
    AppInput,
    Multiselect
  },
  data() {
    return {
      value: "",
      options: [
        "Select option",
        "options",
        "selected",
        "mulitple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "allowEmpty",
        "showLabels",
        "onChange",
        "touched"
      ],
      direction: "signin"
    };
  }
};
</script>

<style lang="scss" scoped>
.page {
  margin-top: 1rem;
}

.title {
  margin-bottom: 1.5rem;
  color: $primary;
  vertical-align: middle;
}

.auth-container {
  .row {
    > div {
      margin-bottom: 1rem;
    }
  }
  margin: 2rem 1rem;
  padding: 0 1rem;
  border: 2px solid $secondary;
  border-radius: $border-radius;
  box-shadow: 0 1px 6px rgb(179, 244, 208);
}
</style>