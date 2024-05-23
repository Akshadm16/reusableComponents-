<!-- src/components/Toolbar.vue -->
<template>
    <v-app-bar app>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="openForm">mdi-pencil</v-icon> 
    <v-icon @click="button2Action">mdi-alert</v-icon> 
    <v-icon @click="button3Action">mdi-delete</v-icon> 
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      openForm() {
        this.$emit('open-form');
        this.$emit('open-form');
      }
    }
  };
  </script>
  
  <style>
  /* Add any styles you need for your toolbar */
  </style>
  