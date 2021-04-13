<template>
    <section class="dialogue">
            <h6 class="name">
                {{username.username}}
            </h6>
        <!-- <div @click ="next">
            <p>
                {{this.dialogue}}
            </p>
        </div> -->
        <div>
            <p> Hello</p>
        </div>

    </section>
</template>

<script>
import firebase from "firebase";
import dialogue from "@/assets/voicelines.json";

export default {
    data(){
        return{
            username:'',
        }
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
        startGame(){
            fetch(dialogue)
            .then(function(response){
                return dialogue(response);
            })
            .then (function (data){
                appendData(data);
            })
            .catch(function(err){
                console.log(err);
            })
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
    color: white;
    font-size: 1.8rem;
    border: solid green 1px;
    height: 20vh;
    margin-top: 70vh;
    align-content: left;
    align-items: left;

}

.name{
    width:10vw;
    height: 3vh;
    align-items: left;
    border: red 1px solid;
}
</style>