<template>
<div  class="sign-up">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Sign Up</h3>
          <form @submit.prevent="pressed" id="signup-form">
            <div class="input-field">
              <input type="email" placeholder="email" v-model="email" id="signup-email" required />
              <br>
              <input type="password" placeholder="password" v-model="password" id="signup-password" required />
            </div>
            <button class="btn black">Sign Up</button>
          </form>
        </div>
    </div>
    <p>Already have an account?
        <router-link class="routerLink" to="/login">Login</router-link>
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
        pressed(){
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                console.log(user.data);
                this.$router.replace({
                    name:"Secret"
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
.sign-up{
    margin:35%;
    margin-top:4%;
    align-items: center;
    text-align: center;
    margin:none;
    background-color: white;
    padding:3%;
}
.routerLink{
    text-decoration: none;
    text-emphasis: underline;
}
</style>