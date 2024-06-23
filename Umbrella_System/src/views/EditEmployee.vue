<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <div>
          <v-icon
            v-bind="activatorProps"
            block
            class="mr-5"
            style="cursor: pointer"
            >mdi-pencil</v-icon
          >
        </div>
      </template>

      <v-card prepend-icon="mdi-account" title="Edit Employee">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" class="text-center">
              <v-avatar
                color="red"
                class="mb-5"
                style="width: 150px; height: 150px"
              >
                <span class="text-h2">{{ userShortcut }}</span>
              </v-avatar>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="fullName"
                label="Full Name*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="d-flex align-center">
              <v-text-field
                type="number"
                v-model="phoneNumber"
                label="Phone Number*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="dateOfBirth"
                label="Date Of Birth*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="d-flex align-center">
              <v-text-field
                v-model="address"
                label="address"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="department"
                :items="[
                  'General Management',
                  'HR',
                  'Technical',
                  'IT',
                  'Finance',
                ]"
                label="Department*"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="fullName"
                label="Full Name*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="d-flex align-center">
              <v-text-field
                type="number"
                v-model="phoneNumber"
                label="Phone Number*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-danger"
            >*indicates required field</small
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text variant="plain" @click="dialog = false">Close</v-btn>

          <v-btn color="primary" text variant="tonal" @click="updateUserInfo"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    updateUser: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      fullName: this.user.fullName,
      userShortcut: this.userShortcut,
      department: this.department,
      title: this.title,
      phoneNumber: this.user.phoneNumber,
      dateOfBirth: this.user.dateOfBirth,
      address: this.user.address,
      contractNo: this.user.contractNo,
      contractType: this.user.contractType,
      dateOfHiring: this.user.dateOfHiring,
      totalSalary: this.user.totalSalary,
      vacationDays: this.user.vacationDays,
      signature: this.user.signature,
    };
  },
  methods: {
    generateCode() {
      // Generate a random number between 0 and 99999999 (8 digits)
      let randomNumber = Math.floor(Math.random() * 100000000);
      // Pad the number with leading zeros if necessary to ensure it has 8 digits
      this.code = randomNumber.toString().padStart(8, "0");
    },

    async updateUserInfo() {
      try {
        await axios.patch(`http://100.87.98.66:3000/users/${this.user.id}`, {
          fullName: this.user.fullName,
          userShortcut: this.userShortcut,
          department: this.department,
          title: this.title,
          phoneNumber: this.user.phoneNumber,
          dateOfBirth: this.user.dateOfBirth,
          address: this.user.address,
          contractNo: this.user.contractNo,
          contractType: this.user.contractType,
          dateOfHiring: this.user.dateOfHiring,
          totalSalary: this.user.totalSalary,
          vacationDays: this.user.vacationDays,
          signature: this.user.signature,
        });
        this.$emit("user-updated");
        this.dialog = false;
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.ml-2 {
  margin-left: 8px;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
