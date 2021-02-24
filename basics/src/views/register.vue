<template>
<div id="signup">
    <div v-if="error" class="error">{{error.message}}</div>
    <div id="modal-signup" class="modal">
        <div class="modal-content">
          <h4>Sign up</h4>
          <form @submit.prevent="pressed" id="signup-form">
            <div class="input-field">
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
import M from 'materialize-css'
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
    methods:{
        pressed(){
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                console.log(user.data);
                this.$router.replace({
                    name:"secret"
                });
            })
            .catch(error => (this.error = error));
            err => {
                alert(err);
            }
        }
    }
};
</script>

<style lang = "scss">


</style>