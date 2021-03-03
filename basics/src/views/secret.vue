<template>
<div  class="secret">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Welcome</h3>
          <form @submit.prevent=start id="signup-form">
            <div class="input-field">
              <input type="text" placeholder="Please Enter Your Name" />
            </div>
            <p>Who would you like to date with?</p>
            <br>
            <button class="btn">Start</button>
          </form>
            <button class="btn" @click="logout">Logout</button>
        </div>
    </div>
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
        logout(){
        firebase
            .auth()
            .signOut()
            .then(() => {
            this.$router.push({
                name:"Home",
                query: { redirect: '/about' }
            });
        })
        .catch(error => (this.error = error));
        }},
        /* start(){
            const name = (this.text);
            this.$router.push({
                name:"Home",
                query: { redirect: '/about' }
            });
        } */
    }
</script>

<style lang = "scss">

.secret{
    margin:35%;
    margin-top:4%;
    align-items: center;
    text-align: center;
    margin:none;
}
.btn{
    margin:5%;
}

</style>