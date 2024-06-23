<template>
    <div class="confirmation-dialog">
      <p>Are you sure you want to delete this node?</p>
      <button @click="confirmDelete">Yes</button>
      <button @click="$emit('cancel')">No</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConfirmationDialog',
    methods: {
      confirmDelete() {
        this.$emit('delete');
      }
    }
  };
  </script>
  
  <style scoped>
  .confirmation-dialog {
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  