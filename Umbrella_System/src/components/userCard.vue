<template>

    <v-row style="align-items: center;">
      <v-col cols="6">
        <div class="d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-none align-center" style="justify-content: flex-end;">
          <v-btn>
            <v-badge color="error" dot>
              <v-icon @click="$router.push('/Announcements')" size="x-large">mdi-bullhorn-variant-outline</v-icon>

            </v-badge>
            <v-tooltip
        activator="parent"
        location="bottom"
        
      >Announcements</v-tooltip>
          </v-btn>

          <v-btn>
            <v-badge color="error" dot>
              <v-icon size="x-large">mdi-bell</v-icon>
            </v-badge>
            <v-tooltip
        activator="parent"
        location="bottom"
      >Notifications</v-tooltip>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="6">
        <v-row justify="end">
          <v-menu offset-y>
            <template template v-slot:activator="{ props }">
              <h6 v-on="on" v-bind="props" style="font-weight: bold" class="d-flex align-center username">
               {{ users.username }}
                <v-icon>mdi-menu-down</v-icon>
              </h6>
            </template>

            <v-list>
              <v-list-item :title="users.title" :subtitle="'Last Login: ' + users.lastLogin">
                <template v-slot:prepend>
                  <v-avatar color="red">
                    <span class="text-h5">{{ users.userShortcut }}</span>
                  </v-avatar>
                </template>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item @click="$router.push('/profile')">
                <v-list-item-title class="mb-2">
                  <v-icon class="mr-2">mdi-account</v-icon>Profile
                </v-list-item-title>
              </v-list-item>

              <v-list-item @click="$router.push('/settings')">
                <v-list-item-title>
                  <v-icon class="mr-2 mb-2">mdi-cogs</v-icon>Settings
                </v-list-item-title>
              </v-list-item>

              <v-list-item v-if="users.department!=='IT'" @click="$router.push('/ItSupport')">
                <v-list-item-title>
                  <v-icon class="mr-2 mb-2">mdi-face-agent</v-icon>IT Support
                </v-list-item-title>
              </v-list-item>

              <v-list-item
              @click="logout"
    >
                <v-list-item-title>
                  <v-icon class="mr-2">mdi-logout</v-icon>Logout
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-row>
      </v-col>
    </v-row>

</template>
<script setup>
import { ref, onMounted } from "vue";
import usePolicyStore from "../stores/policy";
import { useRouter } from "vue-router";
const policyStore = usePolicyStore();
const router = useRouter();
const users = ref(policyStore.users);

onMounted(() => {
  const storedUsers = localStorage.getItem("user");
  if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }
});

function logout() {
  // Perform logout actions here
  // For example, clear user session or tokens
  
 
  router.push({ name: 'Landing' });
  // Disable navigation guard when logged out
  router.before((to, from, next) => {
    if (to.path === '/') {
      next();
    } else {
      next(false); // Prevent navigation to other routes when logged out
    }
  });

  localStorage.removeItem("user")
   // Reload the page to reset any client-side state
  
}
</script>

<style scoped>


/* Add pointer cursor */
.v-list-item-title {
  cursor: pointer;
}

.username {
  cursor: pointer;
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
