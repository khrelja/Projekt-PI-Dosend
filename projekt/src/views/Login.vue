<template>
<div class="page-wrap">
    
    <div class="left-panel">
      <div class="illustration">
        <img src="@/assets/test1.png" alt="Illustration" class="image" />
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
          <label for="username">Username</label>
          <input type="text" id="username" class="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="password" />
        </div>
        <div class="form-group flex-end">
          <input type="submit" value="LOGIN" class="button" />
        </div>
        <div class="lost-password">
          <a href="#" class="link">Forgot your password?</a>
        </div>
      </form>
    </div>

  </div>
  </template>

<script type="text/javascript">
    let input_fields = document.querySelectorAll('input');
    
    for (let i = 0; i < input_fields.length; i++) {
      let field = input_fields[i];
      field.addEventListener('input', function (e) {
        if (e.target.value != "") {
          e.target.parentNode.classList.add('has-content');
        } else if (e.target.value == "") {
          e.target.parentNode.classList.remove('has-content');
        }
      });
    }
  </script>
  <style>
  * {
  margin: 0;
  padding: 0;
  
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
  background-image: linear-gradient(to bottom right, rgb(177, 241, 231), rgb(144, 209, 199));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-panel .illustration {
  margin-bottom: 50px;
}

.left-panel h2 {
  color: #FFF;
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
  color: #0aa195;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 50px;
}

.right-panel h1 strong {
  color: #4a5f5a;
  font-weight: 900;
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
  color: #AAA;
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
  border-bottom: 3px solid #AAA;

  color: #666;
  font-size: 20px;
  transition: 0.4s ease-out;
}

.animated-form .form-group:focus-within label,
.animated-form .form-group.has-content label {
  top: 0px;
  transform: translateY(-100%);
  color: #6bc7c2;
}

.animated-form .form-group:focus-within input, 
.animated-form .form-group.has-content input {
  border-bottom-color: #5fccc3;
}
.animated-form .form-group.flex-end {
  margin-bottom: 25px;
}
.animated-form .form-group .button {
  display: inline-block;
  width: auto;
  padding: 15px 60px;
  border: 3px solid #619b98;
  border-radius: 999px;
  background-image: linear-gradient(to right, transparent 50%, #2ec1cc 50%, #309494);
  background-size: 200%;

  color: #288074;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
}

.animated-form .form-group .button:hover {
  color: rgb(255, 255, 255);
  background-position: 100%;
  border: 3px solid #FFF;
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
  border-bottom-color: #ffffff;
}
  </style>
