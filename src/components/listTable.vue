<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <!-- <v-card-title class="headline">List of All Change Request</v-card-title> -->
        </v-card>
      </v-col>
    </v-row>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="rows"
      item-key="Name"
      show-select
      class="overflow-y-auto"
      return-object
      @change="onSelectionChange({selected})"
    >
    </v-data-table>
  </template>

<style>
.slider-cell {
  height: 300px; 
}
.headline {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 6px 12px;
}
.overflow-y-auto {
  overflow-y: auto;
  max-height: 800px; 
}
.checkbox-label-container {
    display: flex;
    align-items: center;
  }
  
  /* .v-data-table tbody td {
    max-width: 100px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
} */
.truncate {
  max-width: 100px; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
}
.table-container {
  overflow-x: auto; 
  max-width: 100%; 
}
  
  .checkbox-label-container v-checkbox {
    margin-right: 5px; /* Adjust the margin as needed */
  }
.vertical-divider {
    border-right: 2.5px solid #b3b3b3; 
    margin: 0 2px; 
    height: 4em; 
}
.app-height-collaps {
    height: calc(100vh - 57px);
}
.app-height-expand {
    height: calc(100vh - 121px);
}
table > thead > tr > th {
    font-family: Arial !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    color: rgb(119, 121, 124) !important;
    background-color: rgb(241, 241, 241) !important;
    border-right: 1px solid #b3b3b3;
    padding: 60px;

}
table > tbody > tr > td {
    font-family: Arial !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    color: rgb(119, 121, 124) !important;
    /* background-color: rgba(255, 255, 255) !important; */
    border-right: 1px solid #b3b3b3 !important;
    border-bottom: thin solid rgba(0, 0, 0, 0.12) !important;
    border: none !important;
    padding: 20px;
}
table > tbody > tr:nth-child(odd) > td {
    background-color: #ffffff; 
}

table > tbody > tr:nth-child(even) > td {
    background-color: #f2f2f2; 
}
table > thead > tr > th:first-child {
    border-right: none;
}

.docUsageSelectable {
    font-family: Arial !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    max-width: 300px;
    min-height: 180px;
}
.docUsageSelectable > .v-input__control > .v-input__slot {
    padding: 0 10px !important;
}
.v-list-item--link {
    cursor: pointer;
    user-select: none;
}
.v-menu__content .v-list-item {
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    letter-spacing: normal;
    min-height: 20px !important;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
}
.v-small-dialog__menu-content  {
    max-width: 350px !important;
    min-width: 350px !important;
}
.v-menu__content .v-select-list {
    max-width: 300px !important;
    min-width: 300px !important;
}
.v-list-item--dense, .v-list--dense .v-list-item {
    height: 18px !important;
}
.v-menu__content .v-small-dialog__actions > button:nth-child(1) {
    color: rgb(224, 27, 60) !important;
}
.v-menu__content .v-small-dialog__actions > button:nth-child(2) {
    color: rgb(66, 162, 218) !important;
}
.v-input--selection-controls__ripple:before {
    opacity: 0 !important;
}
</style>

<script>
import { mapState } from "vuex";

export default {
    data () {
      return {
        selected: [],
        headers: [   
          { title: 'Name',align: 'left', key: 'chrName', minWidth: 130,},
          { title: 'Title', align: 'left', key: 'chrTitle',minWidth: 150 },
          { title: 'Description', align: 'left', key: 'chrDescription',minWidth: 180 },
          { title: 'Manufacturing Change Type', align: 'left', key: 'chrMType',minWidth: 230},
          { title: 'Programs', align: 'left', key: 'chrProgram',minWidth: 130 },
          { title: 'Customer change number', align: 'left', key: 'chrCustChangeNb',minWidth: 210 },
          { title: 'Change number', align: 'left', key: 'chrchangeNumber',minWidth: 150 },
          { title: 'Change status', align: 'left', key: 'chrStatus',minWidth: 150 },
          { title: 'Site', align: 'left', key: 'chrSite',minWidth: 130 },
          { title: 'State', align: 'left', key: 'chrState',minWidth: 130 },
          { title: 'Criticality', align: 'left', key: 'chrCriticality',minWidth: 130 },
          { title: 'Change Leader', align: 'left', key: 'chrChangeLeader',minWidth: 150 },
          { title: 'Owner', align: 'left', key: 'chrOwner',minWidth: 130 },

 ],
 rows:[
        {
            "chrName": "CHR-0010834",
            "chrTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "chrProject": null,
            "chrSite": null,
            "chrDescription": "Test_SK",
            "chrCustChangeNb": null,
            "chrNature": null,
            "chrPOE": null,
            "chrMType": null,
            "chrProcess": null,
            "chrRequireSolution": null,
            "chrExpectedGain": null,
            "chrImplementationDate": null,
            "chrChangeLeader": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "chrReasonOfChange": null,
            "chrRootCause": null,
            "chrCriticality": null,
            "chrMandatory": null,
            "chrRequestedByCustomer": null
        },
        {
            "chrName": "CHR-0005629",
            "chrTitle": null,
            "chrProject": null,
            "chrSite": null,
            "chrDescription": "Probing OP 5 - Panel A400M",
            "chrCustChangeNb": null,
            "chrNature": null,
            "chrPOE": null,
            "chrMType": null,
            "chrProcess": null,
            "chrRequireSolution": null,
            "chrExpectedGain": null,
            "chrImplementationDate": null,
            "chrChangeLeader": null,
            "chrReasonOfChange": null,
            "chrRootCause": null,
            "chrCriticality": null,
            "chrMandatory": null,
            "chrRequestedByCustomer": null
        },
        {
            "chrName": "CHR-0010521",
            "chrTitle": null,
            "chrProject": null,
            "chrSite": null,
            "chrDescription": "BAC5730-1 and -2 must have in Reference the BAC5730",
            "chrCustChangeNb": null,
            "chrNature": null,
            "chrPOE": null,
            "chrMType": null,
            "chrProcess": null,
            "chrRequireSolution": null,
            "chrExpectedGain": null,
            "chrImplementationDate": null,
            "chrChangeLeader": null,
            "chrReasonOfChange": null,
            "chrRootCause": null,
            "chrCriticality": null,
            "chrMandatory": null,
            "chrRequestedByCustomer": null
        },
        {
            "chrName": "CHR-0010545",
            "chrTitle": null,
            "chrProject": null,
            "chrSite": null,
            "chrDescription": "Create a new top assy structure where the top assy's would be buy items in order to difference them to the items we produce internally",
            "chrCustChangeNb": null,
            "chrNature": null,
            "chrPOE": null,
            "chrMType": null,
            "chrProcess": null,
            "chrRequireSolution": null,
            "chrExpectedGain": null,
            "chrImplementationDate": null,
            "chrChangeLeader": null,
            "chrReasonOfChange": null,
            "chrRootCause": null,
            "chrCriticality": null,
            "chrMandatory": null,
            "chrRequestedByCustomer": null
        }
 ],
 
      }
    },
  
    computed: {
        ...mapState(["expanded", "componentTable", "selectAll", "usageCategoryStatus", "attributes","tableData"]),
       
       
        selectAll: {
            get () {
                return this.$store.state.selectAll;
            },
            set(isSelected) {
                this.$store.state.selectAll = isSelected;
                for (const row of this.componentTable.rows[this.getContextUsage()]) {
                   row.selected = isSelected;
                }
            }
        },
        getRows: {
            get () {
               return this.componentTable.rows[this.getContextUsage()];
            }
        },
        getRanges: function() {
            const ranges = [];
            this.attributes.range.forEach(range => {
                const value = range.value.trim();
                if (value !== "") {
                    ranges.push(value);
                }
            });
            return ranges;
        }
    },
    
};
</script>
