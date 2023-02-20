<template>
  <div class="admin">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-4 my-4">
          <h1>ADD Category</h1>
          <div class="adding">
            <div id="newtask">
              <input
                type="text"
                placeholder="Category name"
                v-model="newCategory"
              />
              <button @click="addCategory">Add</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 py-4 my-4">
          <h1>DELETE Category</h1>
          <div id="tasks">
            <div
              class="task"
              v-for="(category, index) in categories"
              :key="index"
            >
              <span>{{ category }}</span>
              <button class="delete" @click="deleteCategory(index)">
                <i class="far fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 class="adde">ADD ITEMS</h2>
      <div class="dot-container">
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
      </div>

      <!-- Vue croppa i za dodavanje items -->

      <div class="col-lg-7 py-4 my-4 mx-auto text-center">
        <div class="card p-3">
          <div class="card-body">
            <div class="form-group">
              <label for="categorySelect">Category</label>
              <select class="form-control" id="categorySelect">
                <option selected>Choose...</option>
                <option v-for="(category, index) in categories" :key="index">
                  {{ category }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="itemNameInput">Item Name</label>
              <input
                type="text"
                class="form-control"
                id="itemNameInput"
                aria-describedby="itemNameHelp"
              />
            </div>

            <div class="form-group">
              <div class="card-header mt-4">
                <h3 class="card-title">Upload Image Of Item</h3>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div
                    class="box mb-3 mx-auto text-center"
                    style="max-width: 100%"
                  >
                    <button class="cho" @click="$refs.fileInput.click()">
                      Choose an image
                    </button>
                    <input
                      type="file"
                      @change="onFileSelected"
                      ref="fileInput"
                      style="display: none"
                    />
                  </div>
                  <div v-if="imageFile" class="text-center mb-3">
                    <img
                      :src="imageFile"
                      alt="Selected Image"
                      style="max-width: 300px"
                    />
                    <button
                      class="clear btn btn-danger mt-3"
                      @click="clearImage"
                    >
                      Undo?
                    </button>
                  </div>
                </div>
                <button
                  class="btn btn-primary w-100"
                  @click="uploadImage"
                  :disabled="!imageFile"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ^^Vue croppa i za dodavanje items^^ -->
      <div class="dot-container2">
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
        <span class="dot">
          <i class="fa fa-circle"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.clear {
  margin-left: 2%;
}
.cho {
  background-color: #b9b9b9;
  border: none;
  height: 100%;
  width: 100%;
}

.cho:hover {
  background-color: #d6d4d4;
  border: none;
}

@media screen and (max-width: 768px) {
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cho {
    margin-bottom: 10px;
  }
  .text-center.mb-3 {
    margin-top: 10px;
  }
}
a {
  text-decoration: none;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 400px;
  background-color: #b9b9b9;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  position: relative;
  overflow: hidden;
}

.box:hover {
  background-color: #d6d4d4;
  color: #ffffff;
  text-decoration: none;
}

.box input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.container-form {
  width: 700px;
}
.container-items {
  display: flex;
}
.form-select {
  max-width: 620px;
}
.input-group {
  margin: 5%;
}
.dot-container2 {
  float: right;
}
.dot-container {
  float: left; /* Or use display: flex; align-items: center; */
}

.dot {
  margin-right: 10px;
}
h1 {
  font-size: 42px;
  margin-bottom: 1em;
  padding-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto; /* centers the container */
}

.admin {
  min-height: calc(100vh - 70px); /* 70px is the height of the footer */
}

.adding {
  width: 10%;
  top: 25%;
  left: 50%;
  background: white;
  border-radius: 10px;
  min-width: 450px;
  position: relative;
  min-height: 100px;
  transform: translate(-50%, -50%);
}

#newtask {
  position: relative;
  padding: 30px 20px;
}
#newtask input {
  width: 75%;
  height: 45px;
  padding: 12px;
  color: #111111;
  font-weight: 500;
  position: relative;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  border: 2px solid #d1d3d4;
}

#newtask input:focus {
  outline: none;
  border-color: #0d75ec;
}
#newtask button {
  position: relative;
  float: right;
  font-weight: 500;
  font-size: 16px;
  background-color: #0d75ec;
  border: none;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  width: 20%;
  height: 45px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
}

#tasks {
  border-radius: 10px;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  padding: 30px 20px;
  margin-top: 10px;
}

.task {
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #939697;
  cursor: pointer;
  background-color: #c5e1e6;
  height: 50px;
  margin-bottom: 8px;
  padding: 5px 10px;
  display: flex;
}
.task span {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
}
.task button {
  background-color: #0a2ea4;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  height: 100%;
  width: 40px;
  border-radius: 5px;
}
</style>

<script>
import categories from "@/views/Categories.vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";
import { ref } from "vue";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

export default {
  components: {
    categories,
  },

  data() {
    return {
      categories: ["Fish", "Meat", "Cheese", "Fruit", "Carbohydrates"],
      newCategory: "",
      imageFile: null,
    };
  },
  methods: {
    addCategory() {
      if (this.newCategory.trim() === "") {
        alert("Please enter a category name.");
        return;
      }

      this.categories.push(this.newCategory);
      this.newCategory = "";
    },
    deleteCategory(index) {
      this.categories.splice(index, 1);
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Please choose an image file.");
        this.imageFile = null;
        this.$refs.fileInput.value = "";
        return;
      }
      this.imageFile = URL.createObjectURL(file);
    },
    async uploadImage() {
      const file = this.$refs.fileInput.files[0];
      const storage = getStorage();
      const storagePath = `images/${file.name}`;
      const storageRefInstance = storageRef(storage, storagePath);
      await uploadBytes(storageRefInstance, file);
      console.log("Image uploaded successfully!");
      this.imageFile = null; // clear the selected image
    },
    clearImage() {
      this.imageFile = null;
      this.$refs.fileInput.value = "";
    },
  },
};
</script>
