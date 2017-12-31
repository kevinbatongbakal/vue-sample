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
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    "header-component": Header,
    "footer-component": Footer
  }
};

// <style>
// @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
// </style>
</script>

<style lang="scss">
@import 'styles/main.scss';
</style>


