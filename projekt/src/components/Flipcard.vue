<template>
  <div class="container">
    <ul class="cards">
      <li class="card" v-for="item in items" :key="item.id">
        <div
          :class="[
            'flip-card',
            {
              'brown-bread': item.name === 'brown bread',
              'whole-wheat': item.name === 'whole wheat',
            },
          ]"
        >
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img :src="item.imageSrc" :alt="item.name" class="pic" />
              <h4>{{ item.name }}</h4>
            </div>
            <div class="flip-card-back">
              <img
                :src="item.modalImageSrc"
                :alt="'Modal ' + item.name"
                class="druk"
              />
              <button
                type="button"
                class="btn btn-primary"
                @click="addItemToList(item)"
              >
                Add To List
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addItemToList(item) {
      this.$emit("add-item-to-list", item);
    },
  },
};
</script>

<style>
/* iz starog categories.vue jer vise nez sta je za sta */
.seperate {
  position: relative;
  width: 100%;
  left: 0;
  right: 0;
  padding: 28px 0;
  background-image: linear-gradient(
    rgba(144, 195, 228, 255),
    #65c6df,
    rgba(144, 195, 228, 255)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.categ {
  float: left;
  font-weight: bold;
}

.nasl {
  color: #000;
}

.size {
  height: 50%;
  width: 100%;
}

.druk {
  height: 20px;
  width: 20px;
  max-height: 100%;
  max-width: 100%;
}

.design .box {
  --mask: radial-gradient(
        39.37px at calc(100% - 55.5px) 50%,
        #000 99%,
        #0000 101%
      )
      0 calc(50% - 60px) / 100% 120px,
    radial-gradient(39.37px at calc(100% + 25.5px) 50%, #0000 99%, #000 101%)
      calc(100% - 30px) 50%/100% 120px repeat-y;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.pic {
  height: 250px;
  width: 380px;
  max-height: 100%;
  max-width: 100%;
  position: relative;
}

.mod {
  background-color: rgb(85, 158, 187);
  border-color: rgb(85, 158, 187);
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}

:root {
  --red: rgb(50, 145, 173);
  --darkred: rgb(50, 145, 173);
  --platinum: #e5e5e5;
  --black: #2b2d42;
  --white: white;
  --thumb: rgb(144, 195, 228, 255);
}

h1 {
  font-size: 42px;
  margin-bottom: 1em;
  padding-top: 60px;
}

.cards {
  display: flex;
  padding: 25px 0px;
  list-style: none;
  overflow-x: scroll;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
}

.card {
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  padding: 20px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  scroll-snap-align: start;
  transition: all 0.2s;
}

.card:not(:last-child) {
  margin-right: 10px;
}

.card:hover {
  color: var(--white);
  background: var(--red);
}

.card .card-title {
  font-size: 20px;
}

.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}

.card .card-link-wrapper {
  margin-top: auto;
}

.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: white;
  background: var(--red);
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.card:hover .card-link {
  background: var(--darkred);
}

.cards::-webkit-scrollbar {
  height: 12px;
}

.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
}

.cards::-webkit-scrollbar-thumb {
  background: var(--darkred);
}

.cards::-webkit-scrollbar-track {
  background: var(--thumb);
}

@media (min-width: 500px) {
  .card {
    flex-basis: calc(50% - 10px);
  }

  .card:not(:last-child) {
    margin-right: 20px;
  }
}

@media (min-width: 700px) {
  .card {
    flex-basis: calc(100% / 3 - 20px);
  }

  .card:not(:last-child) {
    margin-right: 30px;
  }
}

@media (min-width: 1100px) {
  .card {
    flex-basis: calc(32.33% - 20px);
  }

  .card:not(:last-child) {
    margin-right: 40px;
  }
}
/* iz starog categories.vue^^ */

.flip-card {
  background-color: #f1f1f1;
  width: 310px;
  height: 270px;
  perspective: 1000px;
  margin-bottom: 20px;
  display: inline-block;
}
.card pic {
  height: 70%;
  object-fit: cover;
}
.brown-bread {
  width: 320px;
}

.whole-wheat {
  width: 310px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: rgb(50, 145, 173);
  color: black;
  text-align: center;
  z-index: 2;
}

.flip-card-back {
  background-color: rgb(50, 145, 173);
  color: white;
  transform: rotateY(180deg);
  z-index: 2;
  padding: 0;
  width: 310px;
  height: 300px;
}

.pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.druk {
  width: 380px;
  height: 280px;
  object-fit: contain;
}
</style>
