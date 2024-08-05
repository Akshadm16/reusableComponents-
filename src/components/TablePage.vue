<template>
  <v-card-title>
    <V-row class="d-flex flex-row align-center justify-space-between">
      <v-col sm="6">
        <div class="mr-5">
          {{ TableDetails.TableName }}
        </div>
      </v-col>
      <v-col sm="6">
        <v-text-field
          v-if="TableDetails.searchField.isSearchRequired"
          v-model="search"
          :label="TableDetails.searchField.searchLabel"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
          density="compact"
        />
      </v-col>
    </V-row>
  </v-card-title>
  <v-data-table
    v-model="selectedRows"
    :headers="TableDetails.tableHeaders.columns"
    :items="TableDetails.tableData.TableData"
    item-value="name"
    show-select
    :select-strategy="TableDetails.selectStrategy"
    :search="search"
    return-object
  ></v-data-table>
</template>

<style scoped>
.v-data-table {
  height: 93%;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selected: [],
      search: "",
    };
  },
  computed: {
    ...mapState(["TableDetails", "selectedRows", "selecte"]),

    selectedRows: {
      get() {
        return this.$store.state.selectedRows;
      },
      set(isSelected) {
        this.$store.state.selectedRows = isSelected;
        console.log("state", this.selectedRows);
        console.log(isSelected);
      },
    },
  },
};
</script>
