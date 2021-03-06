<template>
  <nuxt-link
    v-if="link"
    :to="to"
    class="btn"
    :class="[
      `btn-${type}-${color}`
    ]"
    >
    <slot>Button</slot>
  </nuxt-link>
  <button
    v-else
    v-on="$listeners"
    class="btn"
    :class="[
      `btn-${type}-${color}`
    ]"
    >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: {
      type: String,
      default: "normal"
    },
    color: {
      type: String,
      default: "primary"
    },
    link: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="scss" scoped>
$btn-box-shadow: inset 0 1px 0 rgba($white, 0.15),
  0 1px 1px rgba($black, 0.075) !default;
$btn-link-disabled-color: $gray-600 !default;
$btn-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !default;
$btn-disabled-opacity: 0.65 !default;
$btn-active-box-shadow: inset 0 3px 5px rgba($black, 0.125) !default;
$btn-focus-box-shadow: $input-btn-focus-box-shadow !default;
$btn-focus-width: $input-btn-focus-width !default;

.btn {
  font-family: inherit;
  display: inline-block;
  font-weight: $font-weight-normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: $border-width solid transparent;
  padding: $padding-y $padding-x;
  font-size: $font-size-base;
  line-height: $line-height-base;
  border-radius: $border-radius;
  transition: $btn-transition;
  text-decoration: none;
  height: 2.5rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: $btn-focus-box-shadow;
  }

  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    box-shadow: none;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    background-image: none;
    box-shadow: $btn-active-box-shadow;

    &:focus {
      box-shadow: $btn-focus-box-shadow, $btn-active-box-shadow;
    }
  }
}

// Future-proof disabling of clicks on `<a>` elements
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

//
// Alternate buttons
//

.btn-normal-primary {
  @include button-variant($primary, $primary);
}

.btn-normal-plain {
  @include button-variant($plain, $plain);
}

// @each $color, $value in $theme-colors {
//   .btn-outline-#{$color} {
//     @include button-outline-variant($value);
//   }
// }

//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  font-weight: $font-weight-normal;
  color: $link-color;
  background-color: transparent;

  &:hover {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
    background-color: transparent;
    border-color: transparent;
  }

  &:focus,
  &.focus {
    text-decoration: $link-hover-decoration;
    border-color: transparent;
    box-shadow: none;
  }

  &:disabled,
  &.disabled {
    color: $btn-link-disabled-color;
  }

  // No need for an active state here
}

//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: 0.5rem;
  }
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}
</style>