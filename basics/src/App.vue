<template>
  <div id="app">
    <div class="nav-wrapper">
      <!-- <a href="#">
        <img class="logo" src="../src/assets/logo.png" />
      </a> -->
      <a href="#" class="logo">
        <h6>Mystics</h6>
      </a>
      <ul class="wrapper">
        <router-link class="routerLink" to="/">Home</router-link>
        |
        <router-link class="routerLink" to="/about">About</router-link>
        |
        <router-link class="routerLink" to="/login">Login</router-link>
        |
        <p @click="logout" class="routerLink" to="/login">Logout</p>
        |
        <router-link class="routerLink" to="/register">Register</router-link>
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
.logo {
  width: 8vw;
  height: 5vh;
  text-decoration: none; 
  color: rgb(83, 62, 158);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:bold;
}
.nav-wrapper {
  width: 100vw;
  background-color: coral;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.wrapper {
  padding-right: 2%;
  width: auto;
  text-decoration: none; 
  color: rgb(83, 62, 158);
  font-weight: bold;
  display:flex;
  flex-direction: row;
}
.routerLink{
  text-decoration: none; 
  color: black;
  font-weight: bold;
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
    mounted() {
    M.AutoInit();
  },
  methods:{
  logout(){
        firebase
            .auth()
            .signOut()
            .then(() => {
              console.log("user logged out")
            this.$router.push({
                name:"Home",
                query: { redirect: '/about' }
            });
        })
        .catch(error => (this.error = error));
        },
}
}

</script>