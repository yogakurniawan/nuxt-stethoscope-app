<template>
  <div>
    <div v-on="$listeners">
      <slot />
      <br />
      <button type="button" :class="btnStyle" v-bind="$attrs">Click {{ propA }}</button>
      <HelloComponent v-bind:propB="$attrs.propB" />
    </div>
  </div>
</template>

<script>
import HelloComponent from './HelloComponent'

export default {
  name: 'AppButton',
  components: {
    HelloComponent
  },
  props: {
    propA: {
      type: String,
      default: 'Yes'
    },
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  font: inherit;
  background-color: black;
  color: white;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
}

.button:hover,
.button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid black;
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}
</style>
