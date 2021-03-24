<template>
<div class="login">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Login</h3>
          <form @submit.prevent="pressed" id="login-form">
            <div class="input-field">
              <input type="email" placeholder="email" v-model="email" id="login-email" required />
            <br>
              <input type="password" placeholder="password" v-model="password" id="login-password" required />
            </div>
            <button class="btn">Login</button>
          </form>
        </div>
    </div>
    <p>Don't have an account yet? 
        <router-link to="/register">Sign Up</router-link>
    </p>
    <br>
    <p>
        <router-link to="/findPassword">Forget Password</router-link>
    </p>

</div>
</template>

<script>
import firebase from "firebase";
import M from 'materialize-css';

/* router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth.currentUser

  if (requiresAuth && !currentUser) next({ path: '/login', query: { redirect: to.fullPath } })
  else if (!requiresAuth && currentUser) next('/')
  else if (!requiresAuth && !currentUser) next()
  else next()
}); */

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
        mounted () {
            M.AutoInit();
        },
        pressed(){
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
}

</style>
