<template>
  <v-app>
    <v-main>
      <toolbarComponent @open-form="showForm = true" />
      <v-container>
        <CreateForm />
        <listTable/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CreateForm from './components/CreateForm.vue';
import listTable from './components/listTable.vue';
import toolbarComponent from './components/toolbarComponent.vue';

export default {
  components: {
    toolbarComponent,
    CreateForm,
    listTable
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
