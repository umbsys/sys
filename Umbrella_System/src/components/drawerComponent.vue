<template>

    <v-layout>
      <v-navigation-drawer expand-on-hover rail color="teal-darken-4">
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-list density="compact" nav >
          <!-- <v-list-item
      v-for="(user, index) in users"
      :key="index"
      :prepend-avatar="user.pic"
      :title="user.fullName"
      :subtitle="user.department"
    ></v-list-item> -->

          <v-list-item
            prepend-icon="mdi-view-dashboard"
            to="/dashboard"
            title="Dashboard"
            value="Dashboard"
            class="mt-16"
          ></v-list-item>
          <v-list-item v-if="users.department==='Technical'"
            prepend-icon="mdi-hand-coin"
            to="/facaltative"
            title="Facaltitave"
            value="Facaltitave"
          ></v-list-item>
          <v-list-item v-else-if="users.department==='IT'"
            prepend-icon="mdi-desktop-classic"
            to="/ItSupport"
            title="IT Center"
            value="IT Center"
          ></v-list-item>
          <v-list-item v-else-if="users.department==='Finance'"
            prepend-icon="mdi-bitcoin"
            to="/accounts"
            title="الحسابات"
            value="accounts"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-note-text" v-if="users.department==='Technical'"
            title="Treaty"
            value="Treaty"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-wallet" v-else-if="users.department==='Finance'"
            title="التقارير المالية"
            value="accounts"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-alert-octagon" v-if="users.department==='Finance'"
            title="المخاطر المالية"
            value="accounts"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group" v-if="users.department==='IT'"
            title="Users"
            value="users"
            to="users"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group" v-if="users.department==='HR'"
            title="Employees"
            value="employees"
            to="employees"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-bullhorn-variant-outline" v-if="users.department==='General Managment'"
            title="New Announcement"
            value="Announcements"
            to="Announcements"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-note"
            to="/Notes"
            title="Notes"
            :value="true"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar-plus"
            to="/Todo"
            title="Todo"
            :value="true"
          ></v-list-item>
<v-list-item
  disabled="true"
  prepend-icon="mdi-chat"
  href="http://127.0.0.1:5500/index.html"
  target="_blank"
  title="AI Chat"
  :value="true"
></v-list-item>

          <v-list-item
            prepend-icon="mdi-cog"
            to="/settings"
            title="Settings"
            :value="true"
          ></v-list-item>
        </v-list>
      

      </v-navigation-drawer>

      <v-main>

      </v-main>
    </v-layout>


</template>
<script setup>
import { ref, onMounted } from "vue";
import usePolicyStore from "../stores/policy";
import userCard from './userCard.vue'
import mohaned from "../assets/avatar.png";



const img = mohaned;
const isVisible = ref(true);
const policyStore = usePolicyStore();
const users = ref(policyStore.users);

onMounted(() => {
  const storedUsers = localStorage.getItem("user");
  if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }
});

// const getUsers = () => {
//   const storedUsers = localStorage.getItem("user");
//   return storedUsers ? JSON.parse(storedUsers) : [];
// }

// onMounted(() => {
//   users.value = getUsers();
//   console.log(users)
// });




</script>
