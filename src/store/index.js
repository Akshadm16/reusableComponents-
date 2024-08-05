import { createStore } from 'vuex';

// Define your state, mutations, actions, and getters here
const store = createStore({
state : {
    // initial state
    featureXMLForm: false,
    formData: {
        name: '',
        type: '',
        description: ''
        
    },
    confirmDialog: {
       visible: false,
       header: "description",
       buttons: {
            yes: "name",
            no: "type"
        },
        isconfirmed: false,
        callback: null
    }
    
},

mutations : {
updateFormData(state, payload) {
        state.formData = { ...state.formData, ...payload };
    },
    toggleFeatureXML: function (state) {
        state.featureXMLForm = !state.featureXMLForm;
    },

    // showHideConfirm: function (state, confirmationDialog) {
    //     if (confirmationDialog?.visible) {
    //         state.confirmDialog.visible = confirmationDialog.visible;
    //         // if (confirmationDialog?.header && confirmationDialog?.message) {
    //         //     state.confirmDialog.header = confirmationDialog.header;
    //         //     state.confirmDialog.message = confirmationDialog.message;
    //         // }
    //         if (confirmationDialog.buttons) {
    //             if (confirmationDialog.buttons.yes) {
    //                 state.confirmDialog.buttons.yes = confirmationDialog.buttons.yes;
    //             } else {
    //                 state.confirmDialog.buttons.yes = "name";
    //             }
    //             if (confirmationDialog.buttons.no) {
    //                 state.confirmDialog.buttons.no = confirmationDialog.buttons.no;
    //             } else {
    //                 state.confirmDialog.buttons.no = "type";
    //             }
    //         } else {
    //             state.confirmDialog.buttons.yes = "name";
    //             state.confirmDialog.buttons.no = "type";
    //         }
    //     } else {
    //         state.confirmDialog.visible = false;
    //         state.confirmDialog.header = confirmationDialog.header;
    //          state.confirmDialog.header = "description";
    //         // state.confirmDialog.message = "Do Proceed?";
    //         state.confirmDialog.buttons.yes = "name";
    //         state.confirmDialog.buttons.no = "type";
    //     }

    //     if (confirmationDialog.isconfirmed) {
    //         state.confirmDialog.isconfirmed = confirmationDialog.isconfirmed;
    //         return;
    //     } else {
    //         state.confirmDialog.isconfirmed = false;
    //     }

    //     if (confirmationDialog.callback) {
    //         state.confirmDialog.callback = confirmationDialog.callback;
    //     } else {
    //         state.confirmDialog.callback = null;
    //     }
    // },
    showHideConfirm(state, confirmationDialog) {
        if (confirmationDialog?.visible) {
            state.confirmDialog.visible = confirmationDialog.visible;
            if (confirmationDialog.buttons) {
                state.confirmDialog.buttons.yes = confirmationDialog.buttons.yes;
                state.confirmDialog.buttons.no = confirmationDialog.buttons.no;
            } else {
                state.confirmDialog.buttons.yes = "name";
                state.confirmDialog.buttons.no = "type";
            }
        } else {
            state.confirmDialog.visible = false;
            state.confirmDialog.header = "description";
            state.confirmDialog.buttons.yes = "name";
            state.confirmDialog.buttons.no = "type";
        }

        state.confirmDialog.isconfirmed = !!confirmationDialog?.isconfirmed;
        state.confirmDialog.callback = confirmationDialog?.callback || null;
    }
},

actions : {
    updateFormData({ commit }, payload) {
        commit('updateFormData', payload);
    },
    toggleFeatureXMLForm: function (context) {
        context.commit("toggleFeatureXML");
    },
    showHideConfirm: function (context, confirmationDialog) {
        context.commit("showHideConfirm", confirmationDialog);
    },
},
getters : {
    formData: state => state.formData
}
});

export default store;
