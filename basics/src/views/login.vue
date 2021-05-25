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
import {db,user} from "../main";
import M from 'materialize-css';

    export default {
        data(){
        return{
            email:"",
            password:"",
            error:"",
            name:""
        };
    },
    mounted () {
        M.AutoInit();
    },
    methods:{
        /* start() {
        firebase.auth().onAuthStateChanged(
        function(user){
            if(user != null){
            firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(doc=>{
                this.name = doc.data().username;
                let data = { name:this.name };
                this.$router.push({ 
                name: "Dialogue", 
                params: { data } 
                });
            })   
            } })
        }, */
        pressed(){
            const initializeAuth = new Promise(resolve => {
                firebase.auth().onAuthStateChanged(user => {
                    authService.setUser(user)
                    resolve(user)
                })
                });
            user
            .signInWithEmailAndPassword(this.email, this.password)
            .then(data => {
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
    background-color: white;
    padding:3%;
}
</style>