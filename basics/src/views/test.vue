<template>
    <div id="profile">
    <div>
      <input type="text"
        v-model="username"
        @keyup.enter="add">
      <button  @click="addUsername">
        Add Name
      </button>
    </div>
    <ul class="usernames">
      <li v-for="user in users" >
        {{ user.name }} -
        <button @click="deletename(user)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
//import { db } from './main';

export default {
    name: 'profile',
    data() {
      return {
        users: [],
        username: ''
      }
    },
    firestore() {
      return {
        users: db.collection('users'),
      }
    },
    methods: {
      addName: function() {
        this.$firestore.users.add(
          {
            name: this.username,
            timestamp: new Date()
          }
        );
        this.username = '';
      },
      changeName: function(user) {
        this.$firestore.users.doc(user['.key']).replace();
      }
    }
  }
</script> 