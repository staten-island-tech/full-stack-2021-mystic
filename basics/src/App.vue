<template>
<html lang="en">
  <div id="app">
    
      <!-- <a href="#">
        <img class="logo" src="../src/assets/logo.png" />
      </a> -->
     <nav class="nav-wrapper green lighten-4"> 
       <p class="logo">Mystics</p>
      <ul class="wrapper">
       <li1>
         <router-link class="routerLink" to="/">Home</router-link>
       </li1>
      <li2>
        <router-link class="routerLink" to="/login">Login</router-link>
      </li2>  
      <li3  @click="logout" class="routerLink">Logout</li3>
        
<!-- v-if="userIsAuthenticated" -->
      <li4>
      <router-link class="routerLink" to="/register">Register</router-link>
      </li4>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</html>
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
  width: 5vw;
  margin-left: 3%;
  margin-top:0;
  font-size: 3rem;
  color:#312c50;
  text-decoration: none; 
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:bold;
  align-items: center;
}
.nav-wrapper {
  width: 100vw;
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
  display:flex;
  flex-direction: row;
}
.routerLink{
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
    return{
      title:"",
      link:""
    }
  },
    mounted() {
    M.AutoInit();
  },
  computed:{
    navItems(){
      let navItems = [
        {title:'Home', link:'/'},
        {title: 'Sign Up', link: '/register'},
        {title: 'Login', link:'/login'}
      ]
      if (this.userIsAuthenticated){
        navItems = [
          {title:'Game', link:'/Interface'}
        ]
      }
      return navItems.data
    }, 
    userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods:{
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: "Home"});
    }
}
}
</script>
