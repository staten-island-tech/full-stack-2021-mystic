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
        <button class="btn-small" @click="listId">Next</button>
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
            for(this.index <= this.dialogues.length; this.index++;){
            return this.index
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
    background: rgb(99, 98, 98);
    color: rgb(255, 255, 255);
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

.btn-small{
    align-content: right;
    align-items: right;
    font-size: 2rem;
    color: black;
}
</style>y