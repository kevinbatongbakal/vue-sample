<template lang="pug">
  section.section.body-bg   
    .container
        .columns
            .column.is-half.is-offset-one-quarter
                .box
                    h1.is-size-3.is-capitalized.has-text-centered Join Us Today!
                    br
                    form
                        .field
                            label.label Email Address *
                            .control.has-icons-right
                                input.input(v-model='form.email', @blur='$v.form.email.$touch()', :class='{ "is-danger": $v.form.email.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.email.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.email.required && $v.form.email.$dirty') Email is required
                            p.help.is-danger(v-if='!$v.form.email.email && $v.form.email.$dirty') Invalid email
                        .field
                            label.label First Name 
                            .control.has-icons-right
                                input.input(v-model='form.firstName', @blur='$v.form.firstName.$touch()', :class='{ "is-danger": $v.form.firstName.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.firstName.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.firstName.required && $v.form.firstName.$dirty') First Name is required
                        .field
                            label.label Last Name *
                            .control.has-icons-right
                                input.input(v-model='form.lastName', @blur='$v.form.lastName.$touch()', :class='{ "is-danger": $v.form.lastName.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.lastName.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.lastName.required && $v.form.lastName.$dirty') Last Name is required
                        
                        br
                        br
                        .columns
                            .column.is-6
                                .field
                                    label.label Enter code shown
                                    .control.has-icons-right
                                        input.input(v-model='form.lastName', @blur='$v.form.lastName.$touch()', :class='{ "is-danger": $v.form.lastName.$error }')
                                        span.icon.is-small.is-right(v-if="$v.form.lastName.$error")
                                            i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                                    p.help.is-danger(v-if='!$v.form.lastName.required && $v.form.lastName.$dirty') Last Name is required
                            .column.is-6
                                .field
                                    label.label Captcha
                                    input.input(type="text" value="XSeaXC")
                        .field.has-text-centered
                            .control
                            label.checkbox
                                input(type='checkbox' v-model="form.termsCondition")
                                |       I agree to the 
                                a(href='#') terms and conditions

                        .field.has-text-centered
                            //- a.button.is-primary.is-pulled-right(@click="onSubmit()", :disabled="$v.$invalid") Submit
                            button.button.is-primary(@click.prevent="onSubmit()", :disabled="$v.$invalid") Continue
                        .field.has-text-centered    
                            p.has-small-text 
                                span Already have an account? 
                                a(href="#", title="title") Log in 


</template>
<script>
import { required, email, numeric } from "vuelidate/lib/validators";

export default {
    data(){
        return{
            form: {
                email: '',
                firstName: '',
                lastName: ''
            }
        }
    },
    validations: {
        form: {
            email: { required, email },
            firstName: { required },
            lastName: { required }
        }
    }
}
</script>
