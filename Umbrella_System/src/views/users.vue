<template>
  <v-container fluid class="ml-md-6" style="margin-top: 80px">
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Code</th>
            <th scope="col">Group</th>
            <th scope="col">Access</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>
              <a href="#" @click.prevent="showUserPreview(user, $event)">{{ user.fullName }}</a>
            </td>
            <td>{{ user.username }}</td>
            <td>{{ user.code }}</td>
            <td>{{ user.department }}</td>
            <td>{{ user.accessLevel }}</td>
            <td>{{ user.activeStatus }}</td>
            <td>
              <UserAuth :user="user" @user-updated="fetchUsers" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <transition name="fade">
      <div
        v-if="hoveredUser"
        :style="{ top: cardPosition.top + 'px', left: cardPosition.left + 'px' }"
        class="user-preview-card"
        @mouseover="keepUserPreview"
        @mouseleave="hideUserPreview"
      >
        <div class="card mb-3" style="border-radius: .5rem; width: 700px;">
          <div class="row g-0">
            <div
              class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
            >
              <v-avatar
                color="red"
                class="mb-5 mt-5"
                style="width: 100px; height: 100px"
              >
                <span class="text-h2">{{ hoveredUser.userShortcut }}</span>
              </v-avatar>
              <h5>{{ hoveredUser.department }}</h5>
              <p>{{ hoveredUser.title }}</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6 style="font-weight: bold;">Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-4 mb-3">
                    <h6>Full Name</h6>
                    <p class="text-muted">{{ hoveredUser.fullName }}</p>
                  </div>
                  <div class="col-4 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">{{ hoveredUser.phoneNumber }}</p>
                  </div>
                  <div class="col-4 mb-3">
                    <h6>Address</h6>
                    <p class="text-muted">{{ hoveredUser.address }}</p>
                  </div>
                </div>
                <h6 style="font-weight: bold;">Job Information</h6>
                <hr class="mt-0 mb-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>contract No</h6>
                    <p class="text-muted">{{ hoveredUser.contractNo }}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>contract Type</h6>
                    <p class="text-muted">{{ hoveredUser.contractType }}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </v-container>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import drawerComponent from '../components/drawerComponent.vue';
import tabComponent from '../components/tabComponent.vue';
import UserAuth from './UserAuth.vue';

const users = ref([]);
const hoveredUser = ref(null);
const cardPosition = ref({ top: 0, left: 0 });

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://100.87.98.66:3000/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const showUserPreview = (user, event) => {
  hoveredUser.value = user;
  cardPosition.value = { top: event.clientY + 10, left: event.clientX + 10 }; // Adjust the offset as needed
};

const keepUserPreview = () => {
  // This function exists to prevent the card from hiding when moving the mouse over the card
};

const hideUserPreview = () => {
  hoveredUser.value = null;
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
.user-preview-card {
  position: absolute;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.gradient-custom {
  background: #f6d365;
  background: -webkit-linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));
  background: linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));
}
</style>
