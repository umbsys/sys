<template>
  <div class="login-background">
    <v-sheet class="login-box" rounded>
      <v-card class="mx-auto px-6 py-8" width="344">
        <p>Please enter the code provided to you by the administrator</p>
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="code"
            :readonly="loading"
            :rules="[required]"
            type="password"
            clearable
            label="Code"
          ></v-text-field>
          <br>

          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="teal-darken-4"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
        <p v-if="error" class="error-message">{{ error }}</p>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: false,
      code: null,
      loading: false,
      error: null
    };
  },
  methods: {
    async onSubmit() {
  if (!this.form) return;

  this.loading = true;

  try {
    const response = await axios.get(`http://100.87.98.66:3000/users/${this.code}`);

    if (response.data=='') {
      console.log('Code does not exist');
      // Handle user object as needed (e.g., store it in Vuex, redirect to dashboard)
    } else {
      const lastLogin = new Date();
      const time = lastLogin.toLocaleTimeString();
      const user = {
        id: response.data.id,
        code: response.data.code,
        username: response.data.username,
        fullName: response.data.fullName,
        department: response.data.department,
        contractType:response.data.contractType,
        contractNo:response.data.contractNo,
        title: response.data.title,
        dateOfBirth:response.data.dateOfBirth,
        dateOfHiring:response.data.dateOfHiring,
        phoneNumber:response.data.phoneNumber,
        totalSalary:response.data.totalSalary,
        vacationDays:response.data.vacationDays,
        address:response.data.address,
        pic: response.data.pic,
        lastLogin: time,
        userShortcut: response.data.userShortcut,
        notes:response.data.notes,
        todos:response.data.todos,
        managerTasks:response.data.managerTasks,
        accessLevel:response.data.accessLevel,
        role: response.data.role,
        activeStatus: response.data.activeStatus,
      };
      console.log('User object:', user);
      localStorage.setItem('user', JSON.stringify(user));
      this.$router.push('/dashboard');
    }
  } catch (error) {
    console.error('Error during code check:', error);
    this.error = 'An unexpected error occurred';
  } finally {
    this.loading = false;
  }
},
required(v) {
  return !!v || 'Field is required and must be 4 digits';
}
}
};
</script>

<style scoped>
.login-background {
  background-image: url('../assets/login.png');
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure the background stays behind the content */
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8); /* Adjust the background color and opacity as needed */
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
