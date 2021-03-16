<template>
  <div id="app">
    <div class="nav-wrapper">
      <a>
      <router-link to="/"><img class="logo" src="../src/assets/logo.png" />
      </router-link>
      </a>
      
      <ul class="wrapper">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    background-image: url('../src/assets/animal-crossing-wallpaper-tempBackground.webp');
    margin:0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo{
  margin-top: 3%;
    width: 8vw;
    height: 7vh;
}

.nav-wrapper{
  width:100vw;
  background-color: coral;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.wrapper{
  padding-right:2%;
  width:auto;
  color:white;
}
</style>

<script>
import M from 'materialize-css';


export default {
    mounted () {
        M.AutoInit()
    },
}

</script>