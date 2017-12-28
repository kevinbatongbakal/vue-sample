
<template lang="pug">
  .container
    form.section(autocomplete="off")
      .columns
        .column.is-6

          label.label First name
          p.control.has-icon.has-icon-right
            input.input(type='text', placeholder='First name', v-model='form.firstName')
       
          label.label Email
          p.control
            input.input(type='email', placeholder='Email', @blur="$v.form.email.$touch()", v-model="form.email", :class='{ "is-danger": $v.form.email.$error }')
            span.help.is-danger(v-if='!$v.form.email.required && $v.$dirty') Email is required
            span.help.is-danger(v-if='!$v.form.email.email && $v.$dirty') Invalid email
 
      .columns
        .column.is-6
          a.button.is-primary.is-pulled-right(@click="onSubmit()") Submit

</template>

<script>

import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      form: {
        firstName: '',
        email: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required, email
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('Submit');
      this.$v.form.email.$touch()
    }
  }
}
</script>
