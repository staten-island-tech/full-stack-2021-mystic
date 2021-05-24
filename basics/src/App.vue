<template>
  <div id="app">
    <div class="nav-wrapper">
      <a href="#">
        <img class="logo" src="../src/assets/logo.png" />
      </a>
      <ul class="wrapper">
        <router-link class="routerLink" to="/">Home</router-link>
        |
        <router-link class="routerLink" to="/about">About</router-link>
        |
        <router-link class="routerLink" to="/login">Login</router-link>
        |
        <router-link class="routerLink" to="/register">Register</router-link>
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
body {
  background-image: url("../src/assets/school.jpg");
  margin: 0;
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
  margin-top: 1%;
  width: 5vw;
  height: 4vh;
}
.nav-wrapper {
  width: 100vw;
  background-color: coral;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.wrapper {
  padding-right: 2%;
  width: auto;
  text-decoration: none; 
  color: rgb(83, 62, 158);
  font-weight: bold;
}
.routerLink{
  text-decoration: none; 
  color: black;
  font-weight: bold;
}
</style>

<script>
import M from "materialize-css";
import firebase from "firebase";
import "firebase/auth";

export default {
  data(){
    return {
      Login:''
    }
  },
    mounted() {
    M.AutoInit();
  },
  methods:{
  login(){
    if(firebase.auth.currentUser){
      this.Login=Logout
    }
    else{
      login
    }
  }
}
}
</script>
