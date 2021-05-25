<template>
  <div class="secret">
    <div v-if="error" class="error">{{ error.message }}</div>
    <div>
      <div>
        <h3>Welcome</h3>
        <form @submit.prevent="getUsername" id="signup-form">
          <div class="input-field">
            <input
              type="text"
              placeholder="Please Enter Your Name"
              v-model="name"
            />
          </div>
          <br />
          <button class="btn" >Start</button>
        </form>
      </div>
    </div>
    <p>
      Already have an account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import M from "materialize-css";
import {db,user} from "../main";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      name: "",
    };
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    start() {
      db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(doc=>{
        let username = doc.data().username;
        this.name = username;
        let data = { name:this.name };
        this.$router.push({ 
          name: "Dialogue", 
          params: { data } 
        });
      })    
    },
    getUsername(){
      db
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
          username:this.name,
          email: firebase.auth().currentUser.email,
          uid:firebase.auth().currentUser.uid,
      }).then(() => {
        this.start();
          this.$router.replace({
          name:"Interface",
      });
      }).catch(error => (this.error = error));
    }
  },
};
</script>

<style lang="scss">
.secret {
  margin: 35%;
  margin-top: 4%;
  align-items: center;
  text-align: center;
  margin: none;
  background-color: white;
  padding:3%;
}
</style>
