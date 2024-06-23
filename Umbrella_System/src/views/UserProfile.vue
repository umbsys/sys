<template>
  <div class="container rounded bg-white mt-16 mb-5">
    <v-card class="mx-auto mt-15" max-width="100%" height="100%">

      <div class="row mt-7">
        <div
            class="col-12"
          style="background-color: whitesmoke"
        >
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <v-avatar
              color="red"
              class="mb-5"
              style="width: 150px; height: 150px"
            >
              <span class="text-h2">{{ users.userShortcut }}</span>
            </v-avatar>
            <span class="font-weight-bold">{{ users.fullName }}</span>
            <span class="text-black-50">{{ users.department }}</span>
            <span class="text-black-50">Last Logged in: {{ users.lastLogin }}</span>
          </div>
        </div>

        <div class="col-12">
          <div class="p-3 py-4">
            <div
              class="d-flex justify-content-between align-items-center experience"
            >
              <span class="border px-3 p-1 font-weight-bold"
                ><i class="fa fa-plus"></i>&nbsp;Personal Information</span
              >
            </div>
            <br />

            <div class="row">
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Full Name</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  v-model="users.fullName"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Date Of Birth</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Date Of Birth"
                  v-model="users.dateOfBirth"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Phone Number</label
                ><input
                  type="number"
                  class="form-control"
                  placeholder="Phone Number"
                  v-model="users.phoneNumber"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Address</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  v-model="users.address"
                />
              </div>
            </div>

            <div
              class="d-flex justify-content-between align-items-center experience mt-5"
            >
              <span class="border px-3 p-1 font-weight-bold"
                ><i class="fa fa-plus"></i>&nbsp;Job Information</span
              >
            </div>
            <br />

            <div class="row">
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Contract Type</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Contract Type"
                  v-model="users.contractType"
                  :disabled="users.department !== 'HR'"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Contract No</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Contract No"
                  v-model="users.contractNo"
                  :disabled="users.department !== 'HR'"
                                  />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Date Of Hiring</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Date Of Hiring"
                  v-model="users.dateOfHiring"
                  :disabled="users.department !== 'HR'"                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Title</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  v-model="users.title"
                  :disabled="users.department !== 'HR'"                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Salary</label
                ><input
                  type="number"
                  class="form-control"
                  placeholder="Salary"
                  v-model="users.totalSalary"
                  :disabled="users.department !== 'HR'"                />
              </div>
              <div class="col-md-12 mb-3">
                <label class="labels lables-color">Vacations Days</label
                ><input
                  type="number"
                  class="form-control"
                  placeholder="Vacations Days"
                  v-model="users.vacationDays"
                  :disabled="users.department !== 'HR'"                />
              </div>
            </div>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-md-12 mb-3">
                <v-text-field
                  v-model="users.code"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  hint="At least 4 characters"
                  label="Code"
                  name="input-10-1"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </div>
             
              <!-- <v-switch
                v-model="users.activeStatus"
                :label="users.activeStatus"
                false-value="Inactive"
                true-value="Active"
                hide-details
                :disabled="users.role !== 'admin'"
              ></v-switch> -->
            </div>
            <!-- <v-combobox
              label="Roles"
              :items="['admin', 'user']"
              :model-value="users.role"
              :disabled="users.role !== 'admin'"
            ></v-combobox> -->
            <!-- Other form inputs go here -->
          </div>
        </div>
      </div>
      <div class="d-flex justify-end">
        <v-btn
          @click="saveProfile"
          color="teal-darken-4"
          class="font-weight-bold m-4"
          >Save</v-btn
        >
      </div>
    </v-card>
    <drawerComponent :noResize="true" />
    <tabComponent :noResize="true" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import usePolicyStore from "../stores/policy";
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";

const policyStore = usePolicyStore();

const users = ref(policyStore.users);

const model = ref("");
const show1 = ref(false);
const password = ref("Password");

const rules = {
  required: (value) => !!value || "Required.",
  min: (v) => v.length != 4 || "Min 4 characters",
};

//   const pic =
const saveProfile = () => {
  // Handle saving profile data
};

onMounted(() => {
  const storedUsers = localStorage.getItem("user");
  if (storedUsers) {
    users.value = JSON.parse(storedUsers);
  }
});
</script>

<style scoped>
.lables-color {
  color: rgba(0, 0, 0, 0.5);
}
.form-control:focus {
  box-shadow: none;
  border-color: #2c832f;
}
</style>
