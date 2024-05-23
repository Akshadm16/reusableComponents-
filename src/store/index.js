import { createStore } from 'vuex';

// Define your state, mutations, actions, and getters here
const state = {
    // initial state
    formData: {
        name: '',
        email: '',
        message: ''
    }
};

const mutations = {
    UPDATE_FORM_DATA(state, payload) {
        state.formData = { ...state.formData, ...payload };
    }
};

const actions = {
    updateFormData({ commit }, payload) {
        commit('UPDATE_FORM_DATA', payload);
    }
};

const getters = {
    formData: state => state.formData
};

// Create the Vuex store instance
const store = createStore({
    state,
    mutations,
    actions,
    getters
});

export default store;
