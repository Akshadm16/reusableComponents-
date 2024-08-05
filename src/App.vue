<template>
  <v-app>
    <v-main style="min-height: 100vh">
      <toolbarComponent @open-form="showForm = true" />
      <CreateForm />
      <!-- <listTable /> -->
      <TablePage />
    </v-main>
  </v-app>
</template>

<script>
import CreateForm from "./components/CreateForm.vue";
// import listTable from "./components/listTable.vue";
import TablePage from "./components/TablePage.vue";
import toolbarComponent from "./components/toolbarComponent.vue";

export default {
  components: {
    toolbarComponent,
    CreateForm,
    // listTable,
    TablePage,
  },
  data() {
    return {
      showForm: false,
    };
  },
};
</script>

<style>
/* Add any styles you need for your app */
</style>
