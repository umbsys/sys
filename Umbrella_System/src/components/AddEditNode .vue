<template>
    <div class="add-edit-node">
      <input type="text" v-model="nodeName" placeholder="Node Name" />
      <input type="number" v-model="nodeSerial" placeholder="Serial Number" />
      <button @click="saveNode">Save</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddEditNode',
    data() {
      return {
        nodeName: '',
        nodeSerial: ''
      };
    },
    methods: {
      saveNode() {
        // Handle save node functionality
        const newNode = {
          name: this.nodeName,
          serial: parseInt(this.nodeSerial),
          children: []
        };
        this.$emit('save', newNode);
        this.clearFields();
      },
      clearFields() {
        this.nodeName = '';
        this.nodeSerial = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .add-edit-node input {
    margin-right: 10px;
  }
  </style>
  