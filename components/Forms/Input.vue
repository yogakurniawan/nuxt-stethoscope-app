<template>
  <input 
    @input="$emit('input', $event.target.value)"
    class="form-control"
    :class="{ 'invalid' : invalid }"
    :value="value"
    v-bind="$attrs">
</template>

<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$input-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !default;
$input-box-shadow: inset 0 1px 1px rgba($black, 0.075) !default;
$input-focus-border-color: lighten($primary, 25%) !default;

.form-control {
  display: block;
  width: 100%;
  padding: $padding-y $padding-x;
  font-family: inherit;
  font-size: $font-size-base;
  color: $gray-700;
  background-color: $white;
  background-clip: padding-box;
  min-height: 2.5rem;
  border: $border-width solid $gray-400;
  border-radius: $border-radius;
  line-height: $line-height-base;
  box-shadow: $input-box-shadow;
  transition: $input-transition; // Unstyle the caret on `<select>`s in IE10+.
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  } // Customize the `:focus` state to imitate native WebKit styles.
  @include form-control-focus($gray-700, $input-focus-border-color, ($input-box-shadow, $input-btn-focus-box-shadow));
  &::placeholder {
    color: $gray-600; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
    opacity: 1;
  } // Disabled and read-only inputs
  //
  // HTML5 says that controls under a fieldset > legend:first-child won't be
  // disabled if the fieldset is disabled. Due to implementation difficulty, we
  // don't honor that edge case; we style them as disabled anyway.
  &:disabled,
  &[readonly] {
    background-color: $gray-200; // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
    opacity: 1;
  }
  &.invalid {
    border-color: $invalid;
    @include form-control-focus($gray-700, $invalid, 0 0 0 0.2rem rgba(220,53,69,.25));
  }
}
</style>