<template>
<div  class="sign-up">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Sign Up</h3>
          <form @submit.prevent="pressed" id="signup-form">
            <div class="input-field">
            <br>
            <input type="email" placeholder="email" v-model="email" id="signup-email" required />
            <br>
            <input type="password" placeholder="password" v-model="password" id="signup-password" required />
            </div>
            <button class="btn">Sign Up</button>
          </form>
        </div>
    </div>
    <p>Already have an account?
        <router-link to="/login">Login</router-link>
    </p>
</div>
      
    

</template>
<script>
import M from 'materialize-css';
import firebase from "firebase";
import "firebase/auth";


export default {
    data(){
        return{
            email:"",
            password:"",
            error:""
        };

    },
    mounted () {
        M.AutoInit();
    },
    methods:{
        signIn(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                console.log(user.data);
                this.$router.push({
                    name:"secret",
                    query: { redirect: '/secret' }
                });
            })
            .catch(error => (this.error = error));
            err => {
                alert(err);
            }
        },
        pressed(){
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                this.signIn();
                console.log(user.data);
                this.$router.replace({
                    name:"secret",
                    query: { redirect: '/secret' }
                });
            })
            .catch(error => (this.error = error));
            err => {
                alert(err);
            }
        },
        /* getUserinfo(){
            firebase.auth().onAuthStateChanged((user) => {
            if(user){
            firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("info")
            .add({
                username:"",
                email: firebase.auth().currentUser.email,
                uid:firebase.auth().currentUser.uid,
            }).then(() => {
            console.log("You've successfully created an account")
            })
            .catch(error => (this.error = error));
            }else{
                alert("Please try again")
            }
            });
        } */
    }
};
</script>

<style lang = "scss">

.sign-up{
    margin:35%;
    margin-top:4%;
    align-items: center;
    text-align: center;
    margin:none;
}

</style>