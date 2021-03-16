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
            uid:firebase.auth().uid,
            username:'',

        }
    },
    methods:{
        
    }
}

</script>