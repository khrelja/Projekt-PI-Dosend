<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg bg-body-tertiary navbar-scroll">
      <div class="container-fluid">
        
        <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  <button class="btn"><i class="fa fa-bars"></i> <b> Menu </b></button>
</a>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">MENU</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <ul >
            
              <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                <li class="items">
  <input type="checkbox" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1"><router-link to="/" class="nav-link" style="padding: 10px 47px"
                  >HOME
                </router-link></label> </li>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<li class="items">
  <input type="checkbox" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" >
  <label class="btn btn-outline-primary" for="btnradio2"><router-link to="/Login" class="nav-link" style="padding: 9px 45px"
                  >LOGIN</router-link
                ></label>
</li>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<li class="items">
  <input type="checkbox" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" >
  <label class="btn btn-outline-primary" for="btnradio3"><router-link to="/" class="nav-link" style="padding: 7px 52px"
                  >LIST</router-link
                ></label>
                </li>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <li class="items">
  <input type="checkbox" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" >
  <label class="btn btn-outline-primary" for="btnradio4"><router-link to="/Login" class="nav-link" style="padding: 7px 17px"
                  >CATEGORIES</router-link
                ></label>
                </li>               
</div>
                
          
          </ul>
  </div>
 
</div>


<div class="containersearch">
  <input type="text" placeholder="Search me...">
  <div class="search"></div>
</div>


  <router-link to="/" class="navbar-brand" href="">
          <img
            src="@/assets/test1.png"
            alt="Logo"
            width="50"
            class="d-inline-block align-text-center"
          />
          DOSEND
        </router-link>
      </div>
    </nav>
  </div>
  <router-view/>


  <!-- footer -->
  <footer class="site-footer">
      <div class="container">
        <div class="row">
          
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
             <p>
      <strong
        >Svida ti se Dosend? Preporuci ga prijatelju!</strong>
    </p>
            <p class="copyright-text"> &copy; 
            </p>
            <p>
      Napravite popise u nekoliko sekundi i uvijek kupite ono što vam stvarno treba!

    </p>
          </div>

          <div class="col-md-4 col-sm-12">
            <ul class="social-icons">
              <li><a class="github" href="#"><i class="fa fa-github"></i></a></li>
              <li><a class="youtube" href="#"><i class="fa fa-youtube"></i></a></li>
              <li><a class="dribbble" href="https://dribbble.com/taka16" target="_blank"><i class="fa fa-dribbble"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: none;
  position: absolute;
  top: 30px;
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
  background-color: rgb(144,195,228,255);
  
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
      transition: all .5s;
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
      transition: all .5s;
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
    text-shadow:none;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 rgb(19, 77, 95),
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
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

// footer
.site-footer
{
  background-color:none;
  padding:5px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}

.site-footer a
{
  color:rgb(50, 145, 173);
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}

.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:rgb(50, 145, 173)
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#000000;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.github:hover
{
  background-color:#3b5998
}
.social-icons a.youtube:hover
{
  background-color:red
}

.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}

//for menu
.btn-check{
  --selected-color: #106cc8;
  --active-color: #1e86ed;
}
</style>

