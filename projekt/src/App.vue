<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
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

  a {
    font-weight: bold;
    color: #111b25;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0d488b;
    }
  }
}
body,
html,
#master {
  height: 100%;
  background-color: rgb(177, 241, 231);
}
.panel {
  margin-top: 100px;
}
</style>
