<template lang="pug">
  #app
    header-component
    router-view
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
</script>
