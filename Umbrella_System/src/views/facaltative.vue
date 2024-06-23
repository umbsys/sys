<template>
  <v-container fluid class="ml-md-6" style="margin-top: 80px">
    <v-card>
      <v-tabs
        v-model="tab"
        color="teal-darken-4"
        align-tabs="center"
        class="mt-10"
      >
        <v-tab>Direct</v-tab>
        <v-tab>Fac Business</v-tab>
      </v-tabs>
      <!-- <moreFac/> -->
      <div class="d-flex justify-space-around">
        <v-row justify="end" class="ma-7">
          <v-icon @click="fetchRisksAndExportToExcel" color="teal-darken-4" class="mr-5 table">mdi-table</v-icon>
          <v-icon @click="$router.push('/NewRisk')"  color="teal-darken-4" class="plus">mdi-plus</v-icon>
        </v-row>
      </div>

      <v-window v-model="tab" style="margin-top: 10px">
        <v-window-item>
          <v-container fluid>
            <v-row>
              <v-col v-for="i in response" :key="i.id" cols="12" md="4" sm="4">
                <v-card class="mx-auto" max-width="344" hover>
                  <v-card-item>
                    <v-card-title> {{ i.inusuranceOrBroker }}</v-card-title>
                    <v-card-subtitle>{{ i.umbrellaReference }}</v-card-subtitle>
                    <v-card-text>
                      * TSI: {{ (i.TSIPolicyCurrency).toFixed(2) }} {{ i.currency }}
                      <br>
                      * Prem: {{ (i.premiumPolicyCurrency).toFixed(2) }}
                      {{ i.currency }}
                      <br>
                      * TSI Accep: {{ (i.TSIAcceptancePolicyCurrency).toFixed(2) }} {{ i.currency }}
                      <br>
                      * Prem Accep: {{ (i.premiumAcceptancePolicyCurrency).toFixed(2) }} {{ i.currency }}
                      <br>
                      * Status: {{ i.confirmation }}
                      <br>
                      * closed: {{ i.closing }}
                     </v-card-text>
                  </v-card-item>
                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-btn 
              :to="{
                name: 'PreviewPrint',
                query: {
                  Ref: i.umbrellaReference,
                  policyUSDrate: i.rateOfPolicyCurrencyVsUSD,
                  policyLYDrate: i.rateOfLYDVsUSD,
                  formattedTotalSumInsured: i.TSIPolicyCurrency,
                  formattedPremium: i.premiumPolicyCurrency,
                  selectedCurrency: i.currency,
                  formattedacceptanceSumInsured: i.TSIAcceptancePolicyCurrency,
                  formattedacceptancePremium: i.premiumAcceptancePolicyCurrency,
                  formattedUSDacceptanceSumInsured:
                    i.TSIAcceptanceUSD,
                  formattedUSDacceptancepremium: i.premiumAcceptanceUSD,
                  formattedLYDacceptanceSumInsured:
                  i.TSIAcceptanceLYD,
                  formattedLYDacceptancepremium: i.premiumAcceptanceLYD,
                  ourShare: i.ourShare,
                  formattedLYDbrokerAmount: i.brokerAmountLYD,
                  formattedUSDbrokerAmount: i.brokerAmountUSD,
                  brokerRate: i.brokerCommission,
                  formattedUSDFACPremium: i.facUmbrellaLYD,
                  insuedName: i.insuredName,
                  reinsurance: i.inusuranceOrBroker,
                  selectedPolicyType:i.policyType,
                  From: i.dateFrom,
                  ToDate: dateTo,
                  selectedCountry: i.country,
                  policyNumber: i.policyNumber,
                  ppw: i.ppw,
                  pml: i.pml,
                  quarter: i.quarter,
                  notes: i.notes,
                  selectedChips: selectedChips,
                  isSigntured: i.isSigntured,
                  isApprove: i.isApprove
                  }} "
                  color="teal-darken-4" variant="text" class="d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-none"
>
                      RI/S
                      <v-tooltip activator="parent"
        location="bottom">Reinsurance Slip</v-tooltip>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn><v-icon>mdi-note</v-icon><v-tooltip activator="parent"
        location="bottom">Debit Note</v-tooltip></v-btn>
                    <v-btn> <editButton /><v-tooltip activator="parent"
        location="bottom">Update</v-tooltip></v-btn>
                    <v-btn><deleteButton /><v-tooltip activator="parent"
        location="bottom">Delete</v-tooltip></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as XLSX from 'xlsx';

import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";
import editButton from "../components/editButton.vue";
import deleteButton from "../components/deleteButton.vue";

import axios from "axios";

const tab = ref(null);
const show = ref(false);
const response = ref([]); // Define response variable

const DataToApi = async () => {
  try {
    const apiResponse = await axios.get("http://100.87.98.66:3000/risks");
    response.value = apiResponse.data; // Assuming API response is an array
  } catch (error) {
    console.error("Error fetching data from API", error);
  }
};

onMounted(() => {
  DataToApi();
});

const fetchRisksAndExportToExcel = async () => {
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
};

const exportToExcel = () => {
  const risks = JSON.parse(localStorage.getItem('risks') || '[]');
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(risks);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'allRisks.xlsx');
};
</script>

<style scoped>
.plus{
  cursor: pointer;
  font-size: x-large;
}
.table{
  cursor: pointer;
  font-size: x-large;
}
@media (min-width: 600px) and (max-width: 1280px) {
  .overflow-visible {
    overflow-x: auto;
  }
}

@media (max-width: 600px) {
  .d-sm-none {
    display: none !important;
  }
}
</style>
