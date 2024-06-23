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
              @click="dialog = true"
            >mdi-plus</v-icon>
          </div>
        </template>
  
        <v-card prepend-icon="mdi-account" title="User Authentication">
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="username"
                  label="username*"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" sm="6" class="d-flex align-center">
                <v-text-field
                  v-model="code"
                  hint="generate complex code"
                  label="code*"
                  persistent-hint
                  required
                ></v-text-field>
                <a href="#" @click.prevent="generateCode" class="ml-2">Generate</a>
              </v-col>
  
              <v-col cols="12" sm="6">
                <v-select
                  v-model="activeStatus"
                  :items="['active', 'inactive']"
                  label="status*"
                  required
                ></v-select>
              </v-col>
  
              <v-col cols="12" sm="6">
                <v-select
                  v-model="accessLevel"
                  :items="['admin', 'user']"
                  label="access"
                  auto-select-first
                  
                ></v-select>
              </v-col>
            </v-row>
  
            <small class="text-caption text-danger">*indicates required field</small>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn text variant="plain" @click="dialog = false">Close</v-btn>
  
            <v-btn color="primary" text variant="tonal" @click="updateUserInfo">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
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
        username: this.user.username,
        code: this.user.code,
        accessLevel: this.user.accessLevel,
        activeStatus: this.user.activeStatus,
      };
    },
    methods: {
      generateCode() {
  // Generate a random number between 0 and 99999999 (8 digits)
  let randomNumber = Math.floor(Math.random() * 100000000);
  // Pad the number with leading zeros if necessary to ensure it has 8 digits
  this.code = randomNumber.toString().padStart(8, '0');
},

      async updateUserInfo() {
        try {
          await axios.patch(`http://100.87.98.66:3000/users/${this.user.id}`, {
            username: this.username,
            code: this.code,
            accessLevel: this.accessLevel,
            activeStatus: this.activeStatus,
          });
          this.$emit('user-updated');
          this.dialog = false;
        } catch (error) {
          console.error('Error updating user:', error);
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
  