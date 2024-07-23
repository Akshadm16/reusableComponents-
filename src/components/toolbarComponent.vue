<template>
  <div id="ToolbarContainer">
    <div id="Toolbar">
      <v-sheet max-width="400">
        <v-slide-group multiple show-arrows>
          <v-slide-group-item v-for="(button, index) in buttons" :key="index">
            <v-btn icon variant="text" @click="handleButtonClick(button)">
              <v-icon size="small" :color="color" :title="button.title">{{ button.icon }}</v-icon>
            </v-btn>
            <div v-if="index < buttons.length - 1" class="separationBar"></div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";
 
import createFeatureFields from '../static/createFeatureFields.json';
import createOptionFields from '../static/createOptionFields.json';
import toolbarButtons from '../static/toolbarButton.json';
 
export default {
  data: function () {
    return {
      showToolbar: true,
      buttons: toolbarButtons.buttons
    };
  },
  computed: {
    ...mapState(["widgetBaseURL", "optionXMLSelectedList", "confirmDialog", "beforeEditValues", "selectedFeatureXMLRow"])
  },
  methods: {
    ...mapMutations(["featureXMLForm", "optionXMLForm", "updateFormData"]),
 
    onClickCreateFeature(){
      this.OpenForm(createFeatureFields)
    },
    onClickCreateOption(){
      this.OpenForm(createOptionFields)
    },
 
 
    OpenForm: function (FieldData) {
      console.log("Tool bar entry")
   
      this.updateFormData({
        isValidForm: true,
        buttons: {
          OK: "OK",
          Cancel: "Cancel"
        },
        formFields:FieldData
      })
    },
    handleButtonClick(button) {
      if (button.method && this[button.method]) {
        this[button.method](button.fields);
      }
    }
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