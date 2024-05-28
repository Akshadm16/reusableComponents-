<template>
    <v-slide-group-item>
      <v-btn icon variant="text" @click="handleClick">
        <v-icon :size="size" :color="color" :title="title">{{ icon }}</v-icon>
      </v-btn>
    </v-slide-group-item>
</template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: 'small',
      },
      color: {
        type: String,
        default: '#3b7391',
      },
      title: {
        type: String,
        default: '',
      },
      action: {
        type: Function,
        required: true,
      },
    },
    methods: {
      handleClick() {
        this.action();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  