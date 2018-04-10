<template>
  <modal measure="rem" :show="show" :animation="animation" :width="width" :height="height" :duration="duration" @hide="$emit('close')">
    <div class="body">{{ message }}</div>
    <div class="button-section">
      <app-button color="plain" class="button-no button" @click="$emit('abort')">{{ abortText }}</app-button>
      <app-button class="button-yes button" @click="$emit('continue')">{{ continueText }}</app-button>
    </div>
  </modal>
</template>

<script>
import Modal from "~/components/Modal";
import AppButton from "~/components/Button";

export default {
  props: {
    message: {
      type: String,
      default: ""
    },
    continueText: {
      type: String,
      default: "Yes"
    },
    abortText: {
      type: String,
      default: "No"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppButton,
    Modal
  },
  data() {
    return {
      height: 10,
      duration: 200,
      width: 28,
      animation: "zoom"
    };
  }
};
</script>

<style lang="scss" scoped>
.body {
  text-align: center;
  padding: 1.5rem 0;
}

.button {
  width: 6rem;
  margin: auto 0.5rem;
}

.button-section {
  margin-top: 1rem;
  text-align: center;
}

.header {
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9e9e9;
}
</style>