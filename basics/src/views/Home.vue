<template>
  <div class="home">
    
      <div class="welcome-message">
      <h1>
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
.btn-large{
  margin:2%;
}
</style>
