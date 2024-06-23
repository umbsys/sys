<template>
    <div class="d-flex justify-space-around">
      <v-menu>
        <template v-slot:activator="{ props }">
            <v-row justify="end" align="center" class="ma-5">
        
        <v-btn v-bind="props">
         <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-row>  
      </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="" class="mb-2"><saveButton/></v-list-item-title>
            <v-list-item-title @click="$router.push('#')">Delete</v-list-item-title>
        </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script>
import { ref, onMounted } from "vue";
import usePolicyStore from '../stores/policy'
import saveButton from '../components/saveButton.vue';

const policyStore = usePolicyStore();
const users = ref(policyStore.users);


onMounted(() => {
  
  const storedUsers = localStorage.getItem('user');
if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }

});






  </script>

<style scoped>
/* Add green hover color */
.v-list-item-title:hover {
  background-color: #1f2628 !important;
  color: white;
}

/* Add pointer cursor */
.v-list-item-title {
  cursor: pointer;
}

</style>