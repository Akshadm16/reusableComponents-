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
    }
},

mutations : {
updateFormData(state, payload) {
        state.formData = { ...state.formData, ...payload };
    },
    toggleFeatureXML: function (state) {
        state.featureXMLForm = !state.featureXMLForm;
    },
},

actions : {
    updateFormData({ commit }, payload) {
        commit('updateFormData', payload);
    },
    toggleFeatureXMLForm: function (context) {
        context.commit("toggleFeatureXML");
    },
},
getters : {
    formData: state => state.formData
}
});

export default store;
