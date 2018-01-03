<template lang="pug">
  nav.navbar
    .container
      .navbar-brand
        router-link(tag="a" to="/").navbar-item.is-uppercase.is-transparent
          img(src="../assets/img/TECHDIRECT.png", alt='Tech-direct' width="248.5" height="55").techD-logo
        .navbar-burger.burger(@click="isActive = !isActive")
          span
          span
          span
      .navbar-menu(:class="{'is-active': isActive}")
          .navbar-start
            router-link(tag="a" to="/").navbar-item.is-uppercase about us
            router-link(tag="a" to="/contact-us").navbar-item.is-uppercase contact us
            router-link(tag="a" to="/404").navbar-item.is-uppercase How it works
      
          .navbar-end    
            .navbar-item
              .field.is-grouped
                p.control
                  a(href="#", title="title").button.is-primary Log in
                p.control
                  a(href="#", title="title").button.btn-sign-up Sign Up
</template>
<script>
export default {
  data(){
    return{
      isActive: false
    }
  }
}
</script>
