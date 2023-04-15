<template>
  <div>
    <h1>CATEGORIES</h1>

    <div v-if="categories.length">
      <div v-for="(category, index) in filteredCards" :key="index">
        <h3>
          {{ category.name }}
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </h3>
        <flipcard
          :category-name="category.name"
          :items="category.items"
          @add-item-to-list="addItemToList"
        />
      </div>
    </div>

    <div class="cart-container">
      <div
        class="cart-button"
        v-show="cartItems.length > 0"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        <p>List ({{ cartItems.length }})</p>
      </div>

      <div
        class="nanov modal fade"
        id="cartModal"
        tabindex="-1"
        aria-labelledby="cartModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="nan modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="cartModalLabel">Shopping Cart</h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul>
                <li
                  class="novo"
                  v-for="(item, index) in itemCounts"
                  :key="index"
                >
                  <i class="fa fa-check">
                    {{ item.name
                    }}{{ item.count > 1 ? " (" + item.count + ")" : "" }}
                    <a
                      href="#"
                      class="remove-item"
                      @click.prevent="removeItem(item)"
                    >
                      <i class="fas fa-times"></i>
                    </a>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(category, index) in categories" :key="index">
      <h3>{{ category.name }}</h3>
      <flipcard
        :category-name="category.name"
        :items="category.items"
        @add-item-to-list="addItemToList"
      />
    </div>
  </div>
</template>

<script>
import Flipcard from "@/components/Flipcard.vue";
import { firebase } from "@/firebase";
import { db } from "@/firebase";
import store from "@/store";

export default {
  components: {
    Flipcard,
  },
  data() {
    return {
      store,
      categories: [
        {
          name: "FISH",
          items: [
            {
              id: 1,
              name: "Tuna",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/tuna.jpg?alt=media&token=215cdfec-74aa-4e06-9e85-5966fc0fc5e1",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/T.jpg?alt=media&token=aa14a4ce-a765-4a4e-a2a4-6c256899b9a5",
            },
            {
              id: 2,
              name: "Sea bass",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/seabass.jpg?alt=media&token=a320d35c-72f0-43fa-b09c-a7b5fa10e142",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/S.jpg?alt=media&token=a379b195-6b94-4f31-b3ff-efca1eaa6e95",
            },
            {
              id: 3,
              name: "Sardines",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/sardines.webp?alt=media&token=907f17d1-556d-46fa-9284-d4132f88b357",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/SAR.jpg?alt=media&token=634fb2b2-ef17-4a48-8128-1d832cf120ba",
            },
            {
              id: 4,
              name: "Herring",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/herring.jpg?alt=media&token=2ca31b15-4aeb-4e6c-a923-df59f9caebd5",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/H.jpg?alt=media&token=ebf34981-9bc5-42a6-ab8e-05d6768699b6",
            },
            {
              id: 5,
              name: "Mackerel",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/Mackerel.jpg?alt=media&token=aea93ff0-c092-4db1-9331-1e6ee3def5a9",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/card.jpg?alt=media&token=b7abe35a-9d73-40b6-a821-a7d02a6d2ed5",
            },
          ],
        },
        {
          name: "MEAT",
          items: [
            {
              id: 1,
              name: "Chicken",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fchicken.jpg?alt=media&token=e25df348-87a6-40af-9c11-01c987c2ba0a",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fchick.jpg?alt=media&token=72fe1fbf-5e0f-4cf8-a2a8-8670646d27d5",
            },
            {
              id: 2,
              name: "Beef",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fbeef.jpg?alt=media&token=01bf3507-45c9-4f15-a8b8-dd63bfcc9a4a",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fbeeeef.jpg?alt=media&token=9bba8f75-de60-48c3-8fab-aa28f83f8815",
            },
            {
              id: 3,
              name: "Lamb",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Flamb.jpeg?alt=media&token=73dbd071-8e14-4ea3-889a-c01732734c28",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Flam.jpg?alt=media&token=b052abfc-1018-45f1-b1bf-d3a2ab6cf647",
            },
            {
              id: 4,
              name: "Pork",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fpork.jpg?alt=media&token=2ac66f2b-176c-40c4-bc0b-b63e5e7c62a0",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fpor.jpg?alt=media&token=6145db0b-d897-4f5c-9e77-e1e3794dcf50",
            },
            {
              id: 5,
              name: "Turkey",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fturkey.jpg?alt=media&token=3e337694-57ad-4058-acfa-4b93d283edc8",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/meat%2Fturk.jpg?alt=media&token=2b056d1f-abe0-4783-b79d-f9b6c0a5a91a",
            },
          ],
        },
        {
          name: "CHEESE",
          items: [
            {
              id: 1,
              name: "Cheddar Cheese",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2FCheddarCheese.jpg?alt=media&token=e7244d3e-ce5f-474b-a884-955cfaf18e5d",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2Fcheddar.jpg?alt=media&token=32f55aae-4a91-4be2-8c68-152c39bbd19e",
            },
            {
              id: 2,
              name: "Gouda",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2FGouda.jpg?alt=media&token=ff7b69c8-70fa-4649-9dbf-15021f227b9b",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2Fgou.jpg?alt=media&token=5bd60794-ee94-49dd-bfe3-e3ef8db88a4e",
            },
            {
              id: 3,
              name: "Gorgonzola",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2FGorgonzola.jpg?alt=media&token=2c7894ba-3325-4708-a540-32de496de16c",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2Fgorg.jpg?alt=media&token=16497d7b-ede0-4b12-8231-3debb2646535",
            },
            {
              id: 4,
              name: "Mozzarella",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2FMozzarella.jpg?alt=media&token=5d64b5a5-47ce-4303-a5cf-011d8b997bcc",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2Fmozz.jpg?alt=media&token=4c93eb39-18c4-49d9-974f-8533350c6497",
            },
            {
              id: 5,
              name: "Swiss Cheese",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2Fswiss.jpg?alt=media&token=39a56edc-09c8-43c4-b46d-097d09491613",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/cheese%2Fswi.jpg?alt=media&token=6a89fab3-49ac-4fbe-b6b9-df2946301ff3",
            },
          ],
        },
        {
          name: "FRUIT",
          items: [
            {
              id: 1,
              name: "Apple",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fapple.jpg?alt=media&token=96227cd3-e344-4df3-b59a-11af74c352ce",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fapples.jpg?alt=media&token=ced01640-7a86-42f5-b582-0112d81c5e15",
            },
            {
              id: 2,
              name: "Banana",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fbanana.webp?alt=media&token=2b8436b2-8b9b-4968-b044-eb82fe9e8437",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fbanana.jpg?alt=media&token=53c9e3c3-b8dc-452b-93b6-a49d919b49af",
            },
            {
              id: 3,
              name: "Peach",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fpeach.jpg?alt=media&token=12678b58-563d-49b0-a045-e7bd8e088599",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fpeaches.jpg?alt=media&token=773204f7-2537-499b-8349-d59ba0e1e4f1",
            },
            {
              id: 4,
              name: "Cherry",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2FCherry.webp?alt=media&token=0f94da6e-dab0-46ca-a2da-bc6e3bdddce7",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fcherry.jpg?alt=media&token=ec2f1184-25b6-4658-920f-a23977ed2794",
            },
            {
              id: 5,
              name: "Pear",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2FPear.jpg?alt=media&token=658ddc1d-9d65-4276-8705-4c0a9e9de7a2",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/fruit%2Fpear.jpg?alt=media&token=a9672a19-dbac-4c46-a4bb-4035b537fd68",
            },
          ],
        },
        {
          name: "CARBOHYDRATES",
          items: [
            {
              id: 1,
              name: "White Bread",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fwhitebread.jpg?alt=media&token=014be671-4ef2-4793-b9a6-2f61eed1f9fe",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fwhite.jpg?alt=media&token=3dd60cf5-3858-43d1-9364-71f60678a7c0",
            },
            {
              id: 2,
              name: "Brown Bread",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fbrownbread.jpg?alt=media&token=128ceb88-6180-4743-b664-4e52a96d9a93",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fbrown.jpg?alt=media&token=2770860e-2a46-40c9-8d15-9f28689734ee",
            },
            {
              id: 3,
              name: "Corn Bread",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fcornbread.jpg?alt=media&token=7ac51096-07fc-4ba9-a543-26a36b2e338f",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fcorn.jpg?alt=media&token=0433833e-9800-49ea-8922-0d316bb951fb",
            },
            {
              id: 4,
              name: "Pasta",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fpasta.webp?alt=media&token=34eb0faf-9abd-4124-9969-e8d976086f78",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fpast.jpg?alt=media&token=e8d8ef7f-c23a-4108-b98a-d606a8b6aa7b",
            },
            {
              id: 5,
              name: "Whole Wheat",
              imageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fwholewheat.jpg?alt=media&token=51104036-8741-403a-8902-bedeb701b8bb",
              modalImageSrc:
                "https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/carbohydrates%2Fwhole.jpg?alt=media&token=cd7f17cc-1aab-4b32-9d1b-f452e85eaa65",
            },
          ],
        },
      ],
      cartItems: [],
      isModalOpen: false,
    };
  },
  computed: {
    filteredCards() {
      console.log("Search term:", this.store.searchTerm);
      const categories = this.categories || [];
      return categories.flatMap((category) => {
        const filteredItems = (category.items || []).filter((item) => {
          return item.name
            .toLowerCase()
            .includes(this.store.searchTerm.toLowerCase());
        });
        return { ...category, items: filteredItems };
      });
    },

    itemCounts() {
      const itemCounts = {};
      this.cartItems.forEach((item) => {
        if (itemCounts[item.name]) {
          itemCounts[item.name].count++;
        } else {
          itemCounts[item.name] = {
            name: item.name,
            count: 1,
          };
        }
      });
      return Object.values(itemCounts);
    },
  },
  methods: {
    addItemToList(item) {
      this.cartItems.push(item);
      // Save new item to Firebase
      const categoryRef = db.collection("categories").doc(item.category);

      categoryRef.get().then((doc) => {
        if (doc.exists) {
          categoryRef.update({
            items: firebase.firestore.FieldValue.arrayUnion(item.name),
          });
        } else {
          categoryRef.set({
            items: [item.name],
          });
        }
      });
    },
    removeItem(item) {
      this.cartItems.splice(this.cartItems.indexOf(item), 1);

      // Remove deleted item from Firebase
      const categoryRef = db.collection("categories").doc(item.category);

      categoryRef.get().then((doc) => {
        if (doc.exists) {
          categoryRef.update({
            items: firebase.firestore.FieldValue.arrayRemove(item.name),
          });
        }
      });
    },

    getItemCount(name) {
      let count = 0;
      this.cartItems.forEach((item) => {
        if (item.name === name) {
          count++;
        }
      });
      return count;
    },
    openModal() {
      if (this.cartItems.length > 0) {
        this.isModalOpen = true;
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  created() {
    const categoriesRef = db.collection("categories");
    categoriesRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const categoryIndex = this.categories.findIndex(
          (category) => category.name === doc.id
        );
        if (categoryIndex !== -1) {
          this.categories[categoryIndex].items = doc.data().items;
        }
      });
    });
  },
};
</script>
<style>
.novo {
  list-style-type: none;
}

.modal-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.modal-container.open {
  display: block;
}

.nanov.modal {
  position: fixed;
  top: 45%;
  left: 75%;
  max-width: 370px;

  width: 80%;
  height: 50%;
  overflow: auto !important;
}
@media only screen and (max-width: 768px) {
  .modal {
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    height: 50%;
    overflow: auto !important;
  }
  .nanov.modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    height: 50%;
    overflow: auto !important;
  }
}
.nan.modal-content {
  height: 100%;
  padding: 20px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.cart-container {
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 1000;
}

.cart-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  width: 4%;
  height: 7%;
  border-radius: 45%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

@media only screen and (max-width: 768px) {
  .cart-button {
    width: 60px;
    height: 60px;
  }

  .cart-button p {
    font-size: 20px !important;
  }
}

.cart-button:hover {
  transform: scale(1.1);
}

.cart-button p {
  margin: 0;
  font-size: 14px;
  text-align: center;
  line-height: 1.3;
}

.cart-button p:first-child {
  font-size: 24px;
  font-weight: bold;
}
</style>
