<template lang="pug">
  section.landing.section.is-paddingless
    .content-container
        .container
            .level.is-mobile 
                .level-item.direction-column
                    .heading-container
                        h1.title.is-1.is-lowercase
                            | Lorem ipsum dolor, consectetur.
                        p
                            | Lorem ipsum dolor sit amet, consectetur  incididunt
                            br
                            | adipiscing elit, sed do eiusmod tempor

                        div.log-in-container
                            a(href="#0", title="title").button.is-primary.is-uppercase  Client Log in
                            a(href="#0", title="title").button.is-secondary.is-uppercase   Tech Log in
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home Component'
    }
  }
}
</script>