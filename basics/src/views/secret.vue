<template>
<div  class="secret">
    <div v-if="error" class="error">{{error.message}}</div>
    <div>
        <div>
          <h3>Welcome</h3>
          <form @submit.prevent=getUsername id="signup-form">
            <div class="input-field">
              <input type="text" v-model="username" id="username" placeholder="Please Enter Your Name" />            
            </div>
<!--             <p>Who would you like to date with?</p> -->
            <br>
            <!-- <button @click="startGame" class="btn"> -->
             <button class="btn">
                 Start  
            </button>
            
          </form>
            <button class="btn" @click="logout">Logout</button>
        </div>
    </div>
</div>
      
    

</template>
<script>
import M from 'materialize-css';
import firebase from "firebase";

export default {
    data(){
        return{
            email:"",
            password:"",
            uid:"",
            username:"",
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
        },
        getUsername(){
            firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("info")
            .add({
                username:this.username,
                email: firebase.auth().currentUser.email,
                uid:firebase.auth().currentUser.uid,
            })/* .then(() => {
                this.startGame();
            }) */.catch(error => (this.error = error));
        },
        /* startGame(){
            firebase
            .firestore()
            .collection('Current paths')
            .doc("ogpath")
            .collection('L1')
            .doc('Og')
            .get()
            .then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => doc.data())
                // do something with documents
            });
            firestoreAction(({ Og }) => {
            return Og('Current paths',
            firebase
            .firestore()
            .collection('Current paths')
            .doc("ogpath")
            .collection('L1')
            .doc('Og')
            .orderBy('createdAt')
            )
            })
        }
 */
        } 

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