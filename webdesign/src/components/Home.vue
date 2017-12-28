<template lang="pug">
  .container {{ msg }}
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