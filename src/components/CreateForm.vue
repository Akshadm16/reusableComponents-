<!-- src/components/FormComponent.vue -->
<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-text-field
          label="Name"
          v-model="formData.name"
          @input="updateFormData"
        ></v-text-field>
        <v-text-field
          label="Email"
          v-model="formData.email"
          @input="updateFormData"
        ></v-text-field>
        <v-textarea
          label="Message"
          v-model="formData.message"
          @input="updateFormData"
        ></v-textarea>
        <v-btn type="submit" color="primary">Submit</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['formData'])
    },
    methods: {
      ...mapActions(['updateFormData']),
      submitForm() {
        // Here you can handle form submission, e.g., send the data to an API
        console.log(this.formData);
      }
    }
  };
  </script>
  
  <style>
  /* Add any styles you need for your form */
  </style>
  