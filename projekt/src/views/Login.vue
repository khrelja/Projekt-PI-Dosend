<template>
  <div class="page-wrap">
    <div class="left-panel">
      <div class="illustration">
        <img
          id="test1.png"
          src="https://firebasestorage.googleapis.com/v0/b/dosend-99f38.appspot.com/o/test1.png?alt=media&token=c469c29b-b506-4a63-8a4a-a40dc74e9469"
          class="boy"
        />
      </div>
    </div>

    <div class="right-panel">
      <h1>
        <strong>Welcome</strong>
        Human!
      </h1>
      <form class="animated-form">
        <h3>Login to your account</h3>
        <div class="form-group">
          <label for="exampleInputEmail">Email adress</label>
          <input
            type="email"
            v-model="username"
            id="exampleInputEmail"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword">Password</label>
          <input
            type="password"
            v-model="password"
            id="exampleInputPassword"
            class="form-control"
          />
        </div>
        <div class="form-group flex-end">
          <input type="button" @click="login" value="LOGIN" class="button" />
        </div>
        <div class="lost-password">
          <a href="#" class="link">Forgot your password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
import { firebase } from "@/firebase";

let input_fields = document.querySelectorAll("input");

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];
  field.addEventListener("input", function (e) {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("has-content");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("has-content");
    }
  });
}

export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Login Success", result);

          /* Replaces rutu na home page pa kada se vraca strelicom na proslu stranicu
           pokaze prijasnji homepage a ne login 
          this.$router.replace({ name: "home" }); */
        })
        .catch(function (e) {
          console.error("Error", e);
        });
    },
  },
};
</script>

<style>
.boy {
  max-height: 100%;
  max-width: 100%;
}

body {
  font-family: montserrat, sans-serif;
}

.page-wrap {
  display: flex;
}

.image {
  max-width: 100%;
  width: 1200px;
}

.left-panel {
  max-width: 100%;
  flex: 1 1 66.666%;
  background-image: linear-gradient(
    to bottom right,
    rgba(144, 195, 228, 255),
    #65c6df
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px 150px 150px 5px;
}

.left-panel .illustration {
  margin-bottom: 50px;
}

.left-panel h2 {
  color: #fff;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
}

.right-panel {
  max-width: 100%;
  flex: 1 1 33.333%;
  padding: 25px;
}

.right-panel h1 {
  color: #277286;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 50px;
}

.right-panel h1 strong {
  color: #37a0c0;
  font-weight: 900;
}

@media only screen and (max-width: 600px) {
  form {
    flex-direction: column;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
  }
}

/* Media query for screens smaller than 480px */
@media only screen and (max-width: 480px) {
  button[type="submit"] {
    width: 100%;
  }
}

.animated-form h3 {
  color: #666;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 45px;
}

.animated-form .form-group {
  position: relative;
  display: flex;
  margin-bottom: 45px;
}

.form-group.flex-end {
  justify-content: center;
}

.animated-form .form-group label {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  color: rgb(128, 128, 128);
  font-size: 20px;
  transition: 0.4s ease-out;
}

.animated-form .form-group input {
  display: block;
  width: 100%;
  padding: 10px 0px;
  border: none;
  outline: none;
  background: none;
  border-bottom: 3px solid #aaa;

  color: rgb(128, 128, 128);
  font-size: 20px;
  transition: 0.4s ease-out;
}

.animated-form .form-group:focus-within label,
.animated-form .form-group.has-content label {
  top: 0px;
  transform: translateY(-100%);
  color: rgb(151, 151, 151);
}

.animated-form .form-group:focus-within input,
.animated-form .form-group.has-content input {
  border-bottom-color: rgb(128, 128, 128);
}
.animated-form .form-group.flex-end {
  margin-bottom: 25px;
}
.animated-form .form-group .button {
  display: inline-block;
  width: auto;
  padding: 15px 60px;
  border: 3px solid rgb(80, 163, 194);
  border-radius: 999px;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    #78b9ee 50%,
    #65c6df
  );
  background-size: 200%;

  color: rgb(58, 109, 129);
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}

.animated-form .form-group .button:hover {
  color: rgb(190, 237, 255);
  background-position: 100%;
  border: 3px solid rgb(202, 230, 241);
}

.animated-form .lost-password a {
  color: #1c90ad;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}
.animated-form .lost-password a:hover {
  border-bottom-color: skyblue;
}
</style>
