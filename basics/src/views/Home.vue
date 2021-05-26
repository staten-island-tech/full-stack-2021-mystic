<template>
  <div class="home">
    
      <div class="welcome-message">
      <h1>
        Welcome to Mystic
      </h1>
      <button class='btn-large black center'> 
          <router-link style="text-decoration: none; color: inherit; font-weight:bold"  to="/register">Start</router-link>
      </button>
      </div>
      <img id="L1" src="../assets/photos/natsume.png">
      
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
  margin-top:20%
}
.welcome-message{
  height:15vh;
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
img{
  width: 40%;
  display: block;
  z-index: -99;
}

#L1{
  position: absolute;
  right: 0px;
  bottom: 0px;
}
</style>