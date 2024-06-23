<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-card style="width: 100%; margin-left: 11px; margin-right: 11px">
          <v-toolbar flat color="teal-darken-4" dark>
            <v-toolbar-title>Covers</v-toolbar-title>
            <button
              v-bind="props"
              class="text-non mr-7"
              size ="large"
              color="teal-darken-4"
              variant="flat"
            >
              +
            </button>
          </v-toolbar>
        </v-card>
      </template>
      <v-card color="teal-darken-4">
        <v-card-title>
          <v-autocomplete
            class="mt-3"
            variant="outlined"
            clearable
            label="Covers"
            :items="covers"
            v-model="selectedCover"
          ></v-autocomplete>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Limit From"
                  type="number"
                  variant="outlined"
                  v-model="LimitFrom"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Limit To"
                  type="number"
                  variant="outlined"
                  v-model="LimitTo"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  label="Deductible"
                  hint="example of persistent helper text"
                  variant="outlined"
                  v-model="Deductible"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  label="Amount"
                  type="number"
                  variant="outlined"
                  v-model="Amount"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  label="Sections"
                  type="number"
                  variant="outlined"
                  v-model="Sections"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  type="date"
                  id="From"
                  name="From"
                  variant="outlined"
                  min="1930-01-01"
                  max="2080-12-31"
                  label="From"
                  :disabled="dateFrom"
                  class="w-100"
                  v-model="From"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field
                  type="date"
                  id="To"
                  name="From"
                  variant="outlined"
                  min="1930-01-01"
                  max="2080-12-31"
                  label="From"
                  :disabled="dateFrom"
                  class="w-100"
                  v-model="To"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  clearable
                  label="Notes"
                  variant="outlined"
                  no-resize="true"
                  v-model="Notes"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="white" variant="text" @click="AddConditions">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { usePolicyStore } from "../stores/policy";

const policyStore = usePolicyStore();
const selectedCover = ref("");

//const { checkboxLabel } = defineProps(['checkboxLabel']);
const covers = ref(policyStore.covers);
const allConditions = ref([]);
const dialog = ref(false);
const LimitFrom = ref(0);
const LimitTo = ref(0);
const Deductible = ref(0);
const Amount = ref(0);
const Sections = ref(0);
const From = ref("");
const To = ref("");
const Notes = ref("");

// const conditions = ref();

const AddConditions = () => {
  allConditions.value.push({
    covers: selectedCover.value,
    id: Math.floor(Math.random() * 100000),
    LimitFrom: LimitFrom.value,
    LimitTo: LimitTo.value,
    Deductible: Deductible.value,
    Amount: Amount.value,
    Sections: Sections.value,
    From: From.value,
    To: To.value,
    Notes: Notes.value,
    date: new Date(),
  });
  saveConditionssToLocalStorage();
};
// const loadNotesFromLocalStorage = () => {
//   const storedconditions = localStorage.getItem("conditions");
//   if (storedconditions) {
//     allConditions.value = JSON.parse(storedconditions, (key, value) => {
//       if (key === "date") {
//         return new Date(value); // Parse 'date' property as a Date object
//       }
//       return value;
//     });
//   }
// };
// Method to add the conditions object to coversSelected array
const saveConditionssToLocalStorage = () => {
  localStorage.setItem("conditions", JSON.stringify(allConditions.value));
  (selectedCover.value = ""),
    (LimitFrom.value = 0),
    (LimitTo.value = 0),
    (Deductible.value = 0),
    (Amount.value = 0),
    (Sections.value = 0),
    (From.value = ""),
    (To.value = ""),
    (Notes.value = "");
};
// onMounted(() => {
//   loadNotesFromLocalStorage();
// });
</script>

<style scoped>
.text-h5 {
  white-space: normal; /* Set text wrapping to wrap within the available space */
}
</style>
