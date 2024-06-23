<script setup>
import { ref, onMounted } from "vue";
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";



const showModal = ref(false);
const newNote = ref("");
const isNewNote = ref(true);
const notes = ref([]);
const selectedNote = ref(null);

function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 100000),
    text: newNote.value,
    color: getRandomColor(),
    date: new Date(),
  });
  closeModal();
  saveNotesToLocalStorage();
};

const saveNotesToLocalStorage = () => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

const loadNotesFromLocalStorage = () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes.value = JSON.parse(storedNotes, (key, value) => {
      if (key === "date") {
        return new Date(value); // Parse 'date' property as a Date object
      }
      return value;
    });
  }
};

const openModal = (note) => {
  selectedNote.value = note;
  newNote.value = note.text;
  isNewNote.value = false;
  showModal.value = true;
};

const updateNote = () => {
  // Implement the update logic here
  if (selectedNote.value) {
    selectedNote.value.text = newNote.value;
    selectedNote.value.date = new Date();
  }
  saveNotesToLocalStorage();
  closeModal();
};

const deleteNote = () => {
  // Implement the delete logic here
  if (selectedNote.value) {
    const index = notes.value.indexOf(selectedNote.value);
    if (index !== -1) {
      notes.value.splice(index, 1);
    }
  }
  saveNotesToLocalStorage();
  closeModal();
};

const closeModal = () => {
  showModal.value = false;
  selectedNote.value = null;
  newNote.value = "";
  isNewNote.value = true;
};

onMounted(() => {
  loadNotesFromLocalStorage();
});
</script>


<template>
  <v-container fluid class="ml-md-6 mt-10">
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p @click="closeModal">x</p>
        <textarea v-model="newNote" />
        <v-btn v-if="isNewNote" color="teal-darken-4" @click="addNote">Add Note</v-btn>
        <button v-else @click="updateNote" style="background-color: green;">Update Note</button>
        <button v-if="!isNewNote" @click="deleteNote" style="background-color: red;">Delete Note</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1><v-icon>mdi-note</v-icon>Notes</h1>
        <v-btn color="teal-darken-4" class="plusButton" @click="showModal = true; isNewNote = true">+</v-btn>
      </header>
      <hr>
      <div class="cards-container">
        <div
          v-for="note in notes"
          class="card"
          :style="{ backgroundColor: note.color }"
          @click="openModal(note)"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
    <drawerComponent :noResize="true" />
    <tabComponent :noResize="true" />
  </v-container>
</template>


<style scoped>
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;

    color: teal-darken-4;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .main-text {
    line-height: 1.25;
    font-size: 17.5px;
    font-weight: bold;
  }

  .date {
    font-size: 12.5px;
    margin-top: auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .plusButton {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;

    border-radius: 1000px;
    color: white;
    font-size: 20px;
  }
  .cards-container {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  main {
    height: 100vh;
    width: 100vw;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: #1f2628;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;

  }

  .modal p {
    margin-left: auto;
    font-size: 20px;
    z-index: 100000;
    cursor: pointer;
  }

  textarea {
    border: 1px solid #1f2628;
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }

</style>

