<template>
<html lang="en">
  <div id="app">
     <nav class="nav-wrapper green lighten-4"> 
       <p class="logo">Mystics</p>
      <ul class="wrapper">
       <li>
         <router-link class="routerLink" to="/">Home</router-link>
       </li>
      <li>
        <router-link class="routerLink loginTag" to="/login">Login</router-link>
      </li>  
      <li  @click="logout" >
        <a class="routerLink logoutTag">Logout</a>
      </li>
        
<!-- v-if="userIsAuthenticated" -->
      <li>
      <router-link class="routerLink" to="/register">Register</router-link>
      </li>
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
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  width:100%;
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
a.logoutTag{
  text-decoration: none;
  color: black;
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
    this.checkUser();
  },
  methods:{
  checkUser:function(){
     firebase.auth().onAuthStateChanged((user) => {
      if (firebase.auth().currentUser) {
      console.log("User logged in"+user.email);
      document.querySelector(".loginTag").style.display="none";
      }else{
        document.querySelector(".logoutTag").style.display="none";
        console.log("Please sign in")
      }
    });
  },
  logout(){
    firebase.auth().signOut().then(() => {
      console.log(firebase.auth().currentUser.email+ " has signed out")
      }).then(()=>{
        this.$router.replace({
          name:"Home"
      });
      })
      
      .catch((error) => {
        console.log(error.message)
      });
  }
}
}
</script>