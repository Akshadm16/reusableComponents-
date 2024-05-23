import { createStore } from 'vuex';

// Define your state, mutations, actions, and getters here
const store = createStore({
state : {
    // initial state
    formData: {
        name: '',
        email: '',
        message: ''
    }
},

mutations : {
updateFormData(state, payload) {
        state.formData = { ...state.formData, ...payload };
    }
},

actions : {
    updateFormData({ commit }, payload) {
        commit('updateFormData', payload);
    }
},
getters : {
    formData: state => state.formData
}
});

export default store;
