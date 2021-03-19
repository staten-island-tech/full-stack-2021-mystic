<template>
    <section>
        <h1>
            {{this.name}}
        </h1>
        <div @click ="next">
            <p>
                {{this.dialogue}}
            </p>
        </div>
        <div class="dialogue">

        </div>

    </section>
</template>

<script>
export default {
    data(){
        return{
            uid:firebase.auth().currentUser.uid,
            username:'',

        }
    },
    methods:{
        next(){
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
        }
    }   
}

</script>

<style>

.dialogue{
    background: gray;
    font-size: 5rem;
    border: solid black;
}
</style>