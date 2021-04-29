<template>
  <div class="home">
    
      <header class="welcome-message">
      <h1 class= "title">
        Welcome to Mystic
      </h1>
      <div>
      <button class='btn-large loggedOut red lighten-3'> 
          <router-link to="/login">Login</router-link>
      </button>
      <button class='btn-large loggedOut red lighten-3'> 
          <router-link to="/register">Sign Up</router-link>
      </button>
      
      </div>
    </header>
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

.title{
  display: flex;
  justify-content: center;
  color: black;
  padding-top: 7rem;
}

.btn-large{
  margin:2%;
}
</style>
