<template>
<div  class="secret">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Welcome</h3>
          <form @submit.prevent=start id="signup-form">
            <div class="input-field">
              <input type="text" v-model="username" id="username" placeholder="Please Enter Your Name" />
            <input type="text" v-model="pronoun" id="pronoun" placeholder="Preffered Prounoun" />
            
            </div>
<!--             <p>Who would you like to date with?</p> -->
            <br>
            <button class="btn" @click="getUsername">
             Start   <!-- <router-link to="/game">Start</router-link> -->
            </button>
          </form>
            <button class="btn" @click="logout">Logout</button>
        </div>
    </div>
</div>
      
    

</template>
<script>
import M from 'materialize-css';
import firebase from "firebase";

export default {
    data(){
        return{
            email:"",
            password:"",
            uid:"",
            username:"",
            error:""
        };

    },
    
    mounted () {
        M.AutoInit();
    },
    methods:{
        logout(){
        firebase
            .auth()
            .signOut()
            .then(() => {
            this.$router.push({
                name:"Home",
                query: { redirect: '/about' }
            });
        })
        .catch(error => (this.error = error));
        },
        getUsername(){
            const fb = firebase.auth().currentUser;
            firebase
            .firestore()
            .collection("users")
            .doc(fb.uid)
            .collection("profile")
            .add({
                username:this.username,
                pronoun:this.pronoun,
                email: fb.email,
                uid:fb.uid,
            })
        },
        start(){
            this.$router.push({
                name:"Home",
                query: { redirect: '/about' }
            });
        } 
}}
</script>

<style lang = "scss">

.secret{
    margin:35%;
    margin-top:4%;
    align-items: center;
    text-align: center;
    margin:none;
}
.btn{
    margin:5%;
}

</style>