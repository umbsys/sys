<template>
  <v-card>
    <v-toolbar flat color="teal-darken-4" dark>
      <v-toolbar-title>Additional Covers & Exclusions</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h2 class="text-h6 mb-2">Additional Covers</h2>

      <v-chip-group column multiple v-model="selectedAdditionalCovers" @update:modelValue="emitSelectedAdditionalCovers">
        <v-chip
          filter
          variant="tonal"
          color="success"
          v-for="(coverName, index) in policyStore.AdditionalCoverName"
          :key="index"
        >
          {{ coverName }}
        </v-chip>
      </v-chip-group>
  
    </v-card-text>
    <v-card-text>
      <h2 class="text-h6 mb-2">Exclusions</h2>

      <v-chip-group column multiple v-model="selectedExclusions" @update:modelValue="emitSelectedExclusions">
        <v-chip
          filter
          variant="tonal"
          color="error"
          v-for="(Exclusion, index) in policyStore.AdditionalCoverName"
          :key="index"
        >
          {{ Exclusion }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { usePolicyStore } from "../stores/policy";
import { ref, defineEmits, computed } from "vue";
const policyStore = usePolicyStore();

const selectedAdditionalCovers = ref([]);
const selectedExclusions = ref([]);
const emit = defineEmits();

const selectedAdditionalCoversValues = computed(() => {
  return selectedAdditionalCovers.value.map(index => policyStore.AdditionalCoverName[index]);
});

const selectedExclusionsValues = computed(() => {
  return selectedExclusions.value.map(index => policyStore.AdditionalCoverName[index]);
});

const emitSelectedAdditionalCovers = () => {
  // Emit a custom event with the selected covers array
  emit('AdditionalCover-selected', selectedAdditionalCoversValues.value);
};
const emitSelectedExclusions = () => {
  // Emit a custom event with the selected covers array
  emit('Exclusions-selected', selectedExclusionsValues.value);
};
</script>
