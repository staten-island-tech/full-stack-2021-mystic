<template>
<section>
    <div v-if="error" class="error">{{error.message}}</div>
    <div id="modal-signup" class="modal">
        <div class="modal-content">
          <h4>Sign up</h4>
          <form id="signup-form">
            <div class="input-field">
              <input type="email" v-model="email" id="signup-email" required />
              <label for="signup-email">Email address</label>
            </div>
            <div class="input-field">
              <input type="password" v-model="password" id="signup-password" required />
              <label for="signup-password">Choose password</label>
            </div>

            <button class="submit">Sign up</button>
          </form>
        </div>
    </div>
</section>
      
    

</template>
<script>
import M from 'materialize-css'
import * as firebase from "firebase/app";
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
            .createUserWithEmailandPassword(this.email, this.password)
            .then(() => {
                console.log("here");
                this.$router.replace({
                    name:"secret"
                });
            })
            .catch(error => (this.error = error));
        }
    }
};
</script>

<style lang = "scss">


</style>