import { createStore } from 'vuex';
const store = createStore({
state : {
    featureXMLForm: false,
    formConfig:{
        formFields:{}
    },
    
    isValidForm : false
},

mutations : {
updateFormData(state, payload) {
    //const {formConfig} = state;
        console.log("UpadteFromDAta",payload);
        state.formConfig = payload ;
        
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
