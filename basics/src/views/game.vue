<template>
    <section class="dialogue">
<!--    <div @click="listId" class="text"> <div v-for="dialogue in dialogues" :key="dialogue.id" class="text"></div> -->
        <div class="text">
        <h6 class="name">
            {{dialogues[index].name}}
        </h6>
        <p class="text">
            {{dialogues[index].dialogue}}
        </p>
        <button @click="listId">Next</button>
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
            index:5,
            dialogues:[],
            username:'',
        };
    },
    mounted(){
        fetch('http://localhost:3000/dialogues')
                .then((res) => res.json())
                .then((data) => this.dialogues = data)
                .catch(err =>console.log(err.message))
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
        db(){
            fetch('http://localhost:3000/dialogues')
                .then((res) => res.json())
                .then((data) => this.dialogues = data)
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
        },
        listId(){
            for(const index = this.dialogues.index; index <= this.dialogues.length; index++){
            this.dialogues.name = this.dialogues[index].name;
            this.dialogues.dialogue = this.dialogues[index].dialogue;
            return this.dialogues.dialogue.id++
            }
            /* const i = this.listID;
            for (i <= this.dialogues.length; i++;){
                this.dialogue.name = this.dialogue[i].name;
                this.dialogue.dialogue = this.dialogues[i].dialogue;
            }
            console.log("i"); */
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
    border: solid green 2px;
}
.name{
    width:10vw;
    height: 3vh;
    align-items: left;
    border: red 1px solid;
}
</style>y