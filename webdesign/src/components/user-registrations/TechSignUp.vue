<template lang="pug">
  section.section.body-bg.tech-sign-up
    .container
        .columns
            .column.is-half.is-offset-one-quarter
                .box
                    h1.is-size-3.is-capitalized.has-text-centered Tech Sign Up
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
                            label.label Name *
                            .control.has-icons-right
                                input.input(v-model='form.name', @blur='$v.form.name.$touch()', :class='{ "is-danger": $v.form.name.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.name.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.name.required && $v.form.name.$dirty') Name is required

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
                                    .select(:class='{ "is-danger": $v.form.citySelect.$error }').is-fullwidth
                                        select(placeholder='Select a character', v-model='form.citySelect', @blur='$v.form.citySelect.$touch()')
                                            option(v-for='option in cityOptions', :value='cityOptions.id') {{ option.label }}
                                    p.help.is-danger(v-if='!$v.form.citySelect.required && $v.form.citySelect.$dirty') City is required
                            .column.is-4
                                .field
                                    label.label State *
                                    .control
                                        .select(:class='{ "is-danger": $v.form.stateOptions.$error }').is-fullwidth
                                            select(placeholder='Select a character', v-model='form.stateOptions', @blur='$v.form.stateOptions.$touch()')
                                                option(v-for='option in stateOptions', :value='stateOptions.id') {{ option.label }}
                                        p.help.is-danger(v-if='!$v.form.stateOptions.required && $v.form.stateOptions.$dirty') State is required
                            .column.is-4
                                .field
                                    label.label Post Code *
                                    .select(:class='{ "is-danger": $v.form.postCodeOptions.$error }').is-fullwidth
                                        select(placeholder='Select a character', v-model='form.postCodeOptions', @blur='$v.form.postCodeOptions.$touch()')
                                            option(v-for='option in postCodeOptions', :value='postCodeOptions.id') {{ option.label }}
                                    p.help.is-danger(v-if='!$v.form.postCodeOptions.required && $v.form.postCodeOptions.$dirty') Post Code is required
                        .field
                            label.label Phone Number *
                            .control.has-icons-right
                                input.input(v-model='form.phoneNumber', @blur='$v.form.phoneNumber.$touch()', :class='{ "is-danger": $v.form.phoneNumber.$error }')
                                span.icon.is-small.is-right(v-if="$v.form.phoneNumber.$error")
                                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                            p.help.is-danger(v-if='!$v.form.phoneNumber.required && $v.form.phoneNumber.$dirty') Phone Number is required

                        .field
                            label.label English Proficiency *
                            .select(:class='{ "is-danger": $v.form.engProficencyOption.$error }').is-fullwidth
                                select(placeholder='Select a character', v-model='form.engProficencyOption', @blur='$v.form.engProficencyOption.$touch()')
                                    option(v-for='option in engProficencyOption', :value='engProficencyOption.id') {{ option.label }}
                            p.help.is-danger(v-if='!$v.form.engProficencyOption.required && $v.form.engProficencyOption.$dirty') Post Code is required

                        .columns
                            .column.is-8
                                .field
                                    label.label Rate Range *
                                    .select(:class='{ "is-danger": $v.form.rateRange.$error }').is-fullwidth
                                        select(placeholder='Select a character', v-model='form.rateRange', @blur='$v.form.rateRange.$touch()')
                                            option(v-for='option in rateRange', :value='rateRange.id') {{ option.label }}
                                    p.help.is-danger(v-if='!$v.form.rateRange.required && $v.form.rateRange.$dirty') Rate Range is required
                            .column.is-4
                                .field
                                    label.label Hourly *
                                    .control
                                        .select(:class='{ "is-danger": $v.form.hourlyRate.$error }').is-fullwidth
                                            select(placeholder='Select a character', v-model='form.hourlyRate', @blur='$v.form.hourlyRate.$touch()')
                                                option(v-for='option in hourlyRate', :value='hourlyRate.id') {{ option.label }}
                                        p.help.is-danger(v-if='!$v.form.hourlyRate.required && $v.form.hourlyRate.$dirty') Hourly is required
                        .field
                            label.label Industry Experience *
                            .select(:class='{ "is-danger": $v.form.experience.$error }').is-fullwidth
                                select(placeholder='Select a character', v-model='form.experience', @blur='$v.form.experience.$touch()')
                                    option(v-for='option in experience', :value='experience.id') {{ option.label }}
                            p.help.is-danger(v-if='!$v.form.experience.required && $v.form.experience.$dirty') Industry Experience is required
                        .field
                            label.label Skillset *
                            .select(:class='{ "is-danger": $v.form.skillset.$error }').is-fullwidth
                                select(placeholder='Select a character', v-model='form.skillset', @blur='$v.form.skillset.$touch()')
                                    option(v-for='option in skillset', :value='skillset.id') {{ option.label }}
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
                name: '',
                abn: '',
                tradingName: '',
                address: '',
                citySelect:'',
                stateOptions:'',
                postCodeOptions:'',
                phoneNumber: '',
                engProficencyOption: '',
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
            engProficencyOption: [
                { id: 1, label: "No proficiency" },
                { id: 2, label: "Intermediate" },
                { id: 3, label: "Fluent" }
            ],
            rateRange: [
                { id: 1, label: "Range 1" },
                { id: 2, label: "Range 2" },
                { id: 3, label: "Range 3" }
            ],
            hourlyRate: [
                { id: 1, label: "rate 1" },
                { id: 2, label: "rate 2" },
                { id: 3, label: "rate 3" }
            ],
            experience: [
                { id: 1, label: "0 - 1 year" },
                { id: 2, label: "1 - 2 years" },
                { id: 3, label: "2 - 5 years" }
            ],
            skillset: [
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
            name: { required },
            abn: { required },
            tradingName: { required },
            address: { required },
            citySelect: { required },
            stateOptions: { required },
            postCodeOptions: { required },
            phoneNumber: {required},
            engProficencyOption: {required},
            rateRange: {required},
            hourlyRate: {required},
            experience: {required},
            skillset: {required}
        }
    }
}
</script>
