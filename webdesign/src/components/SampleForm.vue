
<template lang="pug">
  .container
    form.section(autocomplete="off")
      .columns
        .column.is-6

          label.label First name *
          p.control
            input.input(type="text", placeholder="First name", @blur="$v.form.firstName.$touch()", v-model="form.firstName", :class="{ 'is-danger': $v.form.firstName.$error }")
            span.help.is-danger(v-if="!$v.form.firstName.required && $v.form.firstName.$dirty") First name is required

          label.label Last name
          p.control
            input.input(type="text", placeholder="Last name", v-model="form.lastName")

          label.label Age *
          p.control
            input.input(type="numeric", placeholder="Age", v-model="form.age", @blur="$v.form.age.$touch()")
            span.help.is-danger(v-if="!$v.form.age.required && $v.form.age.$dirty") Age is required
            span.help.is-danger(v-if="!$v.form.age.numeric && $v.form.age.$dirty") Must be a number

          label.label Birthday
          p.control
            datepicker(placeholder="Date", v-model="form.birthday", :options="{enableTime: true}")
       
          label.label Email *
          p.control
            input.input(type="email", placeholder="Email", @blur="$v.form.email.$touch()", v-model="form.email", :class="{ 'is-danger': $v.form.email.$error }")
            span.help.is-danger(v-if="!$v.form.email.required && $v.form.email.$dirty") Email is required
            span.help.is-danger(v-if="!$v.form.email.email && $v.form.email.$dirty") Invalid email

          label.label Region *
          p.control
            span.select
              select(v-model="form.region", @blur="$v.form.region.$touch()", :class="{ 'is-danger': $v.form.region.$error }")
                option(v-for="region in regions", :value="region.id") {{ region.title }}
            span.help.is-danger(v-if="!$v.form.region.required && $v.form.region.$dirty") Region is required

          label.label Gender *
          p.control
            label.radio(v-for="s in genders")
              input(type="radio", name="gender", :value="s", v-model="form.gender", @blur="$v.form.gender.$touch()")
              | &nbsp;{{ s }}
            span.help.is-danger(v-if="!$v.form.gender.required && $v.form.gender.$dirty") Gender is required
          
          br
          p.control
            label.checkbox
              input(type='checkbox', v-model="form.iAgree", @blur="$v.form.iAgree.$touch()")
              |  I agree
            span.help.is-danger(v-if="!$v.form.iAgree.required && $v.form.iAgree.$dirty") You must agree

      .columns
        .column.is-6
          a.button.is-primary.is-pulled-right(@click="onSubmit()", :disabled="$v.$invalid") Submit

      br
      p Form Data: {{ form }}
      br
      br

      modal(title='Title here', :width='520', :is-show='isShow', transition='fadeDown', @close='isShow=false', :on-ok="modalOkClick")
        p Body of the modal
        br
        | more options here https://chenz24.github.io/vue-blu/#/en/components/modal
      
      p.control
        popover(title="Tooltip with title", content="Tooltip content", trigger="hover")
          button.button.is-primary(@click.prevent="isShow = true") basic modal
      
      p.control
        popover(content="Tooltip without title", trigger="hover")
          button.button.is-primary(@click.prevent="showToast()") Show toast

      sample-table-component

</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';
import SampleTable from './SampleTable/SampleTable.vue';

export default {

  components: {
    'sample-table-component': SampleTable
  },

  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        age: '',
        birthday: '',
        email: '',
        region: '',
        gender: '',
        iAgree: '',
        birthday: ''
      },
      regions: [
        { id: 0, title: 'Japan'},
        { id: 1, title: 'The Americas'},
        { id: 2, title: 'Europe'},
        { id: 3, title: 'Australia/New Zealand'}
      ],
      genders: ['Male', 'Female'],

      isShow: false // modal display
    };
  },

  created() {
    this.form.region = 3; // set default value
  },

  validations: {
    form: {
      firstName: { required: required },
      email: {
        required,
        email
      },
      age: {
        required, numeric
      },
      region: { required },
      gender: { required },
      iAgree: { required }
    }
  },

  methods: {
    onSubmit() {
      console.log('Form Data', this.form);
      this.$v.form.$touch(); // trigger validation to form
    },
    modalOkClick() {
      console.log('modal ok click');
    },
    showToast() {
      this.$notify.success({content: 'Sample toast'});
    }

  }

};
</script>
