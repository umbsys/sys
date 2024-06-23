<template>
  <div class="tree">
    <div class="node" v-for="(node, index) in tree" :key="index">
      <span>{{ node.name }}</span>
      <button @click="editNode(node)">Edit</button>
      <button @click="removeNode(index)">Remove</button>
      <input type="text" v-model="node.id" placeholder="ID">
      <button @click="addChild(index)">Add Child</button>
      <div class="children">
        <nested-tree :tree="node.children" v-if="node.children" />
      </div>
    </div>
    <node-modal :show="modalVisible" :action="modalAction" :node="selectedNode" @close="closeModal" @save="saveModalNode" />
  </div>
</template>

<script>
import NodeModal from './NodeModal.vue';

export default {
  name: 'NestedTree',
  components: {
    NodeModal
  },
  props: {
    tree: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalVisible: false,
      modalAction: 'Add',
      selectedNode: null
    };
  },
  methods: {
    editNode(node) {
      this.selectedNode = node;
      this.modalAction = 'Edit';
      this.modalVisible = true;
    },
    removeNode(index) {
      this.tree.splice(index, 1);
    },
    addChild(index) {
      const newNode = {
        name: 'New Node',
        id: '',
        children: []
      };
      this.tree[index].children.push(newNode);
    },
    closeModal() {
      this.modalVisible = false;
    },
    saveModalNode(newNode) {
      if (this.modalAction === 'Add') {
        this.tree.push(newNode);
      } else if (this.modalAction === 'Edit' && this.selectedNode) {
        Object.assign(this.selectedNode, newNode);
      }
    }
  }
};
</script>

<style scoped>
.tree {
  margin-left: 20px;
}
.node {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.node span {
  margin-right: 10px;
}
.children {
  margin-left: 20px;
}
.btn-container {
  display: flex;
  align-items: center;
}
.btn-container button {
  margin-right: 5px;
}
</style>
