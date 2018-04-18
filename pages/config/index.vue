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
              <app-input :invalid="errors.has('Practice Name')" v-validate="'required'" v-model="practiceName" type="text" name="Practice Name" placeholder="Practice Name" />
              <span v-show="errors.has('Practice Name')" class="push-left invalid-feedback">{{ errors.first('Practice Name') }}</span>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('Address 1')" v-validate="'required'" v-model="addressLine1" type="text" name="Address 1" placeholder="Address 1" />
              <span v-show="errors.has('Address 1')" class="push-left invalid-feedback">{{ errors.first('Address 1') }}</span>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('Practice Phone Number')" v-validate="'required'" v-model="practicePhoneNo" type="text" name="Practice Phone Number" placeholder="Practice Phone Number" />
              <span v-show="errors.has('Practice Phone Number')" class="push-left invalid-feedback">{{ errors.first('Practice Phone Number') }}</span>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('Address 2')" v-validate="'required'" v-model="addressLine2" type="text" name="Address 2" placeholder="Address 2" />
              <span v-show="errors.has('Address 2')" class="push-left invalid-feedback">{{ errors.first('Address 2') }}</span>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <multiselect v-model="value" :options="options" :searchable="false" :show-labels="false" placeholder="Current Clinical System"></multiselect>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <app-input :invalid="errors.has('Postcode')" v-validate="'required'" v-model="postCode" type="text" name="Postcode" placeholder="Postcode" />
              <span v-show="errors.has('Postcode')" class="push-left invalid-feedback">{{ errors.first('Postcode') }}</span>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <multiselect v-model="currentClinicalSystem" track-by="lookupGuid" :show-labels="false" label="lookupText" placeholder="Service Provider Type" :options="lookupCurrentClinicalSystem" :searchable="false" :allow-empty="false">
                <template slot="singleLabel" slot-scope="{ option }">{{ option.lookupText }}</template>
              </multiselect>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <multiselect v-model="value" :options="options" :searchable="false" :show-labels="false" placeholder="City / Suburb"></multiselect>
            </div>
          </div>
          <div class="row center-xs">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <multiselect v-model="value" :options="options" :searchable="false" :show-labels="false" placeholder="Number of Doctors"></multiselect>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <multiselect v-model="value" :options="options" :searchable="false" :show-labels="false" placeholder="State"></multiselect>
            </div>
          </div>
          <div class="row end-xs">
            <div class="col-xs-12">
              <app-Button :link="true" :to="direction">Continue</app-Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
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
  created() {
    Validator.extend("strong_password", {
      getMessage: field => `The ${field} must be 6 characters long or more.`,
      validate: value => {
        return value && value.length >= 6;
      }
    });
  },
  data() {
    return {
      practiceName: "",
      practicePhoneNo: "",
      addressLine1: "",
      addressLine2: "",
      postCode: "",
      currentClinicalSystem: "",
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
  },
  computed: {
    lookupCurrentClinicalSystem() {
      console.log(this.$store.getters.lookupCurrentClinicalSystem)
      return this.$store.getters.lookupCurrentClinicalSystem;
    }
  },
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