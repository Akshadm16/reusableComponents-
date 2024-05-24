import { createStore } from 'vuex';

// Define your state, mutations, actions, and getters here
const store = createStore({
state : {
    // initial state
    featureXMLForm: false,
    formData: {
        name: '',
        email: '',
        message: ''
    },
    isValidForm : false
},

mutations : {
updateFormData(state, payload) {
        state.formData = { ...state.formData, ...payload };
    },
    toggleFeatureXMLForm: function (state) {
        console.log("Mutation entry")
        state.isValidForm = !state.isValidForm;
    },
},

actions : {
    updateFormData({ commit }, payload) {
        commit('updateFormData', payload);
    },
    toggleFeatureXMLForm: function (context) {
        context.commit("toggleFeatureXMLForm");
    },
},
getters : {
    formData: state => state.formData
}
});

export default store;
