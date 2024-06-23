<template>
      <v-container fluid class="md-6 mt-15" >

      
        
<drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</v-container>
</template>
<script setup>
import { onMounted } from "vue";
import * as XLSX from 'xlsx';
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";
import axios from 'axios';

onMounted(async () => {
  try {
    const response = await axios.get(`http://100.87.98.66:3000/risks`);

    if (response.data === '') {
      console.log('Code does not exist');
      // Handle risk object as needed (e.g., store it in Vuex, redirect to dashboard)
    } else {
      // Assuming response.data is an array of risk objects
      const risks = response.data.map(risk => ({
        id: risk.id,
        policyNumber: risk.policyNumber,
        insuredName: risk.insuredName,
        inusuranceOrBroker: risk.inusuranceOrBroker,
        quarter: risk.quarter,
        country: risk.country,
        currency: risk.currency,
        limitOfTreaty: risk.limitOfTreaty,
      }));

      localStorage.setItem('risks', JSON.stringify(risks));
      exportToExcel(); // Trigger export immediately after storing data
    }
  } catch (error) {
    console.error('Error during code check:', error);
    // Handle the error as needed
  }
});

const exportToExcel = () => {
  const risks = JSON.parse(localStorage.getItem('risks') || '[]');
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(risks);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'allRisks.xlsx');
  this.$router.push('/facaltative');
};
</script>