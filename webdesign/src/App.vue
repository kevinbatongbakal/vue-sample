<template lang="pug">
  #app.container
    br
    br
    header-component
    hr
    router-view
    hr
    footer-component
</template>

<script>
import Home from "./components/Home.vue";
import SampleForm from "./components/SampleForm.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    "home-component": Home,
    "sample-form": SampleForm,
    "header-component": Header,
    "footer-component": Footer
  }
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
