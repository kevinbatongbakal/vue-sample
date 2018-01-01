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
</script>
