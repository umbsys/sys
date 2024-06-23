<template>
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ props }">
        <v-icon class="mr-10" v-bind="props">mdi-dots-horizontal-circle</v-icon>
      </template>
      <div>
      <v-list>
        <v-list-item v-if="users.department === 'Finance'" class="card">
          <v-list-item-title
            v-if="users.department === 'Finance'"
            @click="$router.push('/Notes')"
            class="mb-2 "
            >          <v-icon color="teal-darken-4" class="ml-2 "
              >mdi-alert-octagon</v-icon
            >المخاطر المالية
  </v-list-item-title
          >

          <v-list-item-title
            v-if="users.department === 'Finance'"
            @click="$router.push('/Notes')"
            class="mb-2 "
            >           <v-icon color="teal-darken-4" class="ml-2"
              >mdi-note</v-icon
            >الملاحظات
 </v-list-item-title
          >

          <v-list-item-title
            v-if="users.department === 'Finance'"
            @click="$router.push('/Todo')"
            class="mb-2 "
          >            <v-icon color="teal-darken-4" class="ml-2 mb-2"
              >mdi-calendar-plus</v-icon
            >
            قائمة المهام
</v-list-item-title
          >

        </v-list-item>

        <v-list-item v-else>
          <v-list-item-title @click="$router.push('/Notes')" class="mb-2"
            ><v-icon color="teal-darken-4" class="mr-2">mdi-note</v-icon>
            Notes</v-list-item-title
          >
          <v-list-item-title @click="$router.push('/Todo')"
            ><v-icon color="teal-darken-4" class="mr-2 mb-2"
              >mdi-calendar-plus</v-icon
            >Todos</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </div>
    </v-bottom-sheet>
</template>
<script setup>
import { ref, onMounted } from "vue";
import usePolicyStore from "../stores/policy";
const sheet = ref(false)
const policyStore = usePolicyStore();
const users = ref(policyStore.users);

onMounted(() => {
  const storedUsers = localStorage.getItem("user");
  if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }
});

// Add a function to handle logout
function logout() {
  // Perform logout actions here
  // For example, clear user session or tokens

  // Navigate to the login page
  router.push({ name: "login" });

  // Disable navigation guard when logged out
  router.beforeEach((to, from, next) => {
    if (to.path === "/") {
      next();
    } else {
      next(false); // Prevent navigation to other routes when logged out
    }
  });
  localStorage.removeItem("user");
}
</script>

<style scoped>


/* Add pointer cursor */
.v-list-item-title {
  cursor:pointer;
}
.card {
  direction: rtl !important; 

}
</style>
