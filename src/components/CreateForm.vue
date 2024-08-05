<template>
  <v-card id="featureXMLForm">
    <v-card-title class="d-flex justify-space-between align-center">
      <div class="text-medium-emphasis ps-2 title">{{ $t("Create Feature XML") }}</div>
      <v-btn icon="mdi-close" variant="text" @click="$emit('close-form')" color="red" />
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-form ref="featureOption" fast-fail v-model="isValidForm">
        <label for="featureName">{{ $t(confirmDialog.buttons.yes) }}</label>
        <v-text-field
          v-model="formValues.name"
          variant="outlined"
          :rules="nameRules"
          class="mb-3"
          max-length="10"
          required
          id="featureName"
          density="compact"
        />
        <label for="featureType">{{ $t(confirmDialog.buttons.no) }}</label>
        <v-text-field variant="outlined" disabled density="compact">{{ $t("Feature XML Type") }}</v-text-field>
        <label for="featureDescription">{{ $t(confirmDialog.header) }}</label>
        <v-textarea
          variant="outlined"
          rows="3"
          max-length="100"
          v-model="formValues.description"
          :rules="descriptionRules"
          required
          density="compact"
          id="featureDescription"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn color="#42a2da" type="submit" :disabled="!isValidForm" @click="submitForm">{{ $t("OK") }}</v-btn>
      <v-btn @click="$emit('close-form')" color="#e01b3c">{{ $t("Cancel") }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        description: ""
      },
      isValidForm: false,
      nameRules: [
        v => !!v || this.$t("Name is required"),
        v => /^[A-Z0-9._-]*$/.test(v) || this.$t("Name can only contain uppercase letters, numbers, periods, underscores, and hyphens")
      ],
      descriptionRules: [
        v => !!v || this.$t("Description is required"),
        v => !v.includes("~") || this.$t("Description cannot contain the '~' character")
      ]
    };
  },
  methods: {
    async submitForm() {
      const isValid = await this.$refs.featureOption.validate();
      if (isValid) {
        const objectdata = {
          name: this.formValues.name,
          description: this.formValues.description
        };
        // Call some action or emit an event with objectdata
        this.$emit('form-submitted', objectdata);
        this.$emit('close-form');
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
</style>
