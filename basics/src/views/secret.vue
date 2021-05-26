<template>
  <div class="secret">
    <div v-if="error" class="error">{{ error.message }}</div>
    <div>
      <div>
        <h3>Welcome</h3>
        <form @submit.prevent="start" id="signup-form">
          <div class="input-field">
            <label>Enter your name</label>
            <input
              type="text"
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
import firebase from "firebase";
import "firebase/auth";
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
  start(){
        firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((docSnapshot)=>{
          if(docSnapshot.exists){
            firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid).onSnapshot((doc)=>{
          this.name = doc.data().username;
          let data = { name:this.name };
          this.$router.push({ 
            name: "Dialogue", 
            params: { data } 
          }); 
        })
        }else{
            firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
            username:this.name,
            email: firebase.auth().currentUser.email,
            uid:firebase.auth().currentUser.uid,
            eventIndex:""
        }).then(() => {
          this.start();
            this.$router.replace({
            name:"Interface",
        });
        }).catch(error => (this.error = error));
        }
      })
  },

  },
}
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
