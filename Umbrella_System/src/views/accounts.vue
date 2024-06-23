<template>
  <v-container fluid class="ml-md-6" style="margin-top: 80px">
    <v-card color="teal-darken-4" class="mx-auto mt-16 mb-5 rtl" max-width="100%" hover  @click="$router.push('/accountsGuide')">
      <v-card-item prepend-icon="mdi-paperclip">
        <v-card-title> دليل الحسابات </v-card-title>
        <v-card-subtitle> دليل شامل للحسابات </v-card-subtitle>
      </v-card-item>
    </v-card>
    <v-card color="teal-darken-4" class="mx-auto rtl mb-5" max-width="100%" hover>
      <v-card-item prepend-icon="mdi-notebook-edit">
        <v-card-title> القيود اليومية </v-card-title>
        <v-card-subtitle> دليل القيود اليومية </v-card-subtitle>
      </v-card-item>
    </v-card>
<moreReceipt/>
  </v-container>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</template>
<script setup>
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";
import moreReceipt from "../components/moreReceipts.vue";
import test from '../components/test.vue'
</script>
<style scoped>
.rtl {
  direction: rtl;
}

.rtl .text-right {
  text-align: right;
}

.rtl .float-right {
  float: right;
}

.rtl .margin-right {
  margin-right: 10px;
}

/* Additional RTL styles */
</style>
