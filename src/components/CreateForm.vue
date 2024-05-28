<!-- src/components/CreateForm.vue -->

<template>
  <v-dialog v-model="isValidForm"  max-width="500">
        <v-card v-if="isValidForm" id="featureXMLForm">
            <v-card-title class="d-flex justify-space-between align-center">
                <div class="text-medium-emphasis ps-2 title">{{ formLabel.label }}</div>
                <v-btn icon="mdi-close" variant="text" @click="closeForm" color="red" />
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-form ref="featureOption" fast-fail v-model="isValidForm">
                    <label for="name">{{ formLabel.name}}</label>
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
                    <label for="description"> {{ formLabel.description }}</label>
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
  import { nameRules, descriptionRules } from '../store/index'; 
  export default {
    data() {
        return {
          nameRules,
          descriptionRules
        };
    },
    computed: {
      ...mapState(["featureXMLForm", "isValidForm", "formValues", "formLabel"])
    },
    methods: {
      ...mapActions(['toggleFeatureXMLForm']),
      submitForm() {
        if (this.isValidForm) {
        console.log(this.formValues);
        this.closeForm();
        }
      },
      closeForm: function () {
            this.toggleFeatureXMLForm();
        }
    }
  };
  </script>
  
  <style>
 .title {
    font-weight: bold;
}
  </style>
  