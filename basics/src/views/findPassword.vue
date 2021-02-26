<template>
<div class="findPass">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Reset Password</h3>
          <form @submit.prevent="sendEmail" id="lost-form">
            <div class="input-field">
              <input type="email" placeholder="email" v-model="email" id="lost-email" required />
            </div>
            <button class="btn">Reset</button>
          </form>
        </div>
    </div>
    <p>
        <router-link to="/login">Login</router-link>
    </p>

</div>
</template>

<script>
import firebase from "firebase"
    export default {
        name:"Login",
        data(){
        return{
            email:"",
            password:"",
            error:""
        };
    },
    methods:{
        sendEmail() {
            if (!this.email) {
                this.error = "Please type in a valid email address.";
                return;
            }
            this.error = null;
            this.emailSending = true;
            firebase
            .auth()
            .sendPasswordResetEmail(this.email)
            .then(() => {
            this.emailSending = false;
            })
            .catch(error => {
            this.emailSending = false;
            this.error = error.message;
            });
            alert('A link for reseting Password had been send to your Email!');
}
    }
    }
</script>

<style lang="scss" scoped>
.findPass{
    margin:35%;
    margin-top:5%;
    align-items: center;
    text-align: center;
    margin:none;
}
</style>