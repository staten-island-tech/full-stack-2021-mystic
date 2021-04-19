<template>
    <section class="dialogue">
        <button v-on:click="data">Start</button>
        <div v-for="dialogue in dialogues" :key="dialogue.id" class="text">
        <h6 class="name">
            {{dialogue.name}}
        </h6>
        <p class="text">
            {{dialogue.dialogue}}
        </p>
        <!--<h6 v-if="path1.name" class="name">
            {{path1.name}}
        </h6>
        <h6 v-else v-on:click="diaplayUsername">
            {{this.username}}
        </h6>
         -->
        </div>
    </section>
</template>

<script>
import firebase from "firebase";

export default {
    data(){
        return{
            dialogues:[],
            username:''
        };
    },
    
    methods:{
        /* next(){
            const userArr = firebase.collection('users');
            userArr.onSnapshot((userInfo) => {
                const users = [];
                userInfo.forEach((doc) => {
                    const user = doc.data();
                    user.id = firebase.auth.currentUser.uid;
                    users.push(user);
                });
                store.userInFiles = users;
            })
        } */
        data(){
            fetch('http://localhost:3000/dialogues')
                .then((res) => res.json())
                .then((data) => this.dialogues[0] = data)
                .catch(err =>console.log(err.message))
            },
        diaplayUsername(){
            return{
                username:  
                firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("info")
            }
        }
    }   
}

</script>

<style>

section{
    height: 90vh;
}

.dialogue{
    display: block;
    background: rgb(100, 96, 96);
    color: black;
    height: 20vh;
    margin-top: 70vh;
    align-content: left;
    align-items: left;

}
.text{
    display: block;
    font-size: 1.8rem;
    border: solid green 1px;
}
.name{
    width:10vw;
    height: 3vh;
    align-items: left;
    border: red 1px solid;
}
</style>