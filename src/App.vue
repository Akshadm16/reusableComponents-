
<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <toolbarComponent @open-form="showForm = true" />
      <v-container>
        <!-- Your main content here -->
      </v-container>

      <v-dialog v-model="showForm" max-width="600px">
        <CreateForm @close-form="showForm = false" />
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import toolbarComponent from './components/toolbarComponent.vue';
import CreateForm from './components/CreateForm.vue';

export default {
  components: {
    toolbarComponent,
    CreateForm
  },
  data() {
    return {
      showForm: false
    };
  }
};
</script>

<style>
/* Add any styles you need for your app */
</style>
