<template>
  <input type="text" class="form-control" v-on="$listeners" />
</template>

<script>
  export default {
    name: 'VInput'
  }
</script>

<style lang="scss" scoped>
.form-control {
  display: block;
  width: 100%;
  padding: $input-padding-y $input-padding-x;
  font-family: inherit;
  font-size: $font-size-base;
  line-height: $input-line-height;
  color: $gray-700;
  background-color: $white;
  background-clip: padding-box;
  border: $border-width solid $gray-400;
  border-radius: $border-radius;
  box-shadow: $input-box-shadow;
  transition: $input-transition;

  // Unstyle the caret on `<select>`s in IE10+.
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  // Customize the `:focus` state to imitate native WebKit styles.
  @include form-control-focus();

  // Placeholder
  &::placeholder {
    color: $gray-600;
    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
    opacity: 1;
  }

  // Disabled and read-only inputs
  //
  // HTML5 says that controls under a fieldset > legend:first-child won't be
  // disabled if the fieldset is disabled. Due to implementation difficulty, we
  // don't honor that edge case; we style them as disabled anyway.
  &:disabled,
  &[readonly] {
    background-color: $gray-200;
    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
    opacity: 1;
  }
}
</style>