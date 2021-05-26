<template>
  <div class="home">
      <div class="welcome-message">
      <h1 class="welcomelogo">
        Welcome to Mystic
      </h1>
      <div>
      <button class='btn-large black'> 
          <router-link style="text-decoration: none; color: inherit; font-weight:bold"  to="/register">Start</router-link>
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
h1.welcomelogo{
  background-color: white;
  border: 3px black solid;
  width:55vw;
  margin-top: 5%;
  margin-right: 0;
  padding:2%;
  color:#312c50;
  text-decoration: none; 
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:bold;
  display: block;
  align-content: center;
}
</style>