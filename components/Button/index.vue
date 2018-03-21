<template>
  <button
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
    name: 'VButton',
    props: {
      type: {
        type: String,
        default: 'normal'
      },
      color: {
        type: String,
        default: 'primary'
      },
    }, 
  }
</script>

<style lang="scss" scoped>
.btn {
  font-family: inherit;
  display: inline-block;
  font-weight: $btn-font-weight;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: $btn-border-width solid transparent;
  padding: $btn-padding-y $btn-padding-x;
  font-size: $font-size-base;
  line-height: $btn-line-height;
  border-radius: $btn-border-radius;
  transition: $btn-transition;

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
    margin-top: .5rem;
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