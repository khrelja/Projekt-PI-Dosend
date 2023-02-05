<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          id="1.png"
          src="https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/1.png?alt=media&token=410976a0-a874-4461-948d-aa3515609cb5"
          class="slika"
        />
        <div class="my-cap carousel-caption d-none d-md-block">
          <button
            type="button"
            class="listb btn btn-outline-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            CREATE A NEW LIST
          </button>

          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="false"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modi modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modi modal-body">
                  <button type="button" class="mybtn btn btn-info">
                    CHOOSE FROM CATEGORIES
                  </button>
                  &nbsp;&nbsp;&nbsp;

                  <button type="button" class="mybtn btn btn-info">
                    VIEW LISTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          id="22.png"
          src="https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/22.png?alt=media&token=afe1422c-23b3-401d-84ca-778d9414508c"
          class="slika"
        />
        <div class="my-cap carousel-caption d-none d-md-block">
          <button
            type="button"
            class="listb btn btn-outline-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            CREATE A NEW LIST
          </button>

          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <button type="button" class="mybtn btn btn-info">
                    CHOOSE FROM CATEGORIES</button
                  >&nbsp;&nbsp;&nbsp;

                  <button type="button" class="mybtn btn btn-info">
                    VIEW LISTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          id="33.png"
          src="https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/33.png?alt=media&token=df801273-28f3-42aa-95f0-9d663cc3400f"
          class="slika"
        />
        <div class="my-cap carousel-caption d-none d-md-block">
          <button
            type="button"
            class="listb btn btn-outline-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            CREATE A NEW LIST
          </button>

          <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <button type="button" class="mybtn btn btn-info">
                    CHOOSE FROM CATEGORIES</button
                  >&nbsp;&nbsp;&nbsp;

                  <button type="button" class="mybtn btn btn-info">
                    VIEW LISTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script></script>

<style>
/* size of image in carousel */
.slika {
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
}
/* -- */

/* create new list edit boxa nakon sta je active */
.modi {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(0, 174, 255)
  );
}

/* button for create list */
.mybtn {
  font-size: 40px;
  width: 350px;
  height: 500px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.144);
}

.modal-dialog {
  height: 60%;
}
.modal-content {
  height: 50%;
}

.modal {
  z-index: 100001 !important;
}
.modal-backdrop {
  display: none;
}
.modal-dialog {
  margin: 2px auto;
  z-index: 1100 !important;
}

.listb {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  font-size: 30px;
  border: 3px solid #f1f1f1;
  width: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

@media (max-width: 600px) {
  .listb {
    font-size: 25px;
  }
}

.carousel-item {
  filter: blur(2px);
  filter: brightness(60%);
}
.my-cap {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel {
  top: -100px;

  max-height: 60vw; /* set the maximum height of the carousel to 80% of the viewport height */
  overflow: hidden; /* hide any overflow content */
}
</style>
