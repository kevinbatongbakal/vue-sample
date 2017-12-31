
<template lang="pug">
  section
    h4 Sample Form
    br

    form
      .columns
        .column.is-6
          
          .field
            label.label Name *
            .control.has-icons-right
              input.input(v-model='form.name', @blur='$v.form.name.$touch()', :class='{ "is-danger": $v.form.name.$error }')
              span.icon.is-small.is-right(v-if="$v.form.name.$error")
                i.fa.fa-lg.fa-exclamation-circle.has-text-danger
            p.help.is-danger(v-if='!$v.form.name.required && $v.form.name.$dirty') Name is required

          .field
            label.label Email *
            .control.has-icons-right
              input.input(v-model='form.email', @blur='$v.form.email.$touch()', :class='{ "is-danger": $v.form.email.$error }')
              span.icon.is-small.is-right(v-if="$v.form.email.$error")
                i.fa.fa-lg.fa-exclamation-circle.has-text-danger
            p.help.is-danger(v-if='!$v.form.email.required && $v.form.email.$dirty') Email is required
            p.help.is-danger(v-if='!$v.form.email.email && $v.form.email.$dirty') Invalid email

          .field
            label.label Select *
            .select(:class='{ "is-danger": $v.form.select.$error }')
              select(placeholder='Select a character', v-model='form.select', @blur='$v.form.select.$touch()')
                option(v-for='option in selectOptions', :value='option.id') {{ option.label }}
            p.help.is-danger(v-if='!$v.form.select.required && $v.form.select.$dirty') Select is required
      
          .field
            .columns
              .column.is-6(:class='{ "custom-is-danger": $v.form.sampleDate.$error }')
                label.label Sample Date *
                .control.has-icons-right
                  b-datepicker(placeholder='Click to select...', icon='calendar', v-model='form.sampleDate', @blur='blurDelay($v.form.sampleDate)')
                  span.icon.is-small.is-right(v-if="$v.form.sampleDate.$error")
                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                p.help.is-danger(v-if='!$v.form.sampleDate.required && $v.form.sampleDate.$dirty') Sample date is required

              .column.is-6(:class='{ "custom-is-danger": $v.form.sampleTime.$error }')
                label.label Sample Time *
                .control.has-icons-right
                  b-timepicker(placeholder='Type or select a date...', icon='clock-o', v-model='form.sampleTime', @blur='blurDelay($v.form.sampleTime)')
                  span.icon.is-small.is-right(v-if="$v.form.sampleTime.$error")
                    i.fa.fa-lg.fa-exclamation-circle.has-text-danger
                p.help.is-danger(v-if='!$v.form.sampleTime.required && $v.form.sampleTime.$dirty') Sample time is required
          
          .field
            //- a.button.is-primary.is-pulled-right(@click="onSubmit()", :disabled="$v.$invalid") Submit
            button.button.is-primary.is-pulled-right(@click.prevent="onSubmit()", :disabled="$v.$invalid") Submit

      br
      br
      .columns
        .column
          p {{ form }}

          .control
            button.button.is-success(@click.prevent="sampleGlobalMethod('qwe')") Mixin method
            p from mixin - {{ sampleGlobalVar }}

</template>

<script>
import { required, email, numeric } from "vuelidate/lib/validators";
import { sampleMixin } from "./../../mixins/sampleMixin";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        select: "",
        sampledate: null,
        sampleTime: null
      },

      selectOptions: [
        { id: 1, label: "Option 1" },
        { id: 2, label: "Option 2" },
        { id: 3, label: "Option 3" },
        { id: 4, label: "Option 4" }
      ]
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      select: { required },
      sampleDate: { required },
      sampleTime: { required }
    }
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      console.log(this.form);
    },
    blurDelay(elem) {
      setTimeout(() => {
        elem.$touch();
      }, 100);
    }
  },
  mixins: [sampleMixin]
};
</script>
