<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="">
          <img
            id="logo1.png"
            src="https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/logo1.png?alt=media&token=f724e1aa-b059-4442-b365-780ecaa0d6c4"
            alt="Logo"
            width="50"
            class="d-inline-block align-text-center"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" aria-current="page"> HOME </router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/Login"> LOGIN </router-link>
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <a href="#" @click.prevent="logout"> LOGOUT </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link mx-2 dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LISTS
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><router-link to="/lists">My Lists </router-link></li>

                <li><router-link to="/Login">My Lists </router-link></li>

                <li>
                  <router-link to="/Categories"> Create New </router-link>
                </li>
                <li></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="admin" aria-current="page"> ADMIN </router-link>
            </li>
          </ul>
        </div>
        <div class="containersearch d-none d-sm-block">
          <input
            v-model="store.searchTerm"
            type="text"
            placeholder="I need..."
          />
          <div class="search"></div>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="site-footer">
      <div class="container">
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p>
              <strong>Do you like Dosend? Recommend it to a friend!</strong>
            </p>

            <p>Make lists in seconds and always buy what you truly need!</p>
          </div>

          <div class="col-md-4 col-sm-12">
            <ul class="social-icons">
              <li>
                <a class="github" href="#"><i class="fa fa-github"></i></a>
              </li>
              <li>
                <a class="youtube" href="#"><i class="fa fa-youtube"></i></a>
              </li>
              <li>
                <a
                  class="dribbble"
                  href="https://dribbble.com/taka16"
                  target="_blank"
                  ><i class="fa fa-dribbble"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="copyright-text">&copy;</p>
      </div>
    </footer>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log("User signed in:", user.email);
    store.currentUser = user.email;
    if (currentRoute && currentRoute.meta && currentRoute.meta.needsUser) {
      router.push({ name: "login" });
    }
  } else {
    console.log("User signed out.");
    store.currentUser = null;

    if (currentRoute && currentRoute.meta && currentRoute.meta.needsUser) {
      router.push({ name: "Login" });
    }
  }
});

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },

  search() {
    this.$router.push(`/search/${this.searchTerm}`);
  },
};
</script>

<style lang="scss">
#neubar .nav-link {
  color: #ffffff;
  text-shadow: 4px #000000;
}

#neubar .dropdown-item {
  color: #ffffff;
}

#neubar {
  margin-bottom: 20px;
  background-color: rgb(144, 195, 228, 255);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
}

#neubar .dropdown-menu a:hover {
  color: #64bfcf;
}
#neubar .nav-item {
  margin: auto 4px;
}
#neubar a {
  padding-left: 12px;
  padding-right: 12px;
  color: white;
}
#neubar .dropdown-menu {
  background: #589fce;
}
a.navbar-brand {
  color: #d8d8d8;
}

.navbar-light .navbar-brand,
.navbar-light .navbar-nav .nav-link {
  color: #fff;
}

.bg-transparent {
  background-color: transparent;
}

@media (min-width: 992px) {
  .fixed-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
} //buttons in menu
.mylist {
  color: rgb(255, 255, 255);
  text-shadow: 0px 0.5px 0px #000000;
  background-color: rgb(12, 174, 223);
  padding: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: none;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 999;

  a {
    font-weight: bold;
    color: #175a6e;
    text-decoration: none;

    &.router-link-exact-active {
      color: #000000;
    }
  }
  ul {
    list-style-type: none;
  }
}

body,
html,
#master {
  height: 100%;
  background-color: rgb(144, 195, 228, 255);
}
.panel {
  margin-top: 100px;
}

//search text box
.containersearch {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background: rgb(50, 145, 173);
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 22px;
      right: 0;
      bottom: 0;
      left: 22px;
      width: 12px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all 0.5s;
    }
  }
  input {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgb(80, 159, 224);
    color: white;
    text-shadow: none;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 rgb(19, 77, 95), 0 20px 25px 0 rgba(0, 0, 0, 0.2);
    // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -250px;
      background: #151515;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
}
#navbarSearch {
  position: absolute;
  top: 60px;
  right: 10px;
  width: 100%;
}

@media (min-width: 992px) {
  #navbarSearch {
    position: relative;
    top: auto;
    width: auto;
  }
}

// footer
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.bottom {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  padding: 28px 0;
  background-image: linear-gradient(
    to bottom right,
    rgba(144, 195, 228, 255),
    #65c6df
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-footer {
  background-color: none;
  padding: 5px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}

.site-footer a {
  color: rgb(50, 145, 173);
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}

.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: rgb(50, 145, 173);
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #000000;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.github:hover {
  background-color: #3b5998;
}
.social-icons a.youtube:hover {
  background-color: red;
}

.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}

.btn {
  background-color: rgb(12, 174, 223);
  border-color: rgb(12, 174, 223);
  color: whitesmoke;
}

.btn:hover {
  background-color: rgb(17, 154, 196);
  border-color: rgb(17, 154, 196);
}
</style>
