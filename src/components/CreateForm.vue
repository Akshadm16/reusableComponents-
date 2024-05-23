<!-- src/components/CreateForm.vue -->
<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        Name
        <v-text-field
          label="Name"
          v-model="formData.name"
          @input="updateFormData"
          name="name"
        ></v-text-field>
        Email
        <v-text-field
          label="Email"
          v-model="formData.email"
          @input="updateFormData"
          name="email"
        ></v-text-field>
        Message
        <v-textarea
          label="Message"
          v-model="formData.message"
          @input="updateFormData"
          name="message"
        ></v-textarea>
        <v-btn type="submit" color="primary">Submit</v-btn>
        <v-btn type="close" color="primary">Close</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        formData: state => state.formData
      })
    },
    methods: {
      ...mapActions(['updateFormData']),
      updateFormData(event) {
        const { name, value } = event.target;
        this.updateFormData({ [name]: value });
      },
      submitForm() {
        console.log(this.formData);
        // handle form submission here
      }
    }
  };
  </script>
  
  <style>
  /* Add any styles you need for your form */
  </style>
  