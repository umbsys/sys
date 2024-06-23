<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="800">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-plus"
          text="New"
          variant="outlined"
          color="success"
          v-bind="activatorProps"
          rounded
        >
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="font-weight-bold">
          <v-icon left>mdi-desktop-classic</v-icon>
          Technical Ticket
        </v-card-title>
        <v-card-subtitle>Please provide the details of the problem</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field label="Title*" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-text-field hint="example of helper text only on focus" label="user name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['Technical', 'HR', 'Finance', 'Management', 'IT']" label="Department"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="selectedTags"
                :items="tags"
                label="Tags"
                multiple
                chips
                small-chips
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['Important', 'Normal', 'Less important']" label="Importance" required></v-select>
            </v-col>
            <v-container fluid>
              <v-textarea clear-icon="mdi-close-circle" label="Describe the Problem*" model-value="" required clearable></v-textarea>
            </v-container>
          </v-row>
          <small class="text-caption" style="color: red;">*indicates required field</small>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn> -->
          <v-btn color="success" text="Submit" variant="plain" @click="submitForm"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selectedTags: [],
      tags: [
        'Bug', 'Feature Request', 'Technical Support', 'Account Issue', 'Security Issue', 'Other',
        'High Priority', 'Medium Priority', 'Low Priority',
        'New', 'In Progress', 'Resolved', 'Closed', 
        'Software', 'Hardware', 'Network', 'UI/UX', 'Database'
      ]
    };
  },
  methods: {

  }
};
</script>

<style scoped>
.pa-4 {
  padding: 16px;
}
</style>
