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
            firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase
               .firestore()
                .collection("users")
                .doc(fb.uid)
                .collection("profile")
                .add({
                    username:this.username,
                    email: fb.email,
                    uid:fb.uid,
                }).catch(error => (this.error = error));
                    console.log("User is signed in.");
            } else {
                console.log("No user is signed in.");

            }
            });
        }
    }   
}

</script>