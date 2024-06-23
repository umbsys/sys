<template>
    <div class="container rounded bg-white mt-16 mb-5">
      <v-card class="mx-auto mt-15" max-width="100%" height="100%">
        <div class="row mt-7">
          <div class="col-12" style="background-color: whitesmoke">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <v-avatar color="red" class="mb-5" style="width: 150px; height: 150px">
                <span class="text-h2">{{ userShortcut }}</span>
              </v-avatar>
              <span class="font-weight-bold">{{ fullName }}</span>
              <span class="text-black-50">{{ department }}</span>
              <span class="text-black-50">Last Logged in: {{ lastLogin }}</span>
            </div>
          </div>
          <div class="col-12">
            <div class="p-3 py-4">
              <div class="d-flex justify-content-between align-items-center experience">
                <span class="border px-3 p-1 font-weight-bold">
                  <i class="fa fa-plus"></i>&nbsp;Personal Information
                </span>
              </div>
              <br />
  
              <div class="row">
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    v-model="fullName"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Date Of Birth</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Date Of Birth"
                    v-model="dateOfBirth"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Phone Number</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone Number"
                    v-model="phoneNumber"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    v-model="address"
                  />
                </div>
              </div>
  
              <div class="d-flex justify-content-between align-items-center experience mt-5">
                <span class="border px-3 p-1 font-weight-bold">
                  <i class="fa fa-plus"></i>&nbsp;Job Information
                </span>
              </div>
              <br />
  
              <div class="row">
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Contract Type</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contract Type"
                    v-model="contractType"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Department</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Department"
                    v-model="department"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Contract No</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contract No"
                    v-model="contractNo"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Date Of Hiring</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Date Of Hiring"
                    v-model="dateOfHiring"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    v-model="title"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Salary</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Salary"
                    v-model="totalSalary"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <label class="labels lables-color">Vacations Days</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Vacations Days"
                    v-model="vacationDays"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-end">
          <v-btn @click="saveProfile" color="teal-darken-4" class="font-weight-bold m-4">Save</v-btn>
        </div>
      </v-card>
      <drawerComponent :noResize="true" />
      <tabComponent :noResize="true" />
    </div>
  </template>
  
  <script setup>
  import { ref,computed } from "vue";
  import axios from "axios";
  import drawerComponent from "../components/drawerComponent.vue";
  import tabComponent from "../components/tabComponent.vue";
  
  const fullName = ref("");
  const dateOfBirth = ref("");
  const phoneNumber = ref("");
  const address = ref("");
  const contractType = ref("");
  const contractNo = ref("");
  const dateOfHiring = ref("");
  const title = ref("");
  const totalSalary = ref("");
  const vacationDays = ref("");
  const userShortcut = computed(() => fullName.value.charAt(0).toUpperCase());
  const department = ref("");
  const lastLogin = ref("");

  
//   const saveProfile = async () => {
//     const users = {
//       fullName: fullName.value,
//       dateOfBirth: dateOfBirth.value,
//       phoneNumber: phoneNumber.value,
//       address: address.value,
//       department: department.value,
//       contractType: contractType.value,
//       contractNo: contractNo.value,
//       dateOfHiring: new Date(dateOfHiring.value),
//       title: title.value,
//       totalSalary: totalSalary.value,
//       vacationDays: vacationDays.value,
//       // Add other fields if necessary
//     };
  
//     try {
//       console.log("Sending data to API:", users);
//       const response = await axios.post("http://100.87.98.66:3000/users", users);
//       console.log("Profile saved successfully:", response.data);
//       // Handle success (e.g., show a success message, reset form, etc.)
//     } catch (error) {
//       console.error("Error saving profile:", error);
//       // Handle error (e.g., show an error message)
//     }
//   };

  const saveProfile = async () => {
  try {
    const response = await axios.post(
      "http://100.87.98.66:3000/users",
{
      fullName: fullName.value,
      dateOfBirth: dateOfBirth.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
      department: department.value,
      contractType: contractType.value,
      contractNo: contractNo.value,
      dateOfHiring: new Date(dateOfHiring.value),
      title: title.value,
      totalSalary: totalSalary.value,
      vacationDays: vacationDays.value,
      userShortcut: userShortcut.value,
      // Add other fields if necessary
}
    );
  } catch (error) {console.error("Error saving profile:", error);}
};


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
  