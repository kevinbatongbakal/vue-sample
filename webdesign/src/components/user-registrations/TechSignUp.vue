<template lang="pug">
  section.section.body-bg.tech-sign-up
    .container
        .columns
            .column.is-half.is-offset-one-quarter
                .box
                    h1.is-size-3.is-capitalized.has-text-centered Tech Sign Up
                    br
                    form
                        .field
                            label.label Email *
                            .control.has-icons-right
                                input.input(v-model='form.email', @blur='$v.form.email.$touch()', :class='{ "is-danger": $v.form.email.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.email.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.email.required && $v.form.email.$dirty') Email is required
                            p.help.is-danger(v-if='!$v.form.email.email && $v.form.email.$dirty') Invalid email
                        .field
                            label.label First Name *
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

                        .field
                            label.label ABN *
                            .control.has-icons-right
                                input.input(v-model='form.abn', @blur='$v.form.abn.$touch()', :class='{ "is-danger": $v.form.abn.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.abn.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.abn.required && $v.form.abn.$dirty') ABN is required
                
                        .field
                            label.label Trading Name *
                            .control.has-icons-right
                                input.input(v-model='form.tradingName', @blur='$v.form.tradingName.$touch()', :class='{ "is-danger": $v.form.tradingName.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.tradingName.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.tradingName.required && $v.form.tradingName.$dirty') Trading Name is required
                        .field
                            label.label Address *
                            .control.has-icons-right
                                input.input(v-model='form.address', @blur='$v.form.address.$touch()', :class='{ "is-danger": $v.form.address.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.address.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.address.required && $v.form.address.$dirty') Address is required
                
                        .columns
                            .column.is-4
                                .field
                                    label.label City *
                                    .select(:class='{ "is-danger": $v.form.city.$error }').is-fullwidth
                                        select(placeholder='Select a character', v-model='form.city', @blur='$v.form.city.$touch()')
                                            option(v-for='option in cityOptions', :value='option.id') {{ option.label }}
                                    p.help.is-danger(v-if='!$v.form.city.required && $v.form.city.$dirty') City is required
                            .column.is-4
                                .field
                                    label.label State *
                                    .control
                                        .select(:class='{ "is-danger": $v.form.state.$error }').is-fullwidth
                                            select(placeholder='Select a character', v-model='form.state', @blur='$v.form.state.$touch()')
                                                option(v-for='option in stateOptions', :value='option.id') {{ option.label }}
                                        p.help.is-danger(v-if='!$v.form.state.required && $v.form.state.$dirty') State is required
                            .column.is-4
                                .field
                                    label.label Post Code *
                                    .select(:class='{ "is-danger": $v.form.postCode.$error }').is-fullwidth
                                        select(placeholder='Select a character', v-model='form.postCode', @blur='$v.form.postCode.$touch()')
                                            option(v-for='option in postCodeOptions', :value='option.id') {{ option.label }}
                                    p.help.is-danger(v-if='!$v.form.postCode.required && $v.form.postCode.$dirty') Post Code is required
                        .field
                            label.label Phone Number *
                            .control.has-icons-right
                                input.input(v-model='form.phoneNumber', @blur='$v.form.phoneNumber.$touch()', :class='{ "is-danger": $v.form.phoneNumber.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.phoneNumber.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.phoneNumber.required && $v.form.phoneNumber.$dirty') Phone Number is required

                        .field
                            label.label English Proficiency *
                            .select(:class='{ "is-danger": $v.form.engProficency.$error }').is-fullwidth
                                select(placeholder='Select a character', v-model='form.engProficency', @blur='$v.form.engProficency.$touch()')
                                    option(v-for='option in engProficencyOptions', :value='option.id') {{ option.label }}
                            p.help.is-danger(v-if='!$v.form.engProficency.required && $v.form.engProficency.$dirty') Post Code is required

                        .columns
                            .column.is-8
                                .field
                                    label.label Rate Range *
                                    .select(:class='{ "is-danger": $v.form.rateRange.$error }').is-fullwidth
                                        select(placeholder='Select a character', v-model='form.rateRange', @blur='$v.form.rateRange.$touch()')
                                            option(v-for='option in rateRangeOptions', :value='option.id') {{ option.label }}
                                    p.help.is-danger(v-if='!$v.form.rateRange.required && $v.form.rateRange.$dirty') Rate Range is required
                            .column.is-4
                                .field
                                    label.label Hourly *
                                    .control
                                        .select(:class='{ "is-danger": $v.form.hourlyRate.$error }').is-fullwidth
                                            select(placeholder='Select a character', v-model='form.hourlyRate', @blur='$v.form.hourlyRate.$touch()')
                                                option(v-for='option in hourlyRateOptions', :value='option.id') {{ option.label }}
                                        p.help.is-danger(v-if='!$v.form.hourlyRate.required && $v.form.hourlyRate.$dirty') Hourly is required
                        .field
                            label.label Industry Experience *
                            .select(:class='{ "is-danger": $v.form.experience.$error }').is-fullwidth
                                select(placeholder='Select a character', v-model='form.experience', @blur='$v.form.experience.$touch()')
                                    option(v-for='option in experienceOptions', :value='option.id') {{ option.label }}
                            p.help.is-danger(v-if='!$v.form.experience.required && $v.form.experience.$dirty') Industry Experience is required
                        .field
                            label.label Skillset *
                            .select(:class='{ "is-danger": $v.form.skillset.$error }').is-fullwidth
                                select(placeholder='Select a character', v-model='form.skillset', @blur='$v.form.skillset.$touch()')
                                    option(v-for='option in skillsetOptions', :value='option.id') {{ option.label }}
                            p.help.is-danger(v-if='!$v.form.skillset.required && $v.form.skillset.$dirty') skillset Code is required
                        br
                        br
                        .field.has-text-centered
                            .control
                            label.checkbox
                                input(type='checkbox' v-model="form.termsCondition")
                                |       I agree to the 
                                a(href='#') terms and conditions

                        .field.has-text-centered
                            //- a.button.is-primary.is-pulled-right(@click="onSubmit()", :disabled="$v.$invalid") Submit
                            button.button.is-primary(@click.prevent="onSubmit()", :disabled="$v.$invalid") Submit


</template>
<script>
import { required, email, numeric } from "vuelidate/lib/validators";

export default {
    data(){
        return{
            form: {
                email: '',
                firstName: '',
                lastName: '',
                abn: '',
                tradingName: '',
                address: '',
                city:'',
                state:'',
                postCode:'',
                phoneNumber: '',
                engProficency: '',
                rateRange: '',
                hourlyRate: '',
                experience: '',
                skillset: '',
                termsCondition: ''


            },
            cityOptions: [
                { id: 1, label: "Option 1" },
                { id: 2, label: "Option 2" },
                { id: 3, label: "Option 3" },
                { id: 4, label: "Option 4" }
            ],
            stateOptions: [
                { id: 1, label: "Option 1" },
                { id: 2, label: "Option 2" },
                { id: 3, label: "Option 3" },
                { id: 4, label: "Option 4" }
            ],
            postCodeOptions: [
                { id: 1, label: "Option 1" },
                { id: 2, label: "Option 2" },
                { id: 3, label: "Option 3" },
                { id: 4, label: "Option 4" }
            ],
            engProficencyOptions: [
                { id: 1, label: "No proficiency" },
                { id: 2, label: "Intermediate" },
                { id: 3, label: "Fluent" }
            ],
            rateRangeOptions: [
                { id: 1, label: "Range 1" },
                { id: 2, label: "Range 2" },
                { id: 3, label: "Range 3" }
            ],
            hourlyRateOptions: [
                { id: 1, label: "rate 1" },
                { id: 2, label: "rate 2" },
                { id: 3, label: "rate 3" }
            ],
            experienceOptions: [
                { id: 1, label: "0 - 1 year" },
                { id: 2, label: "1 - 2 years" },
                { id: 3, label: "2 - 5 years" }
            ],
            skillsetOptions: [
                { id: 1, label: "Junior" },
                { id: 2, label: "Mid" },
                { id: 3, label: "Senior" },
                { id: 3, label: "Supervisory" },
                { id: 3, label: "managerial" }
            ]
        }
    },
    validations: {
        form: {
            email: { required, email },
            firstName: { required },
            lastName: { required },
            abn: { required },
            tradingName: { required },
            address: { required },
            city: { required },
            state: { required },
            postCode: { required },
            phoneNumber: {required},
            engProficency: {required},
            rateRange: {required},
            hourlyRate: {required},
            experience: {required},
            skillset: {required},
            termsCondition: {required}
        }
    }
}
</script>
