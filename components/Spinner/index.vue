<template>
  <div class="v-spinner" v-show="loading" :style="{ height: size }">
    <div class="v-clip" :style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClipLoader',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '35px'
    }
  },
  computed: {
    spinnerStyle() {
      return {
        height: this.size,
        width: this.size,
        background: 'transparent'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-spinner {
  text-align: center;
}

.v-spinner .v-clip {
  animation: rotate 0.75s 0s infinite linear;
  border-radius: 100%;
  border: 2px solid rgba(200, 255, 196, 0.5);
  border-bottom-color: $primary;
  display: inline-block;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>