<template>
  <div class="home">
    
      <div class="welcome-message">
      <h1>
        Welcome to Mystic
      </h1>
      <div>
      <button class='btn-large loggedOut'> 
          <router-link style="text-decoration: none; color: inherit;" to="/login">Login</router-link>
      </button>
      <button class='btn-large loggedOut'> 
          <router-link style="text-decoration: none; color: inherit;" to="/register">Sign Up</router-link>
      </button>
      
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
};
</script>

<style lang="scss">

.btn-large{
  margin:2%;
  margin-top:20%
}
h1{
  background-color: white;
  padding:2%;
}
</style>