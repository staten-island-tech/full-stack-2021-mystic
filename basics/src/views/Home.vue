<template>
  <div class="home">
    <img class="logo" src="../assets/logo-test.png" />
    
      <div class="welcome-message">
      <h1>
        Welcome to Mystic
      </h1>
      <div class="btn">
      <button class='btn-large loggedOut red lighten-3'> 
          <router-link to="/register">Sign Up</router-link>
      </button>
      <button class='btn-large loggedOut red lighten-3'> 
          <router-link to="/login">Login</router-link>
      </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">

.logo{
height: 18vh
}
</style>
