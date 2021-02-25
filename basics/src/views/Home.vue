<template>
<<<<<<< HEAD
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
=======
  <div class="container">
    <h1>Hello {{ student }}</h1>
    <button v-on:click="changeStudent">Change Student</button>
    <h3>{{ animal }}</h3>
    <button @click="changeAnimal">Change Animal</button>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
>>>>>>> parent of a52572b (uploaded Day 2)
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
<<<<<<< HEAD
  components: {
    HelloWorld
  }
=======
  components: {},
  data() {
    return {
      student: "Harry",
      animals: ["horse", "savva", "pig", "Zebra", "lion"],
      animal: "",
    };
  },
  methods: {
    changeStudent: function() {
      this.student = "Charlene";
    },
    changeAnimal: function() {
      let number = Math.floor(Math.random() * 5);
      this.animal = this.animals[number];
    },
  },
>>>>>>> parent of a52572b (uploaded Day 2)
};
</script>

<style lang="scss">


.btn-large{
  margin:2%;
}
</style>
