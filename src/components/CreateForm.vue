<!-- src/components/CreateForm.vue -->

<template>
  <v-dialog v-model="isValidForm"  max-width="500">
        <v-card v-if="isValidForm" id="featureXMLForm">
            <v-card-title class="d-flex justify-space-between align-center">
                <div class="text-medium-emphasis ps-2 title">{{ ("Create Feature XML") }}</div>
                <v-btn icon="mdi-close" variant="text" @click="closeForm" color="red" />
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-form ref="featureOption" fast-fail v-model="isValidForm">
                    <label for="name">{{ ("Name") }}</label>
                    <v-text-field
                        v-model="formValues.name"
                        variant="outlined"
                        :rules="nameRules"
                        class="mb-3"
                        maxLength="10"
                        required
                        id="featureName"
                        density="compact"
                    />
                    <label for="type">{{ ("Type") }}</label>
                    <v-text-field variant="outlined" disabled density="compact">{{ ("Feature XML Type") }}</v-text-field>
                    <label for="description">{{ ("Description") }}</label>
                    <v-textarea
                        variant="outlined"
                        rows="3"
                        maxLength="100"
                        v-model="formValues.description"
                        :rules="descriptionRules"
                        required
                        density="compact"
                    />
                </v-form>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn color="#42a2da" type="submit" :disabled="!isValidForm" @click="submitForm">{{ ("OK") }}</v-btn>
                <v-btn @click="closeForm" color="#e01b3c">{{ ("Cancel") }}</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
      
  </template>

  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
        return {
            formValues: {
                name: "",
                description: ""
            },

           

            // nameRules: [v => !!v || this.$t("Name is required"), v => /^[A-Z0-9._-]*$/.test(v) || this.$t("rules for name")],
            // descriptionRules: [v => !!v || this.$t("Description is required"), v => !v.includes("~") || this.$t("rule for desc")]
        };
    },
    computed: {
      ...mapState(["featureXMLForm", "isValidForm"])
    },
    methods: {
      ...mapActions(['toggleFeatureXMLForm']),
      updateFormData(event) {
        const { name, value } = event.target;
        this.updateFormData({ [name]: value });
      },
      submitForm() {
        console.log(this.formData);
        // handle form submission here
      },
      closeForm: function () {
            this.toggleFeatureXMLForm();
            this.$refs.featureOption.reset();
        }
    }
  };
  </script>
  
  <style>
 .title {
    font-weight: bold;
}
  </style>
  