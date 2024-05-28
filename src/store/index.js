import { createStore } from 'vuex';

export const nameRules = [
  v => !!v || 'Name is required',
  v => /^[A-Za-z]*$/.test(v) || 'Only alphabets are allowed'
];

export const descriptionRules = [
  v => !!v || 'Description is required',
  v => !v.includes("~") || 'Description must not contain the character ~'
];
const store = createStore({
state : {
    featureXMLForm: false,
    formValues: {
        name: "",
        description: "",
    },
    formLabel: {
        label: "",
        name: "",
        description: "",
        buttons: {
            yes: "",
            no: ""
        }
    },
    
    isValidForm : false
},

mutations : {
updateFormData(state, payload) {
        console.log("UpadteFromDAta",payload);
        state.formLabel = payload;
        state.isValidForm = payload.isValidForm;
        
    },
    toggleFeatureXMLForm: function (state) {
        console.log("Mutation entry")
        state.isValidForm = !state.isValidForm;
       
    },
},

actions : {
    toggleFeatureXMLForm: function (context) {
        context.commit("toggleFeatureXMLForm");
    },
},
getters : {
    formData: state => state.formData
}
});

export default store;
