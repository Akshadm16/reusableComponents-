<template>
  <v-dialog v-model="isValidForm"  max-width="500">
        <v-card v-if="isValidForm" id="featureXMLForm">
            <v-card-title class="d-flex justify-space-between align-center">
                <div class="text-medium-emphasis ps-2 title">{{ formConfig.formFields.form.title }}</div>
                <v-btn icon="mdi-close" variant="text" @click="closeForm" color="red" />
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-form ref="featureOption" fast-fail v-model="isValidForm">
                 <div v-for="field in formConfig.formFields.form.fields" :key="field.name">
                    <div v-if="field.type==='textfield'">
                      <label for="name">{{ field.label}}</label>
                      <v-text-field  
                        :type="field.type"
                        variant="outlined"
                        class="mb-3"
                        id="featureName"
                        density="compact"
                    />
                    </div>
                    <div v-else-if="field.type==='textarea'">
                      <label for="name">{{ field.label}}</label>
                      <v-textarea  
                        variant="outlined"
                        class="mb-3"
                        id="featureName"
                        density="compact"
                    />
                    </div>
                    <div v-else-if="field.type==='checkbox'" class="d-flex align-center">
                      <v-checkbox
                        :label="field.label"
                        variant="outlined"
                        class="mb-3"
                        id="featureName"
                        density="compact"
                    />
                    </div>
                    <div v-else-if="field.type==='dropdown'">
                      <label for="name">{{ field.label}}</label>
                      <v-select
                        variant="outlined"
                        class="mb-3"
                        id="featureName"
                        density="compact"
                    />
                    </div>
                   </div>
                </v-form>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn color="#42a2da" type="button" :disabled="!isValidForm" @click="submitForm">{{ formConfig.buttons.OK}}</v-btn>
                <v-btn @click="closeForm" color="#e01b3c">{{ formConfig.buttons.Cancel }}</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
      
  </template>

  
  <script>
  import { mapState, mapActions } from 'vuex'; 
  
  
  export default {
   
    computed: {
      ...mapState(["featureXMLForm", "isValidForm", "formValues", "formLabel", "formConfig"])
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
  