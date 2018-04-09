<template>
  <modal measure="rem" :show="show" :animation="animation" :width="width" :height="height" :duration="duration" className="my-dialog" @hide="$emit('close')">
    <div class="header">{{ title }}</div>
    <div class="body">{{ message }}</div>
    <div class="button-section">
      <app-button class="button" @click="$emit('close')">OK</app-button>
    </div>
  </modal>
</template>

<script>
import Modal from "~/components/Modal";
import AppButton from "~/components/Button";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
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
      height: 13,
      duration: 200,
      width: 28,
      animation: 'zoom'
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