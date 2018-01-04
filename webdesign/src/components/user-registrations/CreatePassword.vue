<template lang="pug">
  section.section.body-bg   
    .container
        .columns
            .column.is-half.is-offset-one-quarter
                .box
                    h1.is-size-3.is-capitalized.has-text-centered Create Password
                    br
                    form
                        .field
                            b-field(label='New Password')
                                b-input(type='password', value='', password-reveal='')
                        .field
                            b-field(label='Confirm Password')
                                b-input(type='password', value='', password-reveal='')
                        br
                        .field.has-text-centered
                            button.button.is-primary(@click.prevent="onSubmit()") Continue


</template>
<script>
import { required, email, numeric } from "vuelidate/lib/validators";

export default {

}
</script>
