<!-- src/components/Toolbar.vue -->
<template>
  <div id="ToolbarContainer">
    <div id="Toolbar">
     <v-sheet max-width="400">
      <v-slide-group multiple show-arrows >
        <v-slide-group-item>
            <v-btn icon variant="text" @click="OpenFeatureForm()">
              <v-icon size="small" color="#3b7391" :title="('Create Change Request')">mdi-asterisk</v-icon>
            </v-btn>
          </v-slide-group-item>
          <div class="separationBar"></div>
          <v-slide-group-item>
            <v-btn icon
                   variant="text"
                   @click="OpenFeatureForm()">
                   <v-icon size="small" color="#3b7391" :title="('Create Change Request')">mdi-asterisk</v-icon>
            </v-btn>
          </v-slide-group-item>
          <div class="separationBar"></div>
          <v-slide-group-item>
            <v-btn icon
                   variant="text"
                   @click="flag()">
                   <v-icon size="small" color="#3b7391" :title="('Create Change Request')">mdi-close</v-icon>
            </v-btn>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-btn icon
                   variant="text"
                   @click="demoteButton()">
                   <v-icon size="small" color="#3b7391" :title="('Create Change Request')">mdi-pencil</v-icon>
            </v-btn>
          </v-slide-group-item>
          <div class="separationBar"></div>
          <v-slide-group-item>
            <v-btn icon
                   variant="text"
                   @click="searchContent()">
              <v-icon size="small" color="#3b7391" :title="('Add Content')">mdi-file-plus</v-icon>
            </v-btn>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-btn icon
                   variant="text"
                   @click="removeContent()">
              <v-icon size="small" color="#3b7391" :title="('Remove Content')">mdi-file-remove</v-icon>
            </v-btn>
          </v-slide-group-item> 
      </v-slide-group>  
     </v-sheet >
    </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  export default {

    methods: {
    ...mapActions(["toggleFeatureXMLForm"]),
    OpenFeatureForm: function () {
            this.toggleFeatureXMLForm();
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
  