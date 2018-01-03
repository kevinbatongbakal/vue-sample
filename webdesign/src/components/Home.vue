<template lang="pug">
  section.landing.section.is-paddingless
    div.bg-container
        img.landing-bg(src="../assets/img/landing-page-bg.png")
        .content-container.is-overlay
            .container
                .level 
                    .level-item.direction-column
                        .heading-container
                            h1.title.is-1.is-lowercase
                                | Lorem ipsum dolor, 
                                br
                                |   consectetur adipiscing,
                                br
                                |   incididunt 
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