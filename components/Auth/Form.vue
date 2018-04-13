<template>
  <div class="container-fluid">
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-7 col-lg-5">
        <div class="auth-container">
          <div>
            <h1>{{ title }}</h1>
          </div>
          <div class="upper-box">
            <form @submit.prevent="onSubmit">
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-7 col-lg-8 field">
                  <app-input :invalid="errors.has('email')" v-validate="'required|email'" v-model="email" type="text" name="email" placeholder="Email" />
                  <span v-show="errors.has('email')" class="push-left invalid-feedback">{{ errors.first('email') }}</span>
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-7 col-lg-8 field">
                  <app-input :invalid="errors.has('password')" v-validate="'required|strong_password'" v-model="password" type="password" name="password" placeholder="Password" />
                  <span v-show="errors.has('password')" class="push-left invalid-feedback">{{ errors.first('password') }}</span>
                </div>
              </div>
              <div class="row center-xs">
                <div class="col-xs-12 col-sm-9 col-md-7 col-lg-8">
                  <app-button class="upper-button button push-right">
                    <span v-if="!isLoading">{{ title }}</span>
                    <spinner size="1.2rem" :loading="isLoading"></spinner>
                  </app-button>
                </div>
              </div>
            </form>
          </div>
          <div class="bottom-box">
            <div class="row center-xs">
              <div class="col-xs-9 col-sm-6 col-md-5 col-lg-6 bottom-text">{{ bottomText }}</div>
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
    <modal-info @close="close" :show="show" :message="message" title="ERROR"></modal-info>
    <!-- <modal-confirmation @close="close" @abort="onAbort" @continue="onContinue" :show="show" :message="message"></modal-confirmation> -->
  </div>
</template>

<script>
import { Validator } from "vee-validate";
import ModalInfo from "~/components/Modal/Info";
import ModalConfirmation from "~/components/Modal/Confirmation";
import AppButton from "~/components/Button";
import Spinner from "~/components/Spinner";
import AppInput from "~/components/Forms/Input";

export default {
  props: {
    name: "AuthForm",
    type: {
      type: String,
      default: "signin"
    }
  },
  components: {
    ModalConfirmation,
    ModalInfo,
    Spinner,
    AppButton,
    AppInput
  },
  data() {
    return {
      show: false,
      email: "",
      message: "",
      password: "",
      title: this.type === "signin" ? "Sign In" : "Sign Up",
      navButtonText: this.type === "signin" ? "Sign Up" : "Sign In",
      direction: this.type === "signin" ? "signup" : "signin",
      bottomText:
        this.type === "signup"
          ? "Already have an Account?"
          : "Don't have an Account?"
    };
  },
  computed: {
    isLoading() {
      if (this.type === "signin") {
        return this.$store.getters.isSigningIn;
      }
      return this.$store.getters.isSigningUp;
    }
  },
  created() {
    Validator.extend("strong_password", {
      getMessage: field => `The ${field} must be 6 characters long or more.`,
      validate: value => {
        return value && value.length >= 6;
      }
    });
  },
  methods: {
    onAbort() {
      this.close();
      console.log("abort");
    },
    onContinue() {
      this.close();
      console.log("continue");
    },
    close() {
      this.show = !this.show;
    },
    signin() {
      return this.$store.dispatch("SIGN_IN", {
        email: this.email,
        password: this.password
      });
    },
    signup() {
      return this.$store.dispatch("SIGN_UP", {
        email: this.email,
        password: this.password
      });
    },
    async onSubmit() {
      try {
        const result = await this.$validator.validateAll();
        if (result) {
          if (this.type === "signin") {
            await this.signin();
          } else {
            await this.signup();
          }
        }
        const authenticated = this.$store.getters.isAuthenticated;
        if (authenticated) {
          this.$router.push("/patients");
        }
      } catch (error) {
        this.show = true;
        this.message = this.$store.getters.authError.code;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.auth-container {
  margin: 2rem 1rem;
  border: 2px solid $secondary;
  border-radius: $border-radius;
  box-shadow: 0 1px 6px rgb(179, 244, 208);
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