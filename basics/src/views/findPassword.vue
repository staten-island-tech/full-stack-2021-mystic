<template>
<div id="login">
    <div v-if="error" class="error">{{error.message}}</div>
    <div id="modal-login" class="modal">
        <div class="modal-content">
          <h4>Login</h4><br />
          <form @submit.prevent="sendEmail" id="login-form">
            <div class="input-field">
              <input type="email" placeholder="email" v-model="email" id="lost-email" required />
            </div>
            <button class="btn">Reset Password</button>
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
}
    }
    }
</script>

<style lang="scss" scoped>

</style>
