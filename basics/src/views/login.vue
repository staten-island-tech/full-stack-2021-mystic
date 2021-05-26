<template>
<div class="login">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Login</h3>
          <form @submit.prevent="login" id="login-form">
            <div class="input-field">
            <label>Login</label>
              <input type="email" placeholder="email" v-model="email" id="login-email" required />
            <br>
              <input type="password" placeholder="password" v-model="password" id="login-password" required />
            </div>
            <button class="btn black">Login</button>
          </form>
        </div>
    </div>
    <p>Don't have an account yet? 
        <router-link class="routerLink" to="/register">Sign Up</router-link>
    </p>
    <br>
    <p>
        <router-link class="routerLink" to="/findPassword">Forget Password</router-link>
    </p>

</div>
</template>

<script>
import {db,user,userCollection} from "../main";
import M from 'materialize-css';
export default {
        data(){
        return{
            email:"",
            password:"",
            error:"",
            name:"",
            user:""
        };
    },
    mounted () {
        M.AutoInit();
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/Interface')
        }
      }
    },
    methods:{
        /* login(){
            user
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                user.onAuthStateChanged((user) => {
                console.log("On Auth State Changed")
                if (!user) {
                    console.log("No existe usuario. Redireccionando a login");
                    router.replace('/login'); 
                } else{
                    console.log("user logged in -> "+ user.email);
                    this.$router.replace({
                    name:"Interface",
                    });
                    }
                });
                //this.start();
                console.log("user logged in")
                
                
            })
            .catch(error => (this.error = error));
            err => {
                alert(err);
            }
        },   */
        login(){
            this.$store.dispatch('login', 
            {email: this.email, 
            password: this.password})
        }
    }
}

</script>

<style lang="scss">
.login{
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
}
</style>