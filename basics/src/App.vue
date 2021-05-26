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

@import url('https://fonts.googleapis.com/css2?family=Freckle+Face&family=New+Tegomin&family=Original+Surfer&display=swap');
#app {
  font-family: 'Original Surfer', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
 
  color: #2c3e50;
}
body{
    background-image: url('../src/assets/front.jpg');
    margin:0;
    background-position: center;
    background-attachment: fixed;
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
  height: 9vh;
  background-color: #2b2d42;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.wrapper{
  padding-right:5%;
  width:auto;
  color:white;
  font-size: 1.3rem;
  
}

</style>

<script>
import M from 'materialize-css';
//import {db} from './main';

export default {
   data() {
    return {
      users: {}
    }
  },
    mounted () {
        M.AutoInit()
    },
    /* firebase: {
    users: {
      source: db.ref('users'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }, 
  }*/
}

</script>