<template>
    
  <v-bottom-sheet v-model="sheet">
  
      <template v-slot:activator="{ props }">
        
        <v-card color="teal-darken-4" v-bind="props" class="mx-auto mb-5 card" max-width="auto%" hover>
          <v-card-item
            prepend-icon="mdi-receipt-text"
            append-icon="mdi-menu-down"
          >
          
            <v-card-title> ايصالات </v-card-title>
            <v-card-subtitle>دليل الايصالات</v-card-subtitle>
          </v-card-item>
        </v-card>
      
      </template>
  
      <div class="card">
    <v-list>
 
        <v-list-subheader>إيصالات</v-list-subheader>
  
        <v-list-item
        prepend-avatar="https://p1.hiclipart.com/preview/514/115/719/cash-icon-money-payment-finance-icon-design-bank-tax-debit-card-png-clipart.jpg"
          title="دفع"
          @click="sheet = false"
        ></v-list-item>
        <v-list-item
        prepend-avatar="https://static.vecteezy.com/system/resources/previews/022/317/155/original/receipt-icon-3d-png.png"
          title="قبض"
          @click="sheet = false"
        ></v-list-item>

      </v-list>

    </div>
    </v-bottom-sheet>

  </template>
  <script>
    export default {
      data: () => ({
        sheet: false,

      }),
    }
  </script>
  <style scoped>

  .card {
  direction: rtl !important; 

}
</style>