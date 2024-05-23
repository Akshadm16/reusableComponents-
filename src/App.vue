<template>
  <v-app>
    <v-main>
      <CreateForm/>
    </v-main>
  </v-app>
</template>

<script>
import CreateForm from './components/CreateForm.vue'

export default {
  name: 'App',

  components: {
    CreateForm,
  },

  data: () => ({
    //
  }),
}
</script>
