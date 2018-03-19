<template>
  <div class="container">
    <h1 class="red">Hello {{ name }}!</h1>
    <button @click="test">Hello</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mars"
    };
  },
  methods: {
    async test() {
      const A = {
        name: "yoga kurniawan"
      };
      try {
        const data = await new Promise((resolve, reject) => {
          reject({
            message: "error"
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: 30px;
}
.red {
  color: red;
}
</style>