<template>
  <div id="ToolbarContainer">
    <div id="Toolbar">
      <v-sheet max-width="400">
        <v-slide-group multiple show-arrows>
          <ToolbarButton :icon="'mdi-asterisk'" :title="'Create Change Request'" :action="OpenForm" />
          <div class="separationBar"></div>
          <ToolbarButton :icon="'mdi-plus'" :title="'Create Change Request'" :action="openOptionForm" />
          <div class="separationBar"></div>
          <ToolbarButton :icon="'mdi-close'" :title="'Create Change Request'" :action="flag" />
          <ToolbarButton :icon="'mdi-pencil'" :title="'Create Change Request'" :action="demoteButton" />
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ToolbarButton from './ToolbarButton.vue'
export default {
  components: {
    ToolbarButton,
  },
  data: function () {
    return {
      showToolbar: true
    };
  },
  computed: {
    ...mapState(["widgetBaseURL", "optionXMLSelectedList", "confirmDialog", "beforeEditValues", "selectedFeatureXMLRow"])
  },
  methods: {
    ...mapMutations(["featureXMLForm", "optionXMLForm", "updateFormData"]),
    OpenForm: function () {
      console.log("Tool bar entry")
    
      this.updateFormData({
        isValidForm: true,
        label: "Create Feature XML",
        name: "Email",
        description: "Description",
        buttons: {
          yes: "OK",
          no: "Cancel"
        }
      })
    },
    openOptionForm: function () {
      console.log("Tool bar entry")
    
      this.updateFormData({
        isValidForm: true,
        label: "Create Option XML",
        name: "Name",
        description: "Description",
        buttons: {
          yes: "Submit",
          no: "Cancel"
        }
      })
    },
  }
};

</script>

<style>
#ToolbarContainer {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}

#Toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 3px;
  left: 25%;
  background-color: #e2e4e3;
  z-index: 4;
  border-radius: 2px 2px 0 0;
  box-shadow: 0 0 4px rgba(61, 61, 61, 0.5);
  border-top: 1px solid #b4b6ba;
  border-left: 1px solid #b4b6ba;
  border-right: 1px solid #b4b6ba;
  pointer-events: all;
}

.Toolbar1 {
  background-color: #e2e4e3;
}

.separationBar {
  display: inline-block;
  background-color: #bdbdbd;
  width: 2px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-right: 1px solid white;
}

.hideProperties {
  -moz-filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: .5;
  opacity: .4;
}
</style>