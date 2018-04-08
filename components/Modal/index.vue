<template>
  <transition name="modal-fade">
    <div v-show="show" tabindex="-1" :style="style" :class="['modal', className]" @keyup.esc="onEsc">
      <div class="modal-mask" v-if="mask" @click="onClickMask" :style="customMaskStyles" />
      <transition :name="`modal-${animation}`">
        <div class="modal-dialog" v-show="show" :style="dialogStyle">
          <span class="modal-close" v-if="closeButton" @click="$emit('hide')" />
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",

  props: {
    show: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 240
    },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: "px"
    },
    animation: {
      type: String,
      default: "zoom"
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ""
    },
    customStyles: {
      type: Object,
      default: () => ({})
    },
    customMaskStyles: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    style() {
      return {
        animationDuration: `${this.duration}ms`
      };
    },
    dialogStyle() {
      return {
        width: this.width + this.measure,
        height: this.height + this.measure,
        animationDuration: `${this.duration}ms`,
        ...this.customStyles
      };
    }
  },

  watch: {
    show(isShow) {
      isShow &&
        this.$nextTick(() => {
          this.$el.focus();
        });
    }
  },

  methods: {
    onEsc() {
      if (this.show && this.closeOnEsc) {
        this.$emit("hide");
      }
    },
    onClickMask() {
      this.$emit("clickMask");
      if (this.closeOnClickMask) {
        this.$emit("hide");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
}

.modal,
.modal-mask {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.modal-mask {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
}

.modal-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 101;
  padding: 15px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  cursor: pointer;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  z-index: 9999;
  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    transition: background 0.2s;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover:before,
  &:hover:after {
    background: #333;
  }
}

/* -- fade -- */
@-webkit-keyframes modal-fade-enter {
  from {
    opacity: 0;
  }
}

@keyframes modal-fade-enter {
  from {
    opacity: 0;
  }
}

.modal-fade-enter-active {
  animation: modal-fade-enter both ease-in;
}

@-webkit-keyframes modal-fade-leave {
  to {
    opacity: 0;
  }
}

@keyframes modal-fade-leave {
  to {
    opacity: 0;
  }
}

.modal-fade-leave-active {
  animation: modal-fade-leave both ease-out;
}

/* -- zoom -- */
@-webkit-keyframes modal-zoom-enter {
  from {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes modal-zoom-enter {
  from {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

.modal-zoom-enter-active {
  -webkit-animation: modal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
  animation: modal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes modal-zoom-leave {
  to {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes modal-zoom-leave {
  to {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

.modal-zoom-leave-active {
  -webkit-animation: modal-zoom-leave both;
  animation: modal-zoom-leave both;
}
</style>
