<template>
<div>
    <div v-if="error" class="error">{{error.message}}</div>
    <div id="modal-login" class="modal">
        <div class="modal-content">
          <h4>Login</h4><br />
          <form @submit.prevent="pressed" id="login-form">
            <div class="input-field">
              <input type="email" id="login-email" required />
              <label for="login-email">Email address</label>
            </div>
            <div class="input-field">
              <input type="password" id="login-password" required />
              <label for="login-password">Your password</label>
            </div>
            <button class="btn">Login</button>
          </form>
        </div>
    </div>

</div>
</template>

<script>
/* const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred.user)
        //close and reset
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
    
}) */
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
            .signInWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
                console.log(cred.user);
                this.$router.replace({
                    name:"secret"
                });
            })
            .catch(error => (this.error = error));
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>