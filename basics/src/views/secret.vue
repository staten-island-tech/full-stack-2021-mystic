<template>
<div  class="secret">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Welcome</h3>
          <form @submit.prevent="pressed" id="signup-form">
            <div class="input-field">
              <input type="text" placeholder="Please Enter Your Name" required />
            </div>
            <p>Who would you like to date with?</p>
            <br>
            <button class="btn">Start</button>
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

.secret{
    margin:35%;
    margin-top:4%;
    align-items: center;
    text-align: center;
    margin:none;
}

</style>