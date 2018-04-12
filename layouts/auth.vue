<template>
  <div>
    <logo-bar></logo-bar>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "~/components/Footer";
import LogoBar from "~/components/LogoBar";

export default {
  components: {
    LogoBar,
    AppFooter
  }
};
</script>