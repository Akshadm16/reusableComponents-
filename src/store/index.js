import { createStore } from "vuex";
const store = createStore({
  state: {
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

    featureXMLForm: false,
    formConfig: {
      formFields: {},
    },

    isValidForm: false,
    TableDetails: {
      tableHeaders: require("../static/listTableConfig.json"),
      tableData: require("../static/tableInfo.json"),
      TableName: "Reusable Table",
      selectStrategy: "all",
      searchField: {
        isSearchRequired: true,
        searchLabel: "Search with tag name",
      },
    },

    selectedRows: [],
  },

  mutations: {
    updateFormData(state, payload) {
      //const {formConfig} = state;
      state.formData = { ...state.formData, ...payload };
         },
    toggleFeatureXMLForm: function (state) {
      console.log("Mutation entry");
      state.isValidForm = !state.isValidForm;
    },
    updateTable: function (state, data) {
      state.selectedRows = [];
      console.log("Table Data", data);
      state.TableDetails = data;
    },
  },

  actions: {
    updateFormData({ commit }, payload) {
        commit('updateFormData', payload);
    },
    toggleFeatureXMLForm: function (context) {
        context.commit("toggleFeatureXML");
    },
    showHideConfirm: function (context, confirmationDialog) {
        context.commit("showHideConfirm", confirmationDialog);
    },
    toggleFeatureXMLForm: function (context) {
      context.commit("toggleFeatureXMLForm");
    },
    tableDataFromServer: function (context) {
      const dataFromServer = require("../static/tableInfo2.json"); // { } { TableData : serevrdata}
      const header = require("../static/listTableConfig2.json");
      const tableData = {
        tableData: dataFromServer,
        tableHeaders: header,
        TableName: "Server Table",
        selectStrategy: "all",
        searchField: {
          isSearchRequired: false,
          searchLabel: "",
        },
      };
      context.commit("updateTable", tableData);
    },
  },
});

export default store;
