<template>
  <div class="lists">
    <button
      type="button"
      class="gumbic btn-outline-info"
      data-bs-toggle="collapse"
      data-bs-target="#createList"
      aria-expanded="false"
      aria-controls="createList"
    >
      CREATE A NEW LIST
    </button>

    <div class="collapse mt-3" id="createList">
      <div class="difcard card card-body mx-auto">
        <div class="mb-3">
          <label for="listNameInput" class="form-label">List Name:</label>
          <input type="text" class="form-control" id="listNameInput" />
        </div>
        <button type="button" class="btn btn-primary" @click="createList">
          Create List
        </button>
      </div>
    </div>

    <p class="test vh-70 mt-5 mb-5 justify-content-center">
      <button
        v-for="(list, index) in lists"
        :key="index"
        class="btn btn-primary me-2"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#list-' + index"
        aria-expanded="false"
        :aria-controls="'list-' + index"
      >
        {{ list.name }}
      </button>
    </p>

    <div class="container">
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center"
      >
        <div
          v-for="(list, index) in lists"
          :key="index"
          class="collapse mt-0"
          :id="'list-' + index"
        >
          <div class="listacards mx-auto" style="width: 18rem">
            <section class="vh-70">
              <div
                class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 d-flex justify-content-center align-items-center"
              >
                <div class="col col-xl-12">
                  <div class="listacard card">
                    <div class="card-body p-5">
                      <h6 class="mb-3">{{ list.name }}</h6>

                      <ul class="list-group mb-3">
                        <li
                          v-for="(item, itemIndex) in list.items"
                          :key="itemIndex"
                          class="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex align-items-center">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              v-model="item.done"
                              aria-label="..."
                            />
                            {{ item.text }}
                          </div>
                          <a
                            href="#!"
                            @click="removeItem(list, itemIndex)"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                          >
                            <i class="fa fa-times text-primary"></i>
                          </a>
                        </li>
                      </ul>

                      <div>
                        <form class="mt-0" @submit.prevent="addItem(list)">
                          <button type="submit" class="doda btn btn-primary">
                            Add Item
                          </button>
                          <button
                            type="button"
                            class="del btn btn-danger ms-2"
                            @click="deleteList(list)"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="other mt-5">OTHER LISTS:</h2>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3>List 1:</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  v-for="(listItem, index) in list1"
                  :key="index"
                >
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="list1-checkbox-{{index}}"
                    />
                    <label
                      class="form-check-label"
                      for="list1-checkbox-{{index}}"
                      >{{ listItem }}</label
                    >
                    <button
                      class="btn btn-outline-danger btn-sm float-end"
                      type="button"
                      @click="deleteListItem('list1', index)"
                    >
                      X
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 mt-3">
            <div class="card">
              <div class="card-header">
                <h3>List 2:</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  v-for="(listItem, index) in list2"
                  :key="index"
                >
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="list2-checkbox-{{index}}"
                    />
                    <label
                      class="form-check-label"
                      for="list2-checkbox-{{index}}"
                      >{{ listItem }}</label
                    >
                    <button
                      class="btn btn-outline-danger btn-sm float-end"
                      type="button"
                      @click="deleteListItem('list2', index)"
                    >
                      X
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="malo card mx-auto mt-5">
      <div class="card-body">
        <label for="category">Pick a category:</label>
        <select
          id="category"
          v-model="selectedCategory"
          class="form-select mb-3"
        >
          <option value="">--Select--</option>
          <option
            v-for="(category, index) in categories"
            :value="category"
            :key="index"
          >
            {{ category.name }}
          </option>
        </select>
        <div v-if="selectedCategory">
          <p>Selected category: {{ selectedCategory.name }}</p>
          <ul class="list-group">
            <li
              v-for="item in selectedCategory.items"
              :key="item"
              class="list-group-item d-flex align-items-center"
            >
              <label :for="item">{{ item }}</label>
              <input
                type="checkbox"
                :id="item"
                v-model="selectedItems"
                :value="{ name: item, done: false }"
                class="ms-auto"
              />
            </li>
          </ul>

          <button @click="addToListFirestore" class="btn btn-primary mt-3">
            Add to list
          </button>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import categories from "@/views/Categories.vue";
import { db } from "@/firebase.js";

export default {
  components: {
    categories,
  },
  data() {
    return {
      lists: [],
      newItemText: "",
      list1: ["Tuna", "Sardines", "Gouda"],
      list2: ["Chicken", "Apple", "Brown Bread"],
      categories: [
        {
          name: "Fish",
          items: ["Tuna", "Sardines", "Sea Bass", "Herring", "Mackerel"],
        },
        { name: "Meat", items: ["Chicken", "Beef", "Lamb", "Pork", "Turkey"] },
        {
          name: "Cheese",
          items: [
            "Cheddar Cheese",
            "Gouda",
            "Gorgonzola",
            "Mozzarella",
            "Swiss Cheese",
          ],
        },
        {
          name: "Fruit",
          items: ["Apple", "Banana", "Peach", "Cherry", "Pear"],
        },
        {
          name: "Carbohydrates",
          items: [
            "White Bread",
            "Brown Bread",
            "Corn Bread",
            "Pasta",
            "Whole Wheat",
          ],
        },
      ],
      items: [],
      selectedCategory: null,
      selectedItems: [],
      listNameInput: "",
    };
  },
  mounted() {
    // fetch non-empty lists from firestore on mount
    db.collection("lists").onSnapshot((querySnapshot) => {
      this.lists = [];
      querySnapshot.forEach((doc) => {
        const list = doc.data();
        if (list.items && list.items.length > 0) {
          // check if list has items
          list.id = doc.id;
          this.lists.push(list);
        }
      });
    });
  },

  methods: {
    async saveList() {
      try {
        await this.$firestore.collection("lists").add({
          category: this.selectedCategory.name,
          items: this.selectedItems.map((item) => item.name),
        });
        this.$router.push("/lists");
      } catch (error) {
        console.error(error);
      }
    },

    saveSelectedItems() {
      const selectedItems = this.selectedItems;
      const selectedCategory = this.selectedCategory;

      // create new document in "lists" collection
      db.collection("lists")
        .add({
          name: selectedCategory.name,
          items: selectedItems,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          // clear selected items and category
          this.selectedItems = [];
          this.selectedCategory = null;
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },

    saveLists() {
      this.lists.forEach((list) => {
        db.collection("lists").doc(list.id).set({
          name: list.name,
          items: list.items,
        });
      });
    },
    addToListFirestore() {
      console.log(this.selectedItems); // add this line
      this.lists.push(...this.selectedItems);
      this.selectedItems = [];

      // save updated lists array to Firestore
      db.collection("lists")
        .doc("liste")
        .update({
          lists: this.lists,
        })
        .then(() => {
          console.log("Lists updated successfully");
          console.log(this.lists); // add this line
        })
        .catch((error) => {
          console.error("Error updating lists: ", error);
        });
    },

    updateItems() {
      const category = this.selectedCategory;
      if (category) {
        this.items = category.items;
      } else {
        this.items = [];
      }
      this.selectedItems = [];
    },
    addItem() {
      // here you can add the selected items to the list
      console.log(this.selectedItems);
      // then clear the form
      this.selectedCategory = "";
      this.items = [];
      this.selectedItems = [];
    },
    createList() {
      const listName = document.getElementById("listNameInput").value;
      const newList = {
        name: listName,
        items: [],
      };
      this.lists.push(newList);
      this.listNameInput = "";
    },

    async deleteListFirestore(list) {
      try {
        await db.collection("lists").doc(list.id).delete();
        this.deleteList(list);
      } catch (error) {
        console.error("Error deleting list:", error);
      }
    },

    addItem(list) {
      if (this.selectedCategory && this.selectedItems.length > 0) {
        const selectedItems = this.selectedItems.map((item) => item.text);
        list.items.push({
          category: this.selectedCategory,
          items: selectedItems,
        });
        this.selectedCategory = null;
        this.selectedItems = [];
        this.saveSelectedItems(); // call the updated method here
      }
    },

    removeItem(list, itemIndex) {
      list.items.splice(itemIndex, 1);
    },

    deleteList(list) {
      const index = this.lists.indexOf(list);
      this.lists.splice(index, 1);
    },

    addToListFirestore(list) {
      if (this.newItemText) {
        const newItem = {
          text: this.newItemText,
          done: false,
        };
        list.items.push(newItem);
        this.newItemText = "";
      }
    },

    deleteListItem(listName, itemIndex) {
      const list = this[listName];
      list.splice(itemIndex, 1);
    },

    addCategoryItem(category) {
      const item = prompt(`Enter a new item for ${category.name}`);
      if (item) {
        this.categoryItems.push(item);
      }
    },

    removeCategoryItem(index) {
      this.categoryItems.splice(index, 1);
    },
    addToListFirestore() {
      const selectedItems = this.selectedItems;
      const selectedCategory = this.selectedCategory;

      // create new document in "lists" collection
      db.collection("lists")
        .add({
          name: selectedCategory.name,
          items: selectedItems,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);

          // clear selected items and category
          this.selectedItems = [];
          this.selectedCategory = null;

          // add the new list to the "lists" array
          this.lists.push({
            id: docRef.id,
            name: selectedCategory.name,
            items: selectedItems,
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },

    deleteListItem(index) {
      const item = this.items[index];

      // remove item from Firestore
      db.collection("lists")
        .doc("my-list")
        .update({
          items: firebase.firestore.FieldValue.arrayRemove(item),
        })
        .then(() => {
          console.log("Item deleted from Firestore");
        })
        .catch((error) => {
          console.error("Error deleting item from Firestore: ", error);
        });

      // remove item from local variable
      this.items.splice(index, 1);
    },
  },
};
</script>

<style>
.malo {
  width: 350px;
}
.ke {
  list-style-type: none;
}
.other {
  list-style-type: none;
}
.cart-container {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
}

.cart-icon {
  position: absolute;
  right: 0;
  bottom: 50px;
  width: 100px;
  height: 50px;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  cursor: pointer;
}

.cart {
  position: absolute;
  right: -300px;
  bottom: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  transition: right 0.3s ease-out;
  overflow-y: scroll;
}

.cart-items {
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.cart-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  border-top: 1px solid #ccc;
}

.checkout-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0 0 5px 5px;
  outline: none;
  cursor: pointer;
}

.doda {
  float: left;
  padding: 5px;
}
.del {
  float: right;
  padding: 5px;
}

.difcard.card {
  max-width: 40%;
}

.odcard {
  background-color: white;
}
.odcard:hover {
  background-color: white;
}

.listacard {
  background-color: white;
  color: black;
}
.listacard:hover {
  background-color: white;
  color: black;
}

.gumbic {
  background-color: transparent;
  color: white;
  font-weight: bold;
  font-size: 30px;
  border: 0 solid transparent;
  width: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  transition: background-color 0.5s ease;
}

.gumbic.btn-outline-info {
  background-color: rgb(108, 164, 196); /* Fallback color */
  color: white;
  border-color: rgb(108, 164, 196);
  transition: background-color 0.5s ease;
}

.gumbic.btn-outline-info:hover {
  background-color: rgb(50, 145, 173);
  border-color: rgb(50, 145, 173);
}
@media (max-width: 600px) {
  .gumbic {
    font-size: 25px;
  }
}
</style>
