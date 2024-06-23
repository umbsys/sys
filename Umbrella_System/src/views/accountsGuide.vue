<template>
  <div  class="card ">
  <v-card
    width="100%"
    
  >
    <v-list v-model:opened="open" bg-color="teal-darken-4">
      <v-list-item prepend-icon="mdi-bullet" title="دليل الحسابات" class="account-guide"></v-list-item>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-plus"
            title="اﻷصول 100000000"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-plus"
              title="المتداولة 11000000"
            ></v-list-item>
             </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="الثابتة 12000000"
              prepend-icon="mdi-plus"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
      <v-list-group >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-plus"
            title="التزامات + حقوق ملكية 20000000"
          ></v-list-item>
        </template>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-plus"
              title="المتداولة"
            ></v-list-item>
          </template>


        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="الثابتة"
              prepend-icon="mdi-plus"
            ></v-list-item>
          </template>


        </v-list-group>
      </v-list-group>

      <v-list-group value="Users3">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-plus"
            title="مصروفات 300000000"
          ></v-list-item>
        </template>

        <v-list-group value="Admin3">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-plus"
              title="المتداولة"
            ></v-list-item>
          </template>


        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="الثابتة"
              prepend-icon="mdi-plus"
            ></v-list-item>
          </template>


        </v-list-group>
      </v-list-group>

      <v-list-group value="Users4">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-plus"
            title="إيرادات 400000000"
          ></v-list-item>
        </template>

        <v-list-group value="Admin4">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-plus"
              title="المتداولة"
            ></v-list-item>
          </template>


        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="الثابتة"
              prepend-icon="mdi-plus"
            ></v-list-item>
          </template>


        </v-list-group>
      </v-list-group>

    </v-list>
  </v-card>
</div>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</template>
<script setup>
import { ref, onMounted } from "vue";
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";
const open = ref(['Users']);
const admins = ref([
  ['النقدية', 'mdi-plus'],
  ['جاري شركات التأمين وإعادة التأمين', 'mdi-plus'],
  ['جاري وسطاء وإعادة التأمين', 'mdi-plus'],
]);
const cruds = ref([
  ['أثاث', 'mdi-plus'],
  ['أجهزة حاسوب', 'mdi-plus'],
]);
</script>
<style scoped>
.card {
  direction: rtl !important; 
  margin-top: 100px;
  padding: 15px;
}
.account-guide{
  font-weight: bold !important;

}

</style>