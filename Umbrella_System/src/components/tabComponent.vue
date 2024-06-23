<template>
  

    <v-layout>
      <v-container>
        <v-row style="align-items: center; ">
          <v-app-bar color="teal-darken-4">
          <v-col class="my-auto">
        <v-app-bar-title>
          <img
            src="../assets/logo.jpg"
            style="width: 40px; height: 40px; border-radius: 100% ;"
            
          />

        </v-app-bar-title>
      </v-col>

<v-col>
  <userCard />
</v-col>
</v-app-bar>
</v-row>
</v-container>

</v-layout>



  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation
      v-model="value"
      bg-color="teal-darken-4"
      class="d-lg-none d-xxl-none"
    >
      <v-btn v-if="users.department==='Technical' || users.department==='IT'" to="/dashboard">
        <v-icon>mdi-view-dashboard</v-icon>
        <span>Dashboard</span>
      </v-btn>
      <v-btn v-else to="/dashboard">
        <v-icon>mdi-view-dashboard</v-icon>
        <span>لوحة التحكم</span>
      </v-btn>

      <v-btn v-if="users.department==='Technical'" to="/facaltative">
        <v-icon>mdi-hand-coin</v-icon>
        <span>Facaltitave</span>
      </v-btn>

      <v-btn v-else-if="users.department==='IT'" to="/ItSupport">
        <v-icon>mdi-desktop-classic</v-icon>
        <span>IT Center</span>
      </v-btn>
      <v-btn v-else-if="users.department==='Finance'" to="/accounts">
        <v-icon>mdi-bitcoin </v-icon>
        <span>الحسابات</span>
      </v-btn>

      <v-btn v-if="users.department==='Technical'">
        <v-icon>mdi-note-text</v-icon>
        <span>Treaty</span>
      </v-btn>
      <v-btn v-else-if="users.department==='Finance'">
        <v-icon>mdi-wallet</v-icon>
        <span>التقارير المالية
</span>
      </v-btn>
      <v-btn v-if="users.department==='IT'" to="/users">
        <v-icon>mdi-account-group</v-icon>
        <span>Users</span>
      </v-btn>
      <v-btn v-if="users.department==='HR'" to="/employees">
        <v-icon>mdi-account-group</v-icon>
        <span>Employees</span>
      </v-btn>
      <v-btn v-if="users.department==='General Managment'" to="/Announcements">
        <v-icon>mdi-bullhorn-variant-outline</v-icon>
        <span>New Announcement</span>
      </v-btn>
      <v-btn>
        <more/>

      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
<script setup>
import { ref, onMounted } from "vue";
import userCard from "./userCard.vue";
import usePolicyStore from "../stores/policy";
import SearchComponent from "./SearchComponent.vue";
import more from "./more.vue";
const value = ref(1);

const policyStore = usePolicyStore();

const users = ref(policyStore.users);

onMounted(() => {
  const storedUsers = localStorage.getItem("user");
  if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }
});
</script>

<style scoped>
/* @media (min-width: 600px) and (max-width: 1280px) {
  .overflow-visible {
    overflow-x: auto;
  }
} */

/* @media (min-width: 1024px) and (max-width: 1440px) {
  .overflow-visible {
    overflow-x: auto;
  }
}
*/
/* @media (max-width: 600px) {
  .d-sm-none {
    display: none !important;
  }
} */

/* @media (max-width: 600px) {
  .d-sm-none {
    display: none !important;
  }
} */
</style>
